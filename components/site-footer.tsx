import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { restaurant } from "@/lib/restaurant";

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-center">
        <Link className="footer-logo" data-reveal="image" href="/" aria-label="Ana sayfa">
          <img
            src="/images/3-monkey-logo-transparent.png"
            alt="3 Monkey Burger House"
            width="180"
            height="90"
          />
        </Link>
        <div className="footer-socials" data-reveal="action" aria-label="Sosyal ve iletişim bağlantıları">
          <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramGlyph />
          </a>
          <a href={restaurant.phoneHref} aria-label="Telefon">
            <Phone size={20} />
          </a>
          <a href={restaurant.maps} target="_blank" rel="noopener noreferrer" aria-label="Haritayı aç">
            <MapPin size={20} />
          </a>
        </div>
        <p className="footer-address" data-reveal="text">{restaurant.address}</p>
        <nav className="footer-nav" data-reveal="action" aria-label="Alt menü">
          <Link href="/menu">Menü</Link>
          <Link href="/hakkimizda">Hikâyemiz</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
        <p className="footer-copyright" data-reveal="text">© 2026 3 Monkey Burger House · Konsept çalışma</p>
      </div>
    </footer>
  );
}
