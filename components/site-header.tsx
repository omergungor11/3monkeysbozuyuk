"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
const links = [
  ["/", "Ana Sayfa"],
  ["/menu", "Menü"],
  ["/hakkimizda", "Hikâyemiz"],
  ["/iletisim", "İletişim"],
];
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) nav.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <Link
        href="/"
        className="brand"
        aria-label="3 Monkey Burger House ana sayfa"
        onClick={() => setOpen(false)}
      >
        <img
          src="/images/3-monkey-logo-transparent.png"
          alt="3 Monkey Burger House"
          width="160"
          height="80"
        />
      </Link>
      <nav
        ref={nav}
        aria-label="Ana menü"
        className={open ? "navigation is-open" : "navigation"}
        id="main-navigation"
      >
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link href="/iletisim" className="header-cta">
        BİZE UĞRA <ArrowUpRight size={16} />
      </Link>
      <button
        ref={toggle}
        className="mobile-toggle"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
