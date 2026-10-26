import { ASSETS, MARCA } from "@/lib/dipieva-config";
import { Icon, WaLink } from "./Icon";

const FOTOS = [
  ["showroom-panorama", "Visão geral do showroom: estação de trabalho em madeira, cozinha e parede verde"],
  ["showroom-ilha", "Ilha da cozinha do showroom com tampo claro e banquetas pretas"],
  ["showroom-living", "Área de estar do showroom com painel de TV, sofá e prateleiras em madeira"],
  ["showroom-cozinha-lateral", "Cozinha do showroom vista de lado, com painel ripado em madeira"],
];

export function ShowroomGallery() {
  const S = `${ASSETS}/img/showroom`;
  return (
    <section className="section showroom" id="showroom" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="topo">
          <div className="revelar">
            <span className="eyebrow">Showroom</span>
            <h2>Venha tocar nos acabamentos.</h2>
          </div>
          <p className="lead revelar">No nosso showroom você abre gavetas, testa corrediças e dobradiças, vê as cores de perto e conversa com quem vai desenhar o seu projeto.</p>
        </div>
        <div className="faixa-fotos" tabIndex={0} aria-label="Fotos do showroom">
          {FOTOS.map(([f, alt]) => (
            <figure key={f}>
              <img
                src={`${S}/${f}-900.webp`}
                srcSet={`${S}/${f}-900.webp 900w, ${S}/${f}-1600.webp 1600w`}
                sizes="(max-width: 900px) 84vw, 40vw"
                alt={alt}
                loading="lazy"
                decoding="async"
                width={900}
                height={675}
              />
              <figcaption>Foto real</figcaption>
            </figure>
          ))}
        </div>
        <div className="endereco revelar">
          <Icon id="i-pin" className="pin" />
          <div>
            <strong>{MARCA.enderecoRua}</strong>
            <span>{MARCA.enderecoBairro} · antes Breda Móveis Planejados, hoje Di Pieva</span>
          </div>
          <div className="acoes">
            <a className="btn btn-ghost" href={MARCA.mapa} target="_blank" rel="noopener">Como chegar</a>
            <WaLink className="btn" msg="Olá! Quero agendar uma visita ao showroom da Di Pieva."><Icon id="i-wa" className="wa-dot" />Agendar visita</WaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
