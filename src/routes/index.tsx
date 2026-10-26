import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Sprite } from "@/components/dipieva/Icon";
import { Header } from "@/components/dipieva/Header";
import { Differentials, Hero } from "@/components/dipieva/Hero";
import { ProjectsGallery } from "@/components/dipieva/ProjectsGallery";
import { BeforeAfterSlider } from "@/components/dipieva/BeforeAfterSlider";
import { FactorySection } from "@/components/dipieva/FactorySection";
import { ProcessTimeline } from "@/components/dipieva/ProcessTimeline";
import { ShowroomGallery } from "@/components/dipieva/ShowroomGallery";
import { QuoteWizard } from "@/components/dipieva/QuoteWizard";
import { FAQ, FinalCta, FloatingWhatsApp, Footer } from "@/components/dipieva/Footer";

const TITLE = "Di Pieva Ambientes Planejados | Móveis planejados em Marília";
const DESC =
  "Cozinhas, dormitórios, closets e ambientes comerciais sob medida. Projetado em 3D, fabricado em Marília e montado pela nossa equipe.";
const OG_IMG = "https://dipieva.com.br/assets/img/showroom/hero-1600.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMG },
    ],
  }),
  component: Index,
});

function useRevelar() {
  useEffect(() => {
    const els = document.querySelectorAll(".revelar");
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduz) {
      els.forEach((el) => el.classList.add("visto"));
      return;
    }
    const io = new IntersectionObserver(
      (itens) => itens.forEach((it) => { if (it.isIntersecting) { it.target.classList.add("visto"); io.unobserve(it.target); } }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useRevelar();
  return (
    <>
      <Sprite />
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Differentials />
        <ProjectsGallery />
        <BeforeAfterSlider />
        <FactorySection />
        <ProcessTimeline />
        <ShowroomGallery />
        <QuoteWizard />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
