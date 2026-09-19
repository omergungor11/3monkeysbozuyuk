import type { Metadata } from "next";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Camera as Instagram,
  Clock,
} from "lucide-react";
import { restaurant } from "@/lib/restaurant";
export const metadata: Metadata = {
  title: "İletişim",
  description:
    "3 Monkey Burger House Bozüyük adresi ve iletişim: 4 Eylül Mahallesi, Yaşar Doğu Cad. No:79A. 0533 515 11 26.",
};
export default function Contact() {
  return (
    <main id="main-content" className="inner-page">
      <section className="page-heading section-pad">
        <p data-reveal="eyebrow" className="section-kicker">3 MONKEY / İLETİŞİM</p>
        <h1 data-reveal="heading">
          YOLUN DÜŞSÜN.
          <br />
          <em>İŞTAHIN AÇILSIN.</em>
        </h1>
        <div className="page-heading-bottom">
          <p data-reveal="text">
            Bir burgerlik mesafedeyiz.
            <br />
            Bozüyük’te masan hazır.
          </p>
        </div>
      </section>
      <section className="contact-section section-pad">
        <div className="contact-main">
          <div className="contact-location">
            <span data-reveal="eyebrow" className="section-kicker">BULUŞMA NOKTAMIZ</span>
            <h2 data-reveal="heading">BOZÜYÜK.</h2>
            <p data-reveal="text">{restaurant.address}</p>
            <a
              className="button yellow" data-reveal="action"
              href={restaurant.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              YOL TARİFİ AL <ArrowUpRight size={19} />
            </a>
            <MapPin className="large-pin" size={160} strokeWidth={0.7} />
          </div>
          <p data-reveal="text" className="contact-note">
            Google Haritalar’da konumu açarak rotanı oluşturabilirsin.
          </p>
        </div>
        <div className="contact-details">
          <a href={restaurant.phoneHref} className="contact-row">
            <Phone />
            <div>
              <span data-reveal="eyebrow">TELEFON</span>
              <h3 data-reveal="heading">{restaurant.phone}</h3>
              <p data-reveal="text">Sipariş ve soruların için bizi ara.</p>
            </div>
            <ArrowUpRight />
          </a>
          <a
            href={restaurant.instagram}
            className="contact-row"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
            <div>
              <span data-reveal="eyebrow">INSTAGRAM</span>
              <h3 data-reveal="heading">@3monkeyburger_boz</h3>
              <p data-reveal="text">Şubeden haberler ve lezzetli kareler.</p>
            </div>
            <ArrowUpRight />
          </a>
          <div className="contact-row">
            <Clock />
            <div>
              <span data-reveal="eyebrow">ZİYARET SAATLERİ</span>
              <h3 data-reveal="heading">Gelmeden haberleşelim.</h3>
              <p data-reveal="text">Güncel çalışma saatleri için şubemizi arayabilirsin.</p>
            </div>
          </div>
          <a
            href={restaurant.menu}
            className="text-link" data-reveal="action"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online menüye göz at <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
      <section className="contact-banner section-pad">
        <h2 data-reveal="heading">
          GÖRÜŞÜRÜZ.
          <br />
          <em>DUMANI ÜSTÜNDE.</em>
        </h2>
        <a href={restaurant.phoneHref} className="button" data-reveal="action">
          ŞUBEYİ ARA <Phone size={18} />
        </a>
      </section>
    </main>
  );
}
