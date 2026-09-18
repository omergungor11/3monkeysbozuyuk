import Hero from "@/components/hero";
import HomeContent from "@/components/home-content";
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <div id="lezzet" className="ticker">
        <span>ATEŞİ HİSSET</span>
        <b>✳</b>
        <span>İŞTAHINA GÜVEN</span>
        <b>✳</b>
        <span>3 MONKEY BURGER HOUSE</span>
        <b>✳</b>
      </div>
      <HomeContent />
    </main>
  );
}
