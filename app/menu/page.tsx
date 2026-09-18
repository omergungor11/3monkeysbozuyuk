import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { burgers, restaurant } from "@/lib/restaurant";
export const metadata: Metadata = {
  title: "Menü",
  description:
    "Classic, Cheeseburger, Aşna Vişne ve daha fazlası. 3 Monkey Burger House Bozüyük menüsünden lezzetler.",
};
export default function MenuPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-heading section-pad">
        <p className="section-kicker">3 MONKEY / MENÜ</p>
        <h1>
          İŞTAHINA
          <br />
          <em>GÖRE BİR ŞEY VAR.</em>
        </h1>
        <div className="page-heading-bottom">
          <p>
            Klasiklerden beklenmedik eşleşmelere.
            <br />
            Bugün hangisi senin burgerin?
          </p>
          <a
            className="text-link"
            href={restaurant.menu}
            target="_blank"
            rel="noopener noreferrer"
          >
            Güncel menü & fiyatlar <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
      <nav className="menu-anchor-nav" aria-label="Menü kategorileri">
        <a href="#burgerler">01 / BURGERLER</a>
        <a href="#tavuk">02 / ÇITIR TAVUK</a>
        <a href="#yaninda">03 / YANINA YAKIŞIR</a>
      </nav>
      <section className="menu-section section-pad" id="burgerler">
        <div className="menu-section-title" data-reveal>
          <p className="section-kicker">01 / BURGERLER</p>
          <h2>
            BİR ISIRIK.
            <br />
            <em>BİR KARAKTER.</em>
          </h2>
        </div>
        <div className="menu-grid">
          {burgers.map((burger, i) => (
            <article className="menu-item" data-reveal key={burger.name}>
              <span className="menu-item-index">0{i + 1}</span>
              <div>
                <span className="menu-tag">{burger.tag}</span>
                <h3>{burger.name}</h3>
                <p>{burger.ingredients}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-note">
          Burgerler patates kızartması ile servis edilir. İçerik, bulunabilirlik
          ve güncel fiyatlar için şubeyle iletişime geçebilirsiniz.
        </p>
      </section>
      <section className="menu-highlight section-pad" data-reveal>
        <div>
          <span className="section-kicker">ALIŞTIĞININ DIŞINDA</span>
          <h2>
            VİŞNEYLE
            <br />
            <em>TANIŞTIN MI?</em>
          </h2>
          <p>
            Erzurum tulumu, ev yapımı vişne reçeli ve dana köftesi. Aşna
            Vişne’nin kendine has buluşması.
          </p>
        </div>
        <img
          src="/images/visne-original.png"
          alt="Vişne soslu 3 Monkey burger"
          loading="lazy"
        />
      </section>
      <section className="menu-section section-pad" id="tavuk">
        <div className="menu-section-title" data-reveal>
          <p className="section-kicker">02 / FRIED CHICKEN</p>
          <h2>
            ÇITIRIN
            <br />
            <em>TAM ZAMANI.</em>
          </h2>
        </div>
        <div className="menu-grid">
          <article className="menu-item" data-reveal>
            <span className="menu-item-index">01</span>
            <div>
              <h3>Base Monkey Burger</h3>
              <p>Çıtır tavuk, cheddar sos, turşu, sweet mayonez.</p>
            </div>
          </article>
          <article className="menu-item" data-reveal>
            <span className="menu-item-index">02</span>
            <div>
              <h3>Red Hot Burger</h3>
              <p>Çıtır tavuk, acı sos, havuç tarator, turşu.</p>
            </div>
          </article>
        </div>
      </section>
      <section className="side-section section-pad" id="yaninda" data-reveal>
        <p className="section-kicker">03 / YANINA YAKIŞIR</p>
        <h2>
          EKİBİ <em>TAMAMLA.</em>
        </h2>
        <div className="side-items">
          <span>Baharatlı Patates</span>
          <span>Cheddarlı Patates</span>
          <span>Soğan Halkası</span>
          <span>Mozzarella Stick</span>
        </div>
        <p>Tüm seçenekler ve güncel fiyatlar şubenin online menüsünde.</p>
        <a
          href={restaurant.menu}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          ONLINE MENÜ <ArrowUpRight size={19} />
        </a>
      </section>
    </main>
  );
}
