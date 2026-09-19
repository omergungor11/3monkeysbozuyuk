import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import "./hero.css";
import "./motion.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Motion from "@/components/motion";
import SmoothScroll from "@/components/smooth-scroll";
export const metadata: Metadata = {
  title: {
    default: "3 Monkey Burger House | Bozüyük",
    template: "%s | 3 Monkey Bozüyük",
  },
  description:
    "Bozüyük’te burgerin en iştahlı hali. 3 Monkey Burger House lezzetlerini keşfet, hikâyemize ortak ol, bize uğra.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <a className="skip-link" href="#main-content">
          İçeriğe geç
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <SmoothScroll />
        <Motion />
      </body>
    </html>
  );
}
