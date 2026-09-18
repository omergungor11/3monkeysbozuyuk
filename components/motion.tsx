"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );
    els.forEach((el) => {
      el.classList.add("reveal-ready");
      observer.observe(el);
    });
    const hero = document.querySelector<HTMLElement>(".hero");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (hero && !media.matches) {
        const y = Math.min(window.scrollY, window.innerHeight);
        hero.style.setProperty("--hero-shift", y * 0.13 + "px");
        hero.style.setProperty("--copy-shift", y * 0.2 + "px");
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", onScroll, { passive: true });
    update();
    const reset = () => {
      if (media.matches) {
        els.forEach((el) => el.classList.add("is-visible"));
        hero?.style.setProperty("--hero-shift", "0px");
        hero?.style.setProperty("--copy-shift", "0px");
      }
    };
    media.addEventListener("change", reset);
    return () => {
      observer.disconnect();
      removeEventListener("scroll", onScroll);
      media.removeEventListener("change", reset);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);
  return null;
}
