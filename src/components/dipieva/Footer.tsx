import { useEffect, useState } from "react";
import { FAQ as PERGUNTAS } from "@/data/content";
import { MARCA, MSG_PADRAO } from "@/lib/dipieva-config";
import { Icon, WaLink } from "./Icon";

// O original usa <details>/<summary>: acessível por teclado e com estado aberto/fechado nativo.
export function FAQ() {
  return (
    <section className="section" id="perguntas">
      <div className="wrap">
        <div className="section-head revelar">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Antes de começar.</h2>
        </div>
        <div className="faq revelar">
          {PERGUNTAS.map((f) => (
            <details key={f.p}>
              <summary>{f.p}<span className="mais" aria-hidden="true" /></summary>
              <p>{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section final">
      <div className="wrap revelar">
        <span className="eyebrow" style={{ color: "#F0E3D1" }}>Di Pieva Ambientes Planejados</span>
        <h2>Seu ambiente começa com uma conversa.</h2>
        <p>Mande uma foto do espaço e o que você imagina. A gente responde pelo WhatsApp.</p>
        <div className="acoes">
          <WaLink className="btn btn-light" msg={MSG_PADRAO}><Icon id="i-wa" className="wa-dot" />Conversar no WhatsApp</WaLink>
          <a className="btn btn-ghost" href="#orcamento">Montar meu pedido</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [ano, setAno] = useState(2026);
  useEffect(() => setAno(new Date().getFullYear()), []);
  return (
    <footer className="rodape">
      <div className="wrap">
        <div>
          <a className="brand" href="#topo" aria-label="Voltar ao início">
            <svg viewBox="0 0 1352 304" aria-hidden="true"><use href="#logo" /></svg>
          </a>
          <p style={{ margin: 0, maxWidth: "34ch" }}>Móveis planejados sob medida, projetados em 3D, fabricados em Marília e montados pela nossa equipe.</p>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li><WaLink msg="Olá! Vim pelo site da Di Pieva.">WhatsApp {MARCA.whatsappExibicao}</WaLink></li>
            <li><a href={MARCA.instagram} target="_blank" rel="noopener">Instagram {MARCA.instagramUser}</a></li>
            <li><a href={MARCA.facebook} target="_blank" rel="noopener">Facebook</a></li>
          </ul>
        </div>
        <div>
          <h4>Showroom</h4>
          <ul>
            <li>{MARCA.enderecoRua}</li>
            <li>{MARCA.enderecoBairro}</li>
            <li><a href={MARCA.mapa} target="_blank" rel="noopener">Ver no mapa</a></li>
          </ul>
        </div>
        <div className="legal">
          <span>© {ano} {MARCA.nome} Ltda · CNPJ {MARCA.cnpj} · antiga Breda Móveis Planejados</span>
          <span>Este site usa cookies do Google Ads apenas para medir o resultado dos anúncios. Não pedimos nem guardamos seus dados pessoais.</span>
          <span className="creditos-site">Site desenvolvido por Alves Web Studio</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const aoRolar = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      const limite = hero ? hero.offsetHeight - 90 : 60;
      setVisivel(window.scrollY > limite * 0.6);
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);
  return (
    <WaLink className={`wa-flutuante${visivel ? " visivel" : ""}`} msg={MSG_PADRAO} aria-label="Conversar no WhatsApp">
      <Icon id="i-wa" /><span>Fale no WhatsApp</span>
    </WaLink>
  );
}
