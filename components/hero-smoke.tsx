"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export type HeroSmokeProps = {
  className?: string;
  style?: CSSProperties;
};

const VERTEX_SHADER = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.52;
  mat2 rotation = mat2(0.80, 0.60, -0.60, 0.80);

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = rotation * p * 2.03 + vec2(7.7, 3.1);
    amplitude *= 0.5;
  }

  return value;
}

float plume(vec2 p, float origin, float seed, float scale, float time) {
  float height = p.y;
  float risingTime = time * (0.32 + seed * 0.012);

  float broadNoise = noise(vec2(height * 1.55 - risingTime * 0.16, seed * 8.7));
  float center = origin
    + sin(height * 4.2 + time * 0.34 + seed) * (0.018 + height * 0.038)
    + (broadNoise - 0.5) * (0.045 + height * 0.075);

  vec2 turbulencePoint = vec2(
    (p.x - center) * 4.1 / scale + seed * 5.3,
    height * 3.0 - risingTime
  );
  float curl = fbm(turbulencePoint + vec2(0.0, fbm(turbulencePoint * 0.52))) - 0.5;
  float width = mix(0.045, 0.19, smoothstep(-0.05, 0.92, height)) * scale;
  float distanceFromCore = abs(p.x - center + curl * 0.075 * scale);
  float body = 1.0 - smoothstep(width * 0.28, width, distanceFromCore);

  float detail = fbm(vec2(
    (p.x - center) * 6.6 / scale + seed * 10.0,
    height * 4.25 - risingTime * 1.18
  ));
  float rolling = fbm(vec2(
    (p.x - center) * 3.2 / scale - seed * 4.0,
    height * 2.25 - risingTime * 0.62
  ));
  float texture = smoothstep(0.30, 0.73, detail * 0.72 + rolling * 0.48);

  float birth = smoothstep(-0.08, 0.09, height);
  float dissolve = 1.0 - smoothstep(0.64, 1.04, height + (detail - 0.5) * 0.17);
  return body * texture * birth * dissolve;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  vec2 p = vec2((uv.x - 0.5) * aspect + 0.5, uv.y);
  float xScale = mix(1.0, aspect, 0.34);

  float left = plume(p, 0.19 - (aspect - 1.0) * 0.06, 1.2, 0.82 * xScale, u_time);
  float center = plume(p, 0.50, 2.7, 1.12 * xScale, u_time + 2.4);
  float right = plume(p, 0.81 + (aspect - 1.0) * 0.05, 4.1, 0.78 * xScale, u_time + 4.7);

  float wisps = plume(p, 0.34, 5.8, 0.48 * xScale, u_time + 7.2) * 0.42;
  wisps += plume(p, 0.68, 7.1, 0.44 * xScale, u_time + 9.6) * 0.38;

  float density = clamp(left * 0.72 + center * 0.82 + right * 0.70 + wisps, 0.0, 1.0);
  density *= 0.72 + 0.28 * smoothstep(0.0, 0.56, uv.y);

  float emberNoise = fbm(vec2(p.x * 3.1 + 8.0, p.y * 3.6 - u_time * 0.24));
  float amberAmount = (1.0 - smoothstep(0.12, 0.78, uv.y)) * 0.42;
  amberAmount += smoothstep(0.66, 0.91, emberNoise) * 0.11;

  vec3 charcoal = vec3(0.48, 0.47, 0.44);
  vec3 warmSmoke = vec3(0.66, 0.43, 0.21);
  vec3 smokeColor = mix(charcoal, warmSmoke, clamp(amberAmount, 0.0, 0.48));
  float alpha = density * 0.42;

  // The canvas uses premultiplied alpha, which keeps soft plume edges clean.
  gl_FragColor = vec4(smokeColor * alpha, alpha);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export function HeroSmoke({ className, style }: HeroSmokeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
      powerPreference: "low-power",
      preserveDrawingBuffer: false,
    });
    if (!gl) return;

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      FRAGMENT_SHADER,
    );
    if (!vertexShader || !fragmentShader) {
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }

    const positionLocation = gl.getAttribLocation(program, "a_position");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const positionBuffer = gl.createBuffer();

    if (
      positionLocation < 0 ||
      resolutionLocation === null ||
      timeLocation === null ||
      !positionBuffer
    ) {
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.disable(gl.BLEND);
    gl.clearColor(0, 0, 0, 0);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    let isIntersecting = true;
    let documentVisible = !document.hidden;
    let frameId = 0;
    let lastFrameAt = 0;
    let simulationTime = 0;
    let disposed = false;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const renderScale = 0.45;
      const width = Math.max(1, Math.round(bounds.width * dpr * renderScale));
      const height = Math.max(1, Math.round(bounds.height * dpr * renderScale));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform2f(resolutionLocation, width, height);
      }
    };

    const clear = () => {
      gl.clear(gl.COLOR_BUFFER_BIT);
    };

    const shouldAnimate = () =>
      !disposed && !reducedMotion && isIntersecting && documentVisible;

    const draw = (timestamp: number) => {
      frameId = 0;
      if (!shouldAnimate()) return;

      if (lastFrameAt === 0 || timestamp - lastFrameAt >= 1000 / 30 - 1) {
        const elapsed =
          lastFrameAt === 0
            ? 1 / 30
            : Math.min((timestamp - lastFrameAt) / 1000, 0.075);
        lastFrameAt = timestamp;
        simulationTime += elapsed;
        gl.uniform1f(timeLocation, simulationTime);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      frameId = window.requestAnimationFrame(draw);
    };

    const syncAnimation = () => {
      if (shouldAnimate()) {
        if (frameId === 0) {
          lastFrameAt = 0;
          frameId = window.requestAnimationFrame(draw);
        }
      } else {
        if (frameId !== 0) window.cancelAnimationFrame(frameId);
        frameId = 0;
        lastFrameAt = 0;
        if (reducedMotion) clear();
      }
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      syncAnimation();
    };

    const onVisibilityChange = () => {
      documentVisible = !document.hidden;
      syncAnimation();
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry?.isIntersecting ?? false;
        syncAnimation();
      },
      { rootMargin: "120px 0px" },
    );

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (!reducedMotion && isIntersecting && documentVisible) syncAnimation();
    });

    motionQuery.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    intersectionObserver.observe(canvas);
    resizeObserver.observe(canvas);
    resize();
    syncAnimation();

    return () => {
      disposed = true;
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
      motionQuery.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      gl.disableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.useProgram(null);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        ...style,
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}

export default HeroSmoke;
