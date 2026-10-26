export type CategoriaId = "todos" | "cozinhas" | "dormitorios" | "salas" | "gourmet" | "banhos" | "comercial";

export const CATEGORIAS: { id: CategoriaId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "cozinhas", label: "Cozinhas" },
  { id: "dormitorios", label: "Dormitórios" },
  { id: "salas", label: "Salas" },
  { id: "gourmet", label: "Gourmet e adega" },
  { id: "banhos", label: "Banheiros" },
  { id: "comercial", label: "Comercial e home office" },
];

export type Projeto = {
  cat: Exclude<CategoriaId, "todos">;
  ambiente: string;
  titulo: string;
  desc: string;
  grande: string;
  src: string;
  alt: string;
  w: number;
  h: number;
  tag: string;
  /** classes de layout da grade original: "largo", "alto" */
  classes: string;
};

export const PROJETOS: Projeto[] = [
  {
    "cat": "cozinhas",
    "ambiente": "Cozinha",
    "titulo": "Cozinha integrada com ilha em mármore",
    "desc": "Marcenaria clara, estrutura suspensa dourada e mesa integrada à ilha.",
    "grande": "https://dipieva.com.br/assets/img/projetos/cozinha-marmore-dourado-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/cozinha-marmore-dourado-640.webp",
    "alt": "Projeto 3D: cozinha integrada com ilha em mármore. Marcenaria clara, estrutura suspensa dourada e mesa integrada à ilha.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": "largo alto"
  },
  {
    "cat": "salas",
    "ambiente": "Sala",
    "titulo": "Painel de TV com iluminação indireta",
    "desc": "Madeira natural, LED embutido e porta oculta no painel.",
    "grande": "https://dipieva.com.br/assets/img/projetos/painel-tv-backlight-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/painel-tv-backlight-640.webp",
    "alt": "Projeto 3D: painel de tv com iluminação indireta. Madeira natural, LED embutido e porta oculta no painel.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "banhos",
    "ambiente": "Banheiro",
    "titulo": "Lavabo em pedra natural",
    "desc": "Bancada suspensa em granito preto com luz embutida.",
    "grande": "https://dipieva.com.br/assets/img/projetos/lavabo-pedra-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/lavabo-pedra-640.webp",
    "alt": "Projeto 3D: lavabo em pedra natural. Bancada suspensa em granito preto com luz embutida.",
    "w": 640,
    "h": 494,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "cozinhas",
    "ambiente": "Cozinha",
    "titulo": "Cozinha linear fendi e madeira",
    "desc": "Aéreos fendi, faixa amadeirada e LED sob os armários.",
    "grande": "https://dipieva.com.br/assets/img/projetos/cozinha-linear-fendi-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/cozinha-linear-fendi-640.webp",
    "alt": "Projeto 3D: cozinha linear fendi e madeira. Aéreos fendi, faixa amadeirada e LED sob os armários.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "dormitorios",
    "ambiente": "Dormitório",
    "titulo": "Quarto com cabeceira em madeira",
    "desc": "Painel amadeirado com criados-mudos suspensos.",
    "grande": "https://dipieva.com.br/assets/img/projetos/quarto-cabeceira-madeira-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/quarto-cabeceira-madeira-640.webp",
    "alt": "Projeto 3D: quarto com cabeceira em madeira. Painel amadeirado com criados-mudos suspensos.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "comercial",
    "ambiente": "Comercial e home office",
    "titulo": "Home office azul-marinho",
    "desc": "Bancada em madeira escura com prateleira iluminada.",
    "grande": "https://dipieva.com.br/assets/img/projetos/home-office-azul-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/home-office-azul-640.webp",
    "alt": "Projeto 3D: home office azul-marinho. Bancada em madeira escura com prateleira iluminada.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "dormitorios",
    "ambiente": "Dormitório",
    "titulo": "Suíte master em tons nude",
    "desc": "Boiseries com filetes dourados, cabeceira estofada e penteadeira.",
    "grande": "https://dipieva.com.br/assets/img/projetos/suite-nude-boiserie-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/suite-nude-boiserie-640.webp",
    "alt": "Projeto 3D: suíte master em tons nude. Boiseries com filetes dourados, cabeceira estofada e penteadeira.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": "largo alto direita"
  },
  {
    "cat": "gourmet",
    "ambiente": "Gourmet e adega",
    "titulo": "Bar e jantar integrados",
    "desc": "O mesmo bar visto a partir da mesa de jantar.",
    "grande": "https://dipieva.com.br/assets/img/projetos/adega-bar-jantar-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/adega-bar-jantar-640.webp",
    "alt": "Projeto 3D: bar e jantar integrados. O mesmo bar visto a partir da mesa de jantar.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "banhos",
    "ambiente": "Banheiro",
    "titulo": "Banheiro em tons escuros",
    "desc": "Gabinete grafite e tampo em mármore negro.",
    "grande": "https://dipieva.com.br/assets/img/projetos/banheiro-escuro-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/banheiro-escuro-640.webp",
    "alt": "Projeto 3D: banheiro em tons escuros. Gabinete grafite e tampo em mármore negro.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "gourmet",
    "ambiente": "Gourmet e adega",
    "titulo": "Cozinha gourmet com churrasqueira",
    "desc": "Armários estilo shaker em cinza com puxadores cobre.",
    "grande": "https://dipieva.com.br/assets/img/projetos/cozinha-gourmet-tijolinho-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/cozinha-gourmet-tijolinho-640.webp",
    "alt": "Projeto 3D: cozinha gourmet com churrasqueira. Armários estilo shaker em cinza com puxadores cobre.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "salas",
    "ambiente": "Sala",
    "titulo": "Sala de jantar com cristaleira",
    "desc": "Divisória perfurada iluminada e buffet suspenso.",
    "grande": "https://dipieva.com.br/assets/img/projetos/jantar-cristaleira-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/jantar-cristaleira-640.webp",
    "alt": "Projeto 3D: sala de jantar com cristaleira. Divisória perfurada iluminada e buffet suspenso.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "dormitorios",
    "ambiente": "Dormitório",
    "titulo": "Quarto jovem com bancada de estudo",
    "desc": "Madeira clara, prateleira com LED e escrivaninha.",
    "grande": "https://dipieva.com.br/assets/img/projetos/quarto-jovem-estudo-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/quarto-jovem-estudo-640.webp",
    "alt": "Projeto 3D: quarto jovem com bancada de estudo. Madeira clara, prateleira com LED e escrivaninha.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "gourmet",
    "ambiente": "Gourmet e adega",
    "titulo": "Bar com adega climatizada",
    "desc": "Cristaleira com portas fumê e taças iluminadas.",
    "grande": "https://dipieva.com.br/assets/img/projetos/adega-bar-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/adega-bar-640.webp",
    "alt": "Projeto 3D: bar com adega climatizada. Cristaleira com portas fumê e taças iluminadas.",
    "w": 640,
    "h": 427,
    "tag": "Projeto 3D",
    "classes": "largo alto"
  },
  {
    "cat": "comercial",
    "ambiente": "Comercial e home office",
    "titulo": "Consultório",
    "desc": "Parede em mármore, maca em madeira e estante com LED.",
    "grande": "https://dipieva.com.br/assets/img/projetos/consultorio-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/consultorio-640.webp",
    "alt": "Projeto 3D: consultório. Parede em mármore, maca em madeira e estante com LED.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "dormitorios",
    "ambiente": "Dormitório",
    "titulo": "Suíte master, vista frontal",
    "desc": "Painéis com filetes dourados e cama estofada.",
    "grande": "https://dipieva.com.br/assets/img/projetos/suite-nude-frontal-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/suite-nude-frontal-640.webp",
    "alt": "Projeto 3D: suíte master, vista frontal. Painéis com filetes dourados e cama estofada.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "salas",
    "ambiente": "Sala",
    "titulo": "Sala com painel ripado",
    "desc": "Nichos brancos e ripado em madeira.",
    "grande": "https://dipieva.com.br/assets/img/projetos/sala-ripado-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/sala-ripado-640.webp",
    "alt": "Projeto 3D: sala com painel ripado. Nichos brancos e ripado em madeira.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "salas",
    "ambiente": "Sala",
    "titulo": "Sala de jantar em madeira",
    "desc": "Painel amadeirado e iluminação geométrica.",
    "grande": "https://dipieva.com.br/assets/img/projetos/jantar-madeira-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/jantar-madeira-640.webp",
    "alt": "Projeto 3D: sala de jantar em madeira. Painel amadeirado e iluminação geométrica.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "comercial",
    "ambiente": "Comercial e home office",
    "titulo": "Home office com nichos",
    "desc": "Estante de nichos em madeira clara e branco.",
    "grande": "https://dipieva.com.br/assets/img/projetos/home-office-nichos-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/home-office-nichos-640.webp",
    "alt": "Projeto 3D: home office com nichos. Estante de nichos em madeira clara e branco.",
    "w": 640,
    "h": 640,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "gourmet",
    "ambiente": "Gourmet e adega",
    "titulo": "Área de lazer com espaço gourmet",
    "desc": "Gourmet coberto integrado à piscina.",
    "grande": "https://dipieva.com.br/assets/img/projetos/lazer-gourmet-piscina-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/lazer-gourmet-piscina-640.webp",
    "alt": "Projeto 3D: área de lazer com espaço gourmet. Gourmet coberto integrado à piscina.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": "largo alto direita"
  },
  {
    "cat": "dormitorios",
    "ambiente": "Dormitório",
    "titulo": "Quarto infantil (detalhe)",
    "desc": "Cabeceira com nicho curvo e escrivaninha integrada.",
    "grande": "https://dipieva.com.br/assets/img/projetos/quarto-infantil-nicho-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/quarto-infantil-nicho-640.webp",
    "alt": "Projeto 3D: quarto infantil (detalhe). Cabeceira com nicho curvo e escrivaninha integrada.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  },
  {
    "cat": "comercial",
    "ambiente": "Comercial e home office",
    "titulo": "Sala de atendimento",
    "desc": "Estante iluminada com fundo em mármore.",
    "grande": "https://dipieva.com.br/assets/img/projetos/sala-atendimento-1600.webp",
    "src": "https://dipieva.com.br/assets/img/projetos/sala-atendimento-640.webp",
    "alt": "Projeto 3D: sala de atendimento. Estante iluminada com fundo em mármore.",
    "w": 640,
    "h": 360,
    "tag": "Projeto 3D",
    "classes": ""
  }
];
