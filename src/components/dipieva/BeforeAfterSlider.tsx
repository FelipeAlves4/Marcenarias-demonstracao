import { useEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/dipieva-config";
import { Icon } from "./Icon";

export function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);

  // Pequena demonstração do movimento quando o comparador aparece (igual ao original).
  useEffect(() => {
    const el = box.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      (it) => {
        if (!it[0].isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const anima = (t: number) => {
          const k = Math.min((t - t0) / 1600, 1);
          setPos(50 + Math.sin(k * Math.PI * 2) * 22 * (1 - k));
          if (k < 1) raf = requestAnimationFrame(anima);
        };
        raf = requestAnimationFrame(anima);
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="section comparar" id="teste">
      <div className="wrap">
        <div className="revelar">
          <div className="antes-depois" ref={box} style={{ ["--pos" as string]: `${pos}%` }}>
            <img src={`${ASSETS}/img/versoes/versao-1.webp`} alt="Projeto 3D de quarto de bebê, versão com parede rosa e cômoda toda em madeira" width={1024} height={629} loading="lazy" decoding="async" />
            <img className="depois" src={`${ASSETS}/img/versoes/versao-2.webp`} alt="O mesmo quarto, versão com meia-parede verde e cômoda com gavetas cinza" width={1024} height={629} loading="lazy" decoding="async" />
            <span className="divisor" />
            <span className="alca"><Icon id="i-arrastar" /></span>
            <span className="rotulo esq">Versão 1</span>
            <span className="rotulo dir">Versão 2</span>
            <label className="sr-only" htmlFor="comparar-range">Arraste para comparar as duas versões</label>
            <input id="comparar-range" type="range" min={0} max={100} step="any" value={pos} onChange={(e) => setPos(Number(e.target.value))} />
          </div>
          <p className="legenda">Arraste para comparar. Mesmo quarto, mesma câmera, duas versões de acabamento.</p>
        </div>
        <div className="revelar">
          <span className="eyebrow">Teste antes de fabricar</span>
          <h2>Mude a cor, o material, o puxador. Quantas vezes quiser.</h2>
          <p className="lead">No projeto 3D você compara versões do mesmo ambiente e só aprova quando estiver do seu jeito. Nada é cortado antes disso.</p>
          <ul className="lista-check">
            {["Cada ambiente visto de vários ângulos.", "Cores e acabamentos comparados lado a lado.", "Aprovação antes de cortarmos a primeira chapa."].map((t) => (
              <li key={t}><Icon id="i-check" /><span>{t}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
