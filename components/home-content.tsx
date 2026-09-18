import Link from "next/link";
import { ArrowUpRight, Camera as Instagram } from "lucide-react";
import { restaurant } from "@/lib/restaurant";
import BurgerAssembly from "@/components/burger-assembly";
export default function HomeContent() {
  return (
    <>
      <BurgerAssembly />
      <section className="signature-section section-pad">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">02 / SENİN TARAFIN HANGİSİ?</p>
            <h2>
              AYNI TUTKU.
              <br />
              <em>BAŞKA KARAKTERLER.</em>
            </h2>
          </div>
          <Link href="/menu" className="text-link">
            Bütün menüyü gör <ArrowUpRight size={20} />
          </Link>
        </div>
        <div className="signature-grid">
          <Link href="/menu#burgerler" className="signature-card" data-reveal>
            <div className="card-image crop-center">
              <img
                src="/images/three-burgers-hero.png"
                alt="Cheddar peynirli burger konsepti"
                loading="lazy"
              />
              <span className="card-number">01</span>
            </div>
            <div className="card-heading">
              <h3>CHEESEBURGER</h3>
              <ArrowUpRight />
            </div>
            <p>
              Bazı klasiklerden vazgeçilmez.
              <br />
              Dana köftesi, cheddar ve Monkey sos.
            </p>
          </Link>
          <Link
            href="/menu#burgerler"
            className="signature-card featured"
            data-reveal
          >
            <div className="card-image">
              <img
                src="/images/visne-original.png"
                alt="3 Monkey vişne soslu burger fotoğrafı"
                loading="lazy"
              />
              <span className="card-number">02</span>
              <span className="card-tag">TATLI BİR TERS KÖŞE</span>
            </div>
            <div className="card-heading">
              <h3>AŞNA VİŞNE</h3>
              <ArrowUpRight />
            </div>
            <p>
              Vişne reçeli ve Erzurum tulumu.
              <br />
              Alıştığının bir ısırık ötesi.
            </p>
          </Link>
          <Link href="/menu#burgerler" className="signature-card" data-reveal>
            <div className="card-image crop-right">
              <img
                src="/images/three-burgers-hero.png"
                alt="Mantarlı burger konsepti"
                loading="lazy"
              />
              <span className="card-number">03</span>
            </div>
            <div className="card-heading">
              <h3>MUSHROOM</h3>
              <ArrowUpRight />
            </div>
            <p>
              Marine mantar, eriyen cheddar.
              <br />
              Kendine has bir lezzet.
            </p>
          </Link>
        </div>
      </section>
      <section className="smoke-section">
        <div className="smoke-backdrop" aria-hidden="true" />
        <div className="smoke-copy" data-reveal>
          <p className="section-kicker">03 / DUMANI ÜSTÜNDE</p>
          <h2>
            BAZI ŞEYLER
            <br />
            <em>BEKLEMEYE GELMEZ.</em>
          </h2>
          <p>
            İyi bir burger. Güzel bir muhabbet.
            <br />
            Buluşma noktası belli: 3 Monkey Bozüyük.
          </p>
          <Link href="/iletisim" className="button yellow">
            BİZE UĞRA <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
      <section className="story-strip section-pad">
        <div data-reveal>
          <p className="section-kicker">BURGER BAHANE. TUTKU ŞAHANE.</p>
          <h2>
            BİZİ BİR DE
            <br />
            <em>YAKINDAN TANI.</em>
          </h2>
        </div>
        <div data-reveal>
          <p>
            Klasik bir cheeseburger’den vişnenin sürprizine uzanan bir menü.
            Bozüyük’te bir masanın etrafında buluşmak için bolca sebep.
          </p>
          <Link href="/hakkimizda" className="text-link">
            Hikâyemiz <ArrowUpRight size={20} />
          </Link>
          <a
            className="instagram-line"
            href={restaurant.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} /> @3monkeyburger_boz{" "}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
