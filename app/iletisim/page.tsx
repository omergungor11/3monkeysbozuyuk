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
        <p className="section-kicker">3 MONKEY / İLETİŞİM</p>
        <h1>
          YOLUN DÜŞSÜN.
          <br />
          <em>İŞTAHIN AÇILSIN.</em>
        </h1>
        <div className="page-heading-bottom">
          <p>
            Bir burgerlik mesafedeyiz.
            <br />
            Bozüyük’te masan hazır.
          </p>
        </div>
      </section>
      <section className="contact-section section-pad">
        <div className="contact-main" data-reveal>
          <div className="contact-location">
            <span className="section-kicker">BULUŞMA NOKTAMIZ</span>
            <h2>BOZÜYÜK.</h2>
            <p>{restaurant.address}</p>
            <a
              className="button yellow"
              href={restaurant.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              YOL TARİFİ AL <ArrowUpRight size={19} />
            </a>
            <MapPin className="large-pin" size={160} strokeWidth={0.7} />
          </div>
          <p className="contact-note">
            Google Haritalar’da konumu açarak rotanı oluşturabilirsin.
          </p>
        </div>
        <div className="contact-details" data-reveal>
          <a href={restaurant.phoneHref} className="contact-row">
            <Phone />
            <div>
              <span>TELEFON</span>
              <h3>{restaurant.phone}</h3>
              <p>Sipariş ve soruların için bizi ara.</p>
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
              <span>INSTAGRAM</span>
              <h3>@3monkeyburger_boz</h3>
              <p>Şubeden haberler ve lezzetli kareler.</p>
            </div>
            <ArrowUpRight />
          </a>
          <div className="contact-row">
            <Clock />
            <div>
              <span>ZİYARET SAATLERİ</span>
              <h3>Gelmeden haberleşelim.</h3>
              <p>Güncel çalışma saatleri için şubemizi arayabilirsin.</p>
            </div>
          </div>
          <a
            href={restaurant.menu}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online menüye göz at <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
      <section className="contact-banner section-pad" data-reveal>
        <h2>
          GÖRÜŞÜRÜZ.
          <br />
          <em>DUMANI ÜSTÜNDE.</em>
        </h2>
        <a href={restaurant.phoneHref} className="button">
          ŞUBEYİ ARA <Phone size={18} />
        </a>
      </section>
    </main>
  );
}
