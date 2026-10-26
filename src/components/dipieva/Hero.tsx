import { ASSETS, MSG_PADRAO } from "@/lib/dipieva-config";
import { Icon, WaLink } from "./Icon";

const S = `${ASSETS}/img/showroom`;

export function Hero() {
  return (
    <section className="hero" id="topo">
      <picture>
        <source media="(max-width: 700px)" type="image/webp" srcSet={`${S}/hero-retrato-760.webp 760w, ${S}/hero-retrato-1100.webp 1100w`} sizes="100vw" />
        <source type="image/webp" srcSet={`${S}/hero-1000.webp 1000w, ${S}/hero-1600.webp 1600w, ${S}/hero-2400.webp 2400w`} sizes="100vw" />
        <img
          src={`${S}/hero-1600.jpg`}
          alt="Showroom da Di Pieva em Marília: cozinha planejada com ilha em pedra clara, armários cinza e madeira, e parede verde ao lado"
          width={1600}
          height={900}
          fetchPriority="high"
        />
      </picture>
      <div className="wrap">
        <h1>
          <span className="eyebrow">Móveis planejados em Marília</span>
          <span className="line">Projetado em 3D.</span>
          <span className="line">Fabricado <em>aqui.</em></span>
          <span className="line">Montado por nós.</span>
        </h1>
        <p className="lead">
          Cozinhas, dormitórios, closets e ambientes comerciais sob medida, feitos na nossa fábrica em Marília e instalados pela nossa própria equipe. Você fala direto com quem desenha e fabrica.
        </p>
        <div className="hero-cta">
          <WaLink className="btn btn-light" msg={MSG_PADRAO}><Icon id="i-wa" className="wa-dot" />Conversar no WhatsApp</WaLink>
          <a className="btn btn-ghost" href="#projetos">Ver projetos <Icon id="i-seta" /></a>
        </div>
      </div>
      <span className="foto-real">Foto real · nosso showroom</span>
    </section>
  );
}

const PROVAS = [
  { icon: "i-fabrica", t: "Fábrica própria", p: "Seus móveis são fabricados em Marília, por nós. Sem franquia e sem intermediário." },
  { icon: "i-3d", t: "Projeto 3D", p: "Você vê o ambiente pronto, de vários ângulos, antes de qualquer corte." },
  { icon: "i-cnc", t: "Precisão de fábrica", p: "Cada peça sai com a medida exata do projeto. Sem improviso na hora de montar." },
  { icon: "i-equipe", t: "Montagem própria", p: "Quem instala é a nossa equipe, que conhece o trabalho da fábrica." },
];

export function Differentials() {
  return (
    <section className="provas" aria-label="Por que a Di Pieva">
      <div className="wrap">
        {PROVAS.map((x) => (
          <div className="prova revelar" key={x.t}>
            <Icon id={x.icon} />
            <h3>{x.t}</h3>
            <p>{x.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
