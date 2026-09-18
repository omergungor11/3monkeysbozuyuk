import Link from "next/link";
import { ArrowUpRight, Camera as Instagram } from "lucide-react";
import { restaurant } from "@/lib/restaurant";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="footer-logo" href="/" aria-label="Ana sayfa">
          <img
            src="/images/3-monkey-logo-transparent.png"
            alt="3 Monkey Burger House"
            width="180"
            height="90"
          />
        </Link>
        <p>
          Üç maymun. Tek tutku.
          <br />
          <span>Bozüyük / Bilecik</span>
        </p>
        <a
          href={restaurant.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Instagram size={19} /> @3monkeyburger_boz <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 3 Monkey Burger House · Konsept çalışma</span>
        <nav aria-label="Alt menü">
          <Link href="/menu">Menü</Link>
          <Link href="/hakkimizda">Hikâyemiz</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
        <span>Sahne görselleri temsilidir.</span>
      </div>
    </footer>
  );
}
