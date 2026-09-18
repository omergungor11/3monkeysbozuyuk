import Link from "next/link";
import HeroSmoke from "@/components/hero-smoke";
import { ArrowDown, ArrowUpRight } from "lucide-react";

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
            İLK ISIRIKTA<span className="hero-title-dot">.</span>
          </span>
          <span className="hero-title-glass">
            AKLINDA KALIR<span className="hero-title-dot">.</span>
          </span>
        </h1>
      </div>
      <div className="hero-bottom">
        <p>
          Dumanı üstünde, tam kararında.
          <br />
          <span>Gerisi tamamen iştah meselesi.</span>
        </p>
        <Link className="button" href="/menu">
          MENÜYÜ KEŞFET <ArrowUpRight size={19} />
        </Link>
      </div>
      <a className="scroll-cue" href="#lezzet">
        LEZZETE DOĞRU <ArrowDown size={16} />
      </a>
      <span className="hero-index">BOZÜYÜK / BİLECİK</span>
    </section>
  );
}
