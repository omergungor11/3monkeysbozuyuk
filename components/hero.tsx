import Link from "next/link";
import HeroSmoke from "@/components/hero-smoke";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { restaurant } from "@/lib/restaurant";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <picture className="hero-picture">
        <source
          media="(max-width: 800px) and (min-height: 501px)"
          srcSet="/images/mobile-hero.png"
        />
        <img
          className="hero-image"
          src="/images/three-burgers-hero.png"
          alt="Izgaradan yeni çıkmış üç gurme burger"
          fetchPriority="high"
          width="1672"
          height="941"
        />
      </picture>
      <div className="hero-shade" aria-hidden="true" />
      <HeroSmoke className="hero-smoke" />
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> BOZÜYÜK’ÜN EN İYİ BURGERİ
        </p>
        <h1 id="hero-title">
          <span className="hero-title-solid">
            <span className="hero-title-accent">İLK</span> ISIRIKTA
            <span className="hero-title-dot">.</span>
          </span>
          <span className="hero-title-glass">
            AKLINDA <span className="hero-title-accent hero-title-yellow">KALIR.</span>
          </span>
        </h1>
      </div>
      <div className="hero-bottom">
        <p>
          Dumanı üstünde, tam kararında.
          <br />
          <span>Hemen sipariş verin, lezzet kapınıza gelsin.</span>
        </p>
        <Link className="button" href="/menu">
          MENÜYÜ KEŞFET <ArrowUpRight size={19} />
        </Link>
      </div>
      <div className="scroll-cue">
        <a className="scroll-cue-link" href="#lezzet">
          <span>LEZZETE DOĞRU</span>
          <ArrowDown size={16} />
        </a>
        <span className="scroll-phone">
          <span aria-hidden="true">•</span>
          <a href={restaurant.phoneHref}>{restaurant.phone}</a>
        </span>
      </div>
      <span className="hero-index">BOZÜYÜK / BİLECİK</span>
    </section>
  );
}
