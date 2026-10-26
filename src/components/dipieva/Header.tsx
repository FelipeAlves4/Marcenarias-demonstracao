import { useEffect, useState } from "react";
import { MSG_PADRAO, NAV } from "@/lib/dipieva-config";
import { Icon, WaLink } from "./Icon";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setSolid(window.scrollY > 40);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", aberto);
  }, [aberto]);

  const fechar = () => setAberto(false);

  return (
    <>
      <header className={`header${solid && !aberto ? " solid" : ""}`}>
        <div className="wrap">
          <a className="brand" href="#topo" aria-label="Di Pieva Ambientes Planejados, início">
            <svg viewBox="0 0 1352 304" aria-hidden="true"><use href="#logo-curto" /></svg>
          </a>
          <nav className="nav" aria-label="Principal">
            {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <WaLink className="btn nav-cta" msg={MSG_PADRAO}><Icon id="i-wa" className="wa-dot" />WhatsApp</WaLink>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={aberto}
            aria-controls="menu-celular"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setAberto((a) => !a)}
          >
            <span />
          </button>
        </div>
      </header>
      <nav className="mobile-nav" id="menu-celular" aria-label="Menu">
        {NAV.map((n) => <a key={n.href} href={n.href} onClick={fechar}>{n.label}</a>)}
        <WaLink className="btn btn-light" msg={MSG_PADRAO} onClick={fechar}><Icon id="i-wa" className="wa-dot" />Conversar no WhatsApp</WaLink>
      </nav>
    </>
  );
}
