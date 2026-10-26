import { useEffect, useRef } from "react";
import { ASSETS } from "@/lib/dipieva-config";

const FATOS = [
  ["Precisão", "As medidas saem direto do projeto para a máquina, sem passar a limpo à mão."],
  ["Menos desperdício", "As peças são encaixadas na chapa por computador para aproveitar o material."],
  ["Tudo sob o mesmo teto", "Projeto, corte, acabamento e conferência, na nossa própria fábrica."],
  ["Quem fabrica, monta", "A equipe de montagem conhece as peças desde a fábrica."],
];

export function FactorySection() {
  const video = useRef<HTMLVideoElement>(null);

  // Respeita "reduzir movimento" e pausa o vídeo fora da tela.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.removeAttribute("autoplay");
      v.pause();
      v.controls = true;
      return;
    }
    const obs = new IntersectionObserver(
      (it) => { if (it[0].isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.2 },
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section fabrica" id="fabrica">
      <div className="wrap">
        <div className="revelar">
          <span className="eyebrow">Nossa fábrica</span>
          <h2>Uma fábrica moderna, aqui em Marília.</h2>
          <p className="lead">Máquinas controladas por computador, processo organizado e uma equipe que conhece cada peça. A tecnologia serve para uma coisa: o móvel chegar na sua casa exatamente como você aprovou no 3D.</p>
          <div className="fatos">
            {FATOS.map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}
          </div>
        </div>
        <figure className="video-box revelar">
          <video
            ref={video}
            className="video-router"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${ASSETS}/video/fabrica-router-poster.webp`}
            width={478}
            height={850}
            aria-label="Vídeo da router CNC da Di Pieva cortando uma chapa na fábrica em Marília"
          >
            <source src={`${ASSETS}/video/fabrica-router.webm`} type="video/webm" />
            <source src={`${ASSETS}/video/fabrica-router.mp4`} type="video/mp4" />
          </video>
          <span className="tag-real">Vídeo real · nossa fábrica</span>
          <figcaption>Nossa router CNC: corta cada peça guiada pelo arquivo do projeto.</figcaption>
        </figure>
      </div>
    </section>
  );
}
