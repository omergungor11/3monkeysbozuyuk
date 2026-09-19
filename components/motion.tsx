"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reveal = (el: HTMLElement) => {
      el.classList.add("is-visible");
      observer?.unobserve(el);
    };
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );
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
    const syncPreference = () => {
      observer?.disconnect();
      if (media.matches || !observer) {
        els.forEach(reveal);
        hero?.style.setProperty("--hero-shift", "0px");
        hero?.style.setProperty("--copy-shift", "0px");
      } else {
        els.forEach((el) => {
          // Keep previously revealed content visible on preference changes.
          if (el.classList.contains("is-visible")) return;
          el.classList.add("reveal-ready");
          observer.observe(el);
        });
        update();
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("[data-reveal]");
      if (target) reveal(target);
    };
    syncPreference();
    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("focusin", onFocus);
    media.addEventListener("change", syncPreference);
    return () => {
      observer?.disconnect();
      removeEventListener("scroll", onScroll);
      document.removeEventListener("focusin", onFocus);
      media.removeEventListener("change", syncPreference);
      cancelAnimationFrame(frame);
      els.forEach((el) => el.classList.remove("reveal-ready"));
    };
  }, [pathname]);
  return null;
}
