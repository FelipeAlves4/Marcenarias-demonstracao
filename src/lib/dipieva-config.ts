// Dados da marca em um só lugar: troque aqui telefone, links e endereço.
export const ASSETS = "https://dipieva.com.br/assets";

export const MARCA = {
  nome: "LINHARA Ambientes Planejados",
  whatsapp: "5514996954298",
  whatsappExibicao: "(14) 99695-4298",
  instagram: "https://www.instagram.com/dipievaplanejados/",
  instagramUser: "@dipievaplanejados",
  facebook: "https://www.facebook.com/dipievaplanejados/",
  enderecoRua: "",
  enderecoBairro: "",
  mapa: "",
  cnpj: "47.520.151/0001-34",
};

export const MSG_PADRAO = "Olá! Vim pelo site da LINHARA e quero conversar sobre um projeto.";

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
