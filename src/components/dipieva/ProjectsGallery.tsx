import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIAS, PROJETOS, type CategoriaId, type Projeto } from "@/data/projects";
import { linkWhats } from "@/lib/dipieva-config";
import { Icon } from "./Icon";

function ProjectCard({ p, oculto, onOpen }: { p: Projeto; oculto: boolean; onOpen: (el: HTMLButtonElement) => void }) {
  const grande = p.classes.includes("largo");
  return (
    <button
      className={`card ${p.classes}${oculto ? " oculto" : ""}`.replace(/\s+/g, " ").trim()}
      type="button"
      aria-label={`Ampliar: ${p.titulo}`}
      onClick={(e) => onOpen(e.currentTarget)}
    >
      <img
        src={p.src}
        srcSet={`${p.src} 640w, ${p.grande} 1600w`}
        sizes={`(max-width: 600px) 100vw, (max-width: 900px) 50vw, ${grande ? "66vw" : "33vw"}`}
        alt={p.alt}
        width={p.w}
        height={p.h}
        loading="lazy"
        decoding="async"
      />
      <span className="tag">{p.tag}</span>
      <span className="info">
        <span className="h3" style={{ fontFamily: "var(--serif)", fontSize: "clamp(17px,1.5vw,21px)", lineHeight: 1.25, display: "block" }}>
          {p.titulo}
        </span>
      </span>
    </button>
  );
}

function ProjectLightbox({
  lista,
  indice,
  onClose,
  onNav,
}: {
  lista: Projeto[];
  indice: number | null;
  onClose: () => void;
  onNav: (d: number) => void;
}) {
  const aberto = indice !== null;
  const p = aberto ? lista[indice] : null;
  const ref = useRef<HTMLDivElement>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);
  const toqueX = useRef<number | null>(null);

  useEffect(() => {
    if (!aberto) return;
    document.body.style.overflow = "hidden";
    fecharRef.current?.focus();
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "Tab" && ref.current) {
        const foc = ref.current.querySelectorAll<HTMLElement>("button, a[href]");
        const primeiro = foc[0];
        const ultimo = foc[foc.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
        else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
      }
    };
    document.addEventListener("keydown", tecla);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", tecla);
    };
  }, [aberto, onClose, onNav]);

  return (
    <div
      ref={ref}
      className={`lightbox${aberto ? " aberto" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Projeto ampliado"
      aria-hidden={!aberto}
      onClick={(e) => {
        const t = e.target as HTMLElement;
        if (t === e.currentTarget || t.classList.contains("lb-figura")) onClose();
      }}
      onTouchStart={(e) => { toqueX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (toqueX.current === null) return;
        const dx = e.changedTouches[0].clientX - toqueX.current;
        if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1);
        toqueX.current = null;
      }}
    >
      <div className="lb-figura">
        <span className="lb-contador">{p ? `${indice! + 1} / ${lista.length}` : ""}</span>
        {p ? <img src={p.grande} alt={p.alt} /> : <img alt="" />}
        <button ref={fecharRef} className="lb-btn lb-fechar" type="button" aria-label="Fechar" onClick={onClose}><Icon id="i-fechar" /></button>
        <button className="lb-btn lb-ant" type="button" aria-label="Projeto anterior" onClick={() => onNav(-1)}><Icon id="i-ant" /></button>
        <button className="lb-btn lb-prox" type="button" aria-label="Próximo projeto" onClick={() => onNav(1)}><Icon id="i-prox" /></button>
      </div>
      <div className="lb-barra">
        <div>
          <span className="tag">{p ? `Projeto 3D · ${p.ambiente}` : ""}</span>
          <h3>{p?.titulo}</h3>
          <p className="lb-desc">{p?.desc}</p>
        </div>
        <a
          className="btn btn-light lb-pedir"
          href={p ? linkWhats(`Olá! Vi o projeto "${p.titulo}" no site da Di Pieva e quero um orçamento de algo parecido.`) : linkWhats()}
          target="_blank"
          rel="noopener"
        >
          <Icon id="i-wa" className="wa-dot" />Quero um parecido
        </a>
      </div>
    </div>
  );
}

export function ProjectsGallery() {
  const [cat, setCat] = useState<CategoriaId>("todos");
  const [recolhida, setRecolhida] = useState(true);
  const [indice, setIndice] = useState<number | null>(null);
  const ultimoFoco = useRef<HTMLElement | null>(null);

  const visiveis = useMemo(() => PROJETOS.filter((p) => cat === "todos" || p.cat === cat), [cat]);

  const fechar = useCallback(() => {
    setIndice(null);
    ultimoFoco.current?.focus();
  }, []);
  const navegar = useCallback(
    (d: number) => setIndice((i) => (i === null ? i : (i + d + visiveis.length) % visiveis.length)),
    [visiveis.length],
  );

  return (
    <section className="section" id="projetos">
      <div className="wrap">
        <div className="section-head revelar">
          <span className="eyebrow">Projetos</span>
          <h2>Desenhados sob medida para casas e empresas de Marília e região.</h2>
          <p className="lead">Uma seleção de projetos 3D feitos pela nossa equipe para clientes reais. Toque para ampliar e, se gostar de algum, peça um parecido pelo WhatsApp.</p>
        </div>
        <div className="filtros" role="group" aria-label="Filtrar projetos por ambiente">
          {CATEGORIAS.map((c) => (
            <button
              key={c.id}
              className="filtro"
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => { setCat(c.id); setRecolhida(false); }}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className={`grade${recolhida ? " recolhida" : ""}`}>
          {PROJETOS.map((p) => {
            const oculto = cat !== "todos" && p.cat !== cat;
            return (
              <ProjectCard
                key={p.src}
                p={p}
                oculto={oculto}
                onOpen={(el) => { ultimoFoco.current = el; setIndice(visiveis.indexOf(p)); }}
              />
            );
          })}
        </div>
        <div className="ver-mais-box">
          <button className="btn btn-ghost ver-mais" type="button" onClick={() => setRecolhida(false)}>Ver todos os projetos</button>
        </div>
        <p className="nota-render">
          <Icon id="i-info" />
          <span>As imagens desta seção são projetos 3D (renderizações) criados pela nossa equipe. As fotos marcadas como “foto real” mostram o nosso showroom.</span>
        </p>
      </div>
      <ProjectLightbox lista={visiveis} indice={indice} onClose={fechar} onNav={navegar} />
    </section>
  );
}
