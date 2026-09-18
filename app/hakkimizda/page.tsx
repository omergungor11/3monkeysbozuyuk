import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Camera as Instagram } from "lucide-react";
import { restaurant } from "@/lib/restaurant";
export const metadata: Metadata = {
  title: "Hikâyemiz",
  description:
    "3 Monkey Burger House Bozüyük. Klasiklerden beklenmedik lezzetlere, bir masanın etrafında buluşuyoruz.",
};
export default function About() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-heading section-pad">
        <p className="section-kicker">3 MONKEY / HİKÂYEMİZ</p>
        <h1>
          BURGERİ CİDDİYE.
          <br />
          <em>HAYATI KEYFE AL.</em>
        </h1>
        <div className="page-heading-bottom">
          <p>
            Bir burgerden beklediğin her şey.
            <br />
            Bir de beklemediğin lezzetler.
          </p>
          <span className="location-label">BOZÜYÜK, BİLECİK ↗</span>
        </div>
      </section>
      <section className="about-image">
        <img
          src="/images/three-burgers-hero.png"
          alt="3 Monkey ruhunu yansıtan üç burger konsepti"
          loading="lazy"
        />
      </section>
      <section className="about-story section-pad">
        <div data-reveal>
          <p className="section-kicker">BİZİM MESELEMİZ</p>
          <h2>
            İYİ LEZZET.
            <br />
            İYİ MUHABBET.
            <br />
            <em>AYNI MASA.</em>
          </h2>
        </div>
        <div className="prose" data-reveal>
          <p>
            3 Monkey Burger House, Bozüyük’te burger etrafında buluşmak
            isteyenlerin adresi. Bazen tanıdık bir cheeseburger, bazen de “bir
            de bunu deneyeyim” dedirten bir lezzet.
          </p>
          <p>
            Menümüzde cheddar’ın klasiğine de, vişne reçeli ve Erzurum tulumunun
            şaşırtan uyumuna da yer var. Çünkü her iştahın ayrı bir karakteri
            olduğuna inanıyoruz.
          </p>
          <p>
            Arkadaşlarını topla. Kendine bir burger seç. Gerisini masadaki
            muhabbet tamamlasın.
          </p>
          <Link className="text-link" href="/menu">
            Kendi lezzetini bul <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
      <section className="manifesto section-pad" data-reveal>
        <span className="section-kicker">ÜÇ MAYMUN. ÜÇ KELİME.</span>
        <div>
          <span>İŞTAH.</span>
          <span>TUTKU.</span>
          <em>PAYLAŞ.</em>
        </div>
      </section>
      <section className="social-section section-pad" data-reveal>
        <Instagram size={36} />
        <h2>
          MUTFAKTAN
          <br />
          <em>AKIŞINA.</em>
        </h2>
        <p>Yeni lezzetler, masadan kareler ve Bozüyük’ten anlar.</p>
        <a
          className="button yellow"
          href={restaurant.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM’DA TAKİP ET <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}
