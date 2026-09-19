import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
              AYNI KALİTE.
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
            <div className="card-image">
              <img
                src="/images/menu/cheeseburger.webp"
                alt="Cheddar peynirli burger konsepti"
                width="1254"
                height="1254"
                loading="lazy"
                decoding="async"
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
                width="694"
                height="700"
                loading="lazy"
                decoding="async"
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
            <div className="card-image">
              <img
                src="/images/menu/mushroom.webp"
                alt="Mantarlı burger konsepti"
                width="1254"
                height="1254"
                loading="lazy"
                decoding="async"
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
          <Link href="/menu#burgerler" className="signature-card" data-reveal>
            <div className="card-image">
              <img src="/images/menu/honey-parmesan.webp" alt="Ballı parmesan ve turşulu Monkey Honey burger konsepti" width="1254" height="1254" loading="lazy" decoding="async" />
              <span className="card-number">04</span>
            </div>
            <div className="card-heading"><h3>MONKEY HONEY</h3><ArrowUpRight /></div>
            <p>Ballı parmesan ve cheddarın tatlı-tuzlu dengesi.<br />Her lokmada küçük bir sürpriz.</p>
          </Link>
          <Link href="/menu#burgerler" className="signature-card" data-reveal>
            <div className="card-image">
              <img src="/images/menu/truffle.webp" alt="Trüflü mayonez ve karamelize soğanlı Monkey Trüf burger konsepti" width="1254" height="1254" loading="lazy" decoding="async" />
              <span className="card-number">05</span>
            </div>
            <div className="card-heading"><h3>MONKEY TRÜF</h3><ArrowUpRight /></div>
            <p>Trüflü mayonez, cheddar ve karamelize soğan.<br />Yoğun ama dengeli bir tat.</p>
          </Link>
          <Link href="/menu#burgerler" className="signature-card" data-reveal>
            <div className="card-image">
              <img src="/images/menu/beef-bacon.webp" alt="Dana bacon ve cheddar peynirli burger konsepti" width="1254" height="1254" loading="lazy" decoding="async" />
              <span className="card-number">06</span>
            </div>
            <div className="card-heading"><h3>DANA BACON</h3><ArrowUpRight /></div>
            <p>Dana bacon, cheddar ve Monkey sosu.<br />Dolu dolu, tam kıvamında.</p>
          </Link>
        </div>
      </section>
      <section className="story-strip section-pad">
        <div className="story-copy" data-reveal>
          <p className="section-kicker">İYİ BURGER, GÜZEL MUHABBET.</p>
          <h2>
            BİZİ BİR DE
            <br />
            <em>YAKINDAN TANI.</em>
          </h2>
          <p>
            Klasik bir cheeseburger’den vişnenin sürprizine uzanan bir menü.
            Bozüyük’te bir masanın etrafında buluşmak için bolca sebep.
          </p>
          <Link href="/hakkimizda" className="text-link">
            Hikâyemiz <ArrowUpRight size={20} />
          </Link>
        </div>
        <div className="story-visual" data-reveal aria-label="3 Monkey Burger House Bozüyük dış cephesi">
          <div className="story-photo">
            <img
              src="/images/3-monkey-storefront.png"
              alt="3 Monkey Burger House Bozüyük dış cephesi ve açık hava oturma alanı"
              width="2266"
              height="1452"
              loading="lazy"
            />
            <span className="story-photo-caption">BOZÜYÜK / 3 MONKEY</span>
          </div>
        </div>
      </section>
    </>
  );
}
