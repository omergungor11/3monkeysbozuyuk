"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, RotateCcw } from "lucide-react";
const layers = [
  {
    name: "Brioche ekmeği",
    description: "Her şey güzel bir başlangıç ister.",
    start: 0,
    end: 440,
    y: -300,
    final: -125,
    angle: -9,
  },
  {
    name: "Sos & eşlikçiler",
    description: "Her ısırığa ayrı bir karakter.",
    start: 440,
    end: 780,
    y: -180,
    final: -35,
    angle: 7,
  },
  {
    name: "Cheddar",
    description: "Aradaki o eriyen mutluluk.",
    start: 780,
    end: 1125,
    y: -60,
    final: 0,
    angle: -6,
  },
  {
    name: "Dana köftesi",
    description: "Burgerin tam kalbi.",
    start: 1125,
    end: 1480,
    y: 60,
    final: 39,
    angle: 5,
  },
  {
    name: "Taze yeşillikler",
    description: "Dengenin çıtır tarafı.",
    start: 1480,
    end: 1800,
    y: 180,
    final: 82,
    angle: -5,
  },
  {
    name: "Kızarmış taban",
    description: "Bütün lezzeti bir arada tutar.",
    start: 1800,
    end: 2172,
    y: 300,
    final: 125,
    angle: 6,
  },
];
export default function BurgerAssembly() {
  const root = useRef<HTMLElement>(null);
  const [assembled, setAssembled] = useState(false);
  const [stage, setStage] = useState(0);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    const section = root.current;
    if (!section) return;
    let frame = 0;
    const render = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const raw = Math.max(
        0,
        Math.min(1, -rect.top / Math.max(1, rect.height - innerHeight)),
      );
      const p =
        assembled || reduced ? 1 : Math.min(1, Math.max(0, (raw - 0.08) / 0.8));
      const eased = p * p * (3 - 2 * p);
      section.style.setProperty("--assembly", String(eased));
      setStage(p > 0.85 ? 2 : p > 0.3 ? 1 : 0);
      section.querySelectorAll<HTMLElement>(".ingredient").forEach((el, i) => {
        const layer = layers[i];
        const small = innerWidth < 800;
        const scale = small ? 0.66 : 1;
        const y = (layer.y + (layer.final - layer.y) * eased) * scale;
        el.style.transform =
          "translate(-50%, calc(-50% + " +
          y +
          "px)) rotateX(" +
          35 * (1 - eased) +
          "deg) rotateZ(" +
          layer.angle * (1 - eased) +
          "deg)";
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    render();
    return () => {
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [assembled, reduced]);
  return (
    <section
      className="assembly-section"
      ref={root}
      aria-labelledby="assembly-title"
    >
      <div className="assembly-sticky">
        <div className="assembly-intro">
          <p className="section-kicker">01 / İŞİN İÇ YÜZÜ</p>
          <h2 id="assembly-title">
            İYİ BURGER.
            <br />
            <em>
              KATMAN
              <br />
              KATMAN.
            </em>
          </h2>
          <p>
            Birbirinden farklı karakterler.
            <br />
            Bir araya gelince tam bir 3 Monkey.
          </p>
          {!reduced && (
            <div className="assembly-instruction">
              <ArrowDown size={18} />
              <span>Kaydır. Lezzet bir araya gelsin.</span>
            </div>
          )}
          {!reduced && (
            <button
              className="text-button"
              onClick={() => setAssembled(!assembled)}
              aria-pressed={assembled}
            >
              <RotateCcw size={14} />
              {assembled ? "Kaydırma animasyonuna dön" : "Birleşmiş halini gör"}
            </button>
          )}
        </div>
        <div
          className="burger-stage"
          role="img"
          aria-label="Brioche ekmeği, sos, cheddar, dana köftesi, yeşillikler ve alt ekmek; kaydırıldıkça birleşen altı burger katmanı"
        >
          <span className="stage-ring" aria-hidden="true" />
          <span className="stage-number" aria-hidden="true">
            3
          </span>
          {layers.map((layer, i) => (
            <div
              className="ingredient"
              aria-hidden="true"
              key={layer.name}
              style={{
                zIndex: 10 - i,
                aspectRatio: "724 / " + (layer.end - layer.start),
                transform: "translate(-50%, calc(-50% + " + layer.y + "px))",
              }}
            >
              <img
                src="/images/burger-ingredients-sprite.png"
                alt=""
                loading="lazy"
                style={{
                  top: (-layer.start / (layer.end - layer.start)) * 100 + "%",
                  width: "100%",
                  maxWidth: "none",
                }}
              />
            </div>
          ))}
        </div>
        <div className="ingredient-notes">
          <p className="section-kicker">HER PARÇASI BİR SEBEP</p>
          {layers.map((layer, i) => (
            <div className="ingredient-note" key={layer.name}>
              <span>0{i + 1}</span>
              <div>
                <h3>{layer.name}</h3>
                <p>{layer.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="assembly-progress">
          <span>
            {["PARÇALARI TANI", "LEZZETİ BİRLEŞTİR", "İŞTE 3 MONKEY"][stage]}
          </span>
          <div>
            <i />
          </div>
          <span>0{stage + 1} / 03</span>
        </div>
      </div>
    </section>
  );
}
