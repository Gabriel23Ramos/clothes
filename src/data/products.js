export const CATEGORIES = ["Todos", "Treino", "Leggings", "Corta-vento", "Acessórios"];

const SIZES_CLOTHING = ["P", "M", "G", "GG"];

export const PRODUCTS = [
  {
    id: "uvs-006", code: "UVS / 006", name: "Regata Dry-Fit Pro", spec: "DRY-FIT · SELADO", price: 189,
    category: "Treino", image: "https://images.pexels.com/photos/12025472/pexels-photo-12025472.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Dry-fit com costura selada, tecnologia de secagem rápida.",
    description: "Pro treino pesado: não marca suor, não pesa, não trava o movimento.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-010", code: "UVS / 010", name: "Camiseta Compressão Térmica", spec: "SEGUNDA PELE", price: 169,
    category: "Treino", image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Poliamida com elastano, compressão gradual.",
    description: "Ajuda na circulação durante o treino e acelera a recuperação depois.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-011", code: "UVS / 011", name: "Top Cropped Performance", spec: "SUPORTE MÉDIO", price: 139,
    category: "Treino", image: "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Dry-fit com faixa elástica de sustentação.",
    description: "Suporte pra treino de alta intensidade sem perder liberdade de movimento.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-012", code: "UVS / 012", name: "Camiseta Oversized Treino", spec: "RESPIRÁVEL · SOLTA", price: 149,
    category: "Treino", image: "https://images.pexels.com/photos/8532638/pexels-photo-8532638.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Algodão com mesh nas laterais pra ventilação.",
    description: "Caimento solto pra quem gosta de treinar confortável, sem parecer roupa de treino.",
    sizes: [...SIZES_CLOTHING, "GGG"],
  },
  {
    id: "uvs-018", code: "UVS / 018", name: "Camiseta Refletiva Corrida", spec: "TRIM 3M · NOTURNA", price: 179,
    category: "Treino", image: "https://images.pexels.com/photos/8532611/pexels-photo-8532611.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Dry-fit leve com faixas refletivas certificadas 3M.",
    description: "Pra quem corre de madrugada ou de noite e quer ser visto de longe.",
    sizes: SIZES_CLOTHING,
  },

  {
    id: "uvs-021", code: "UVS / 021", name: "Legging Compressão Total", spec: "ALTA COMPRESSÃO", price: 219,
    category: "Leggings", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Poliamida 78% + elastano 22%, compressão em 360°.",
    description: "Segura o músculo no treino pesado, sem marcar e sem transparecer.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-022", code: "UVS / 022", name: "Legging Cintura Alta Performance", spec: "CINTURA ALTA", price: 199,
    category: "Leggings", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Tecido com toque macio e secagem rápida.",
    description: "Cintura alta que não desce no agachamento, bolso lateral pra chave e celular.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-023", code: "UVS / 023", name: "Short Legging Treino", spec: "2 EM 1", price: 159,
    category: "Leggings", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Camada dupla: short por fora, legging por dentro.",
    description: "Liberdade de movimento com a cobertura de uma legging.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-024", code: "UVS / 024", name: "Legging Térmica Inverno", spec: "FORRO TÉRMICO", price: 249,
    category: "Leggings", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Fleece interno, externo em poliamida resistente ao vento.",
    description: "Pra treinar ao ar livre mesmo com frio, sem perder mobilidade.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-025", code: "UVS / 025", name: "Legging Estampada Reflective", spec: "TRIM 3M", price: 229,
    category: "Leggings", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Compressão média com detalhes refletivos nas laterais.",
    description: "Estampa que chama atenção de dia e brilha nos faróis à noite.",
    sizes: SIZES_CLOTHING,
  },

  {
    id: "uvs-002", code: "UVS / 002", name: "Corta-vento Corrida Reflective", spec: "NYLON · TRIM 3M", price: 349,
    category: "Corta-vento", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Nylon leve corta-vento, costuras seladas, trim refletivo 3M.",
    description: "Corta o vento de verdade no treino ao ar livre, sem esquentar demais.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-004", code: "UVS / 004", name: "Jaqueta Térmica Treino", spec: "FORRO POLAR", price: 389,
    category: "Corta-vento", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Forro polar interno, externo resistente à água.",
    description: "Aquece no aquecimento, respira no treino, não pesa na mochila.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-001", code: "UVS / 001", name: "Colete Corrida Utilitário", spec: "LEVE · 4 BOLSOS", price: 249,
    category: "Corta-vento", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Ripstop ultraleve com bolsos pra celular, chave e gel energético.",
    description: "Pensado pra corrida longa: carrega o essencial sem balançar.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-009", code: "UVS / 009", name: "Corta-vento Impermeável Leve", spec: "5.000MM", price: 419,
    category: "Corta-vento", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Shell impermeável 5.000mm, dobra e cabe na mão.",
    description: "Aguenta chuva fina sem virar sauna por dentro.",
    sizes: SIZES_CLOTHING,
  },
  {
    id: "uvs-008", code: "UVS / 008", name: "Jaqueta Bomber Esportiva", spec: "PUNHO RIBANA", price: 379,
    category: "Corta-vento", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Poliéster técnico com punho e gola em ribana.",
    description: "Do aquecimento pra rua sem trocar de roupa.",
    sizes: SIZES_CLOTHING,
  },

  {
    id: "uvs-013", code: "UVS / 013", name: "Garrafa Térmica 1L", spec: "AÇO INOX", price: 129,
    category: "Acessórios", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Aço inox com parede dupla, mantém temperatura por 12h.",
    description: "Marcação de volume, bico esportivo, cabe no suporte da bike.",
    sizes: ["Único (1L)"],
  },
  {
    id: "uvs-014", code: "UVS / 014", name: "Munhequeira Compressão Par", spec: "SUPORTE ARTICULAR", price: 79,
    category: "Acessórios", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Tecido elástico com reforço nas laterais.",
    description: "Suporte extra no treino de força, sem travar o pulso.",
    sizes: ["Único (par)"],
  },
  {
    id: "uvs-015", code: "UVS / 015", name: "Mochila Cross Training", spec: "IMPERMEÁVEL · 22L", price: 289,
    category: "Acessórios", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Nylon impermeável com compartimento separado pra tênis.",
    description: "Vai da academia pro trabalho sem amassar a roupa.",
    sizes: ["Único"],
  },
  {
    id: "uvs-019", code: "UVS / 019", name: "Faixa de Cabeça Dry-Fit", spec: "ANTI-SUOR", price: 49,
    category: "Acessórios", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Dry-fit com faixa de silicone antiderrapante.",
    description: "Segura o suor longe dos olhos no treino mais puxado.",
    sizes: ["Único (ajustável)"],
  },
  {
    id: "uvs-020", code: "UVS / 020", name: "Meia Compressão Pack 3", spec: "CANO MÉDIO", price: 99,
    category: "Acessórios", image: "https://images.pexels.com/photos/36593273/pexels-photo-36593273.jpeg?auto=compress&cs=tinysrgb&w=800",
    material: "Algodão com compressão progressiva na panturrilha.",
    description: "Kit com 3 pares, reduz o cansaço em treinos longos.",
    sizes: ["34-38", "39-44"],
  },
];

export function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
