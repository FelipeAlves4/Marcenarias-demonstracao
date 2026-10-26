import { useEffect, useRef, useState } from "react";
import { PASSOS } from "@/data/content";

// Coluna (≤1000px): a linha desce com a rolagem. Lado a lado: corre uma vez (~2,5 s) ao aparecer.
export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const emColuna = window.matchMedia("(max-width: 1000px)");
    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animada = false;
    let raf = 0;
    const animar = () => {
      animada = true;
      if (semMovimento) return setProg(1);
      let inicio: number | null = null;
      const quadro = (t: number) => {
        if (inicio === null) inicio = t;
        const p = Math.min((t - inicio) / 2500, 1);
        setProg(p);
        if (p < 1) raf = requestAnimationFrame(quadro);
      };
      raf = requestAnimationFrame(quadro);
    };
    const atualiza = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (emColuna.matches) {
        setProg(Math.min(Math.max((vh * 0.75 - r.top) / (r.height + vh * 0.2), 0), 1));
        return;
      }
      if (animada) return;
      if (r.top < vh * 0.8 && r.bottom > 0) animar();
      else setProg(0);
    };
    window.addEventListener("scroll", atualiza, { passive: true });
    window.addEventListener("resize", atualiza);
    atualiza();
    return () => {
      window.removeEventListener("scroll", atualiza);
      window.removeEventListener("resize", atualiza);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="section" id="como-funciona">
      <div className="wrap">
        <div className="section-head revelar">
          <span className="eyebrow">Como funciona</span>
          <h2>Do primeiro contato à última dobradiça.</h2>
        </div>
        <div className="passos" role="list" ref={ref} style={{ ["--prog" as string]: `${(prog * 100).toFixed(1)}%` }}>
          <span className="progresso" aria-hidden="true" />
          {PASSOS.map((p, i) => (
            <div key={p.titulo} className={`passo${prog >= (i + 0.2) / PASSOS.length ? " ativo" : ""}`} role="listitem">
              <span className="num">{i + 1}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
