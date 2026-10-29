export const PASSOS = [
  { titulo: "Conversa", texto: "Pelo WhatsApp ou no showroom. Você conta o que precisa e mostra fotos e referências." },
  { titulo: "Medição", texto: "Vamos até o local e medimos paredes, pontos de água, luz e cada detalhe." },
  { titulo: "Projeto 3D", texto: "Desenhamos o ambiente e você vê tudo pronto, de vários ângulos." },
  { titulo: "Aprovação", texto: "Ajustamos até ficar do seu jeito. Proposta e contrato por escrito." },
  { titulo: "Fabricação", texto: "Na nossa fábrica em Marília: corte computadorizado, acabamento e conferência peça por peça." },
  { titulo: "Montagem", texto: "Nossa equipe instala tudo e entrega o ambiente pronto para usar." },
];

export const FAQ = [
  { p: "Vocês atendem fora de Marília?", r: "Atendemos Marília e cidades da região. Conte pelo WhatsApp onde fica o imóvel e confirmamos o atendimento." },
  { p: "Preciso ter projeto de arquiteto?", r: "Não. Nossa equipe desenvolve o projeto 3D com você. Se você já tem arquiteto, trabalhamos a partir do projeto dele." },
  { p: "Posso ver o projeto antes de fechar?", r: "Sim. Você vê o ambiente em 3D, de vários ângulos, e pode pedir ajustes de cor, material e medidas antes de aprovar." },
  { p: "Quanto tempo leva?", r: "Depende do tamanho do projeto. O prazo é combinado com você e registrado antes do início da fabricação." },
  { p: "Quem faz a montagem?", r: "A nossa própria equipe de montagem, que também conhece o trabalho da fábrica. Não terceirizamos a instalação." },
  { p: "Como funciona o pagamento?", r: "As condições são apresentadas junto com a proposta do seu projeto. Fale com a gente para conhecer as opções." },
];

export type Pergunta = {
  nome: "ambiente" | "imovel" | "arquiteto" | "quando";
  legenda: string;
  dica?: string;
  multipla: boolean;
  opcoes: string[];
};

export const PERGUNTAS: Pergunta[] = [
  {
    nome: "ambiente",
    legenda: "Quais ambientes você quer planejar?",
    dica: "Pode marcar mais de um.",
    multipla: true,
    opcoes: ["Cozinha", "Dormitório", "Closet", "Sala / painel de TV", "Banheiro", "Área gourmet", "Home office", "Comercial / empresa", "Casa ou apartamento completo"],
  },
  { nome: "imovel", legenda: "Como está o imóvel?", multipla: false, opcoes: ["Na planta", "Em obra", "Pronto para receber os móveis", "Reforma"] },
  { nome: "arquiteto", legenda: "Você já tem projeto de arquiteto?", multipla: false, opcoes: ["Sim, já tenho", "Não, quero o projeto de vocês"] },
  { nome: "quando", legenda: "Quando você pretende instalar?", multipla: false, opcoes: ["Nos próximos 3 meses", "Em 3 a 6 meses", "Daqui a mais de 6 meses", "Ainda estou pesquisando"] },
];

export type Respostas = Record<Pergunta["nome"], string[]> & { nome: string; local: string };

export function montarMensagem(r: Respostas) {
  const linhas = ["Olá! Vim pelo site da LINHARA e quero um orçamento."];
  if (r.nome.trim()) linhas.push("Meu nome: " + r.nome.trim());
  linhas.push("Ambientes: " + (r.ambiente.join(", ") || "a definir"));
  linhas.push("Imóvel: " + (r.imovel[0] || "a definir"));
  linhas.push("Projeto de arquiteto: " + (r.arquiteto[0] || "a definir"));
  linhas.push("Quando quero instalar: " + (r.quando[0] || "a definir"));
  if (r.local.trim()) linhas.push("Bairro/cidade: " + r.local.trim());
  return linhas.join("\n");
}
