import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found section-pad">
      <p className="section-kicker">404 / YANLIŞ MASA</p>
      <h1>
        BURADA BURGER YOK.
        <br />
        <em>AMA ŞURADA VAR.</em>
      </h1>
      <Link className="button yellow" href="/menu">
        MENÜYE DÖN ↗
      </Link>
    </main>
  );
}
