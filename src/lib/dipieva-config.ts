// Dados da marca em um só lugar: troque aqui telefone, links e endereço.
export const ASSETS = "https://dipieva.com.br/assets";

export const MARCA = {
  nome: "Di Pieva Ambientes Planejados",
  whatsapp: "5514996843335",
  whatsappExibicao: "(14) 99684-3335",
  instagram: "https://www.instagram.com/dipievaplanejados/",
  instagramUser: "@dipievaplanejados",
  facebook: "https://www.facebook.com/dipievaplanejados/",
  enderecoRua: "Av. Santo Antônio, 421",
  enderecoBairro: "Centro · Marília/SP",
  mapa: "https://www.google.com/maps/search/?api=1&query=Av.+Santo+Ant%C3%B4nio%2C+421+-+Centro%2C+Mar%C3%ADlia+-+SP",
  cnpj: "47.520.151/0001-34",
};

export const MSG_PADRAO = "Olá! Vim pelo site da Di Pieva e quero conversar sobre um projeto.";

export function linkWhats(msg?: string) {
  const base = `https://wa.me/${MARCA.whatsapp}`;
  return msg ? `${base}?text=${encodeURIComponent(msg)}` : base;
}

export const NAV = [
  { href: "#projetos", label: "Projetos" },
  { href: "#fabrica", label: "Fábrica" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#showroom", label: "Showroom" },
  { href: "#orcamento", label: "Orçamento" },
];
