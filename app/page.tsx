import Hero from "@/components/hero";
import HomeContent from "@/components/home-content";
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <div id="lezzet" className="ticker">
        <div className="ticker-track" aria-label="3 Monkey marka mesajları">
          <div className="ticker-group">
            <span>LEZZETİN ADRESİ</span>
            <b>✳</b>
            <span>İŞTAHINA GÜVEN</span>
            <b>✳</b>
            <span>3 MONKEY BURGER HOUSE</span>
            <b>✳</b>
          </div>
          <div className="ticker-group" aria-hidden="true">
            <span>LEZZETİN ADRESİ</span>
            <b>✳</b>
            <span>İŞTAHINA GÜVEN</span>
            <b>✳</b>
            <span>3 MONKEY BURGER HOUSE</span>
            <b>✳</b>
          </div>
        </div>
      </div>
      <HomeContent />
    </main>
  );
}
