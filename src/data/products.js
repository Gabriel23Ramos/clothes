export const CATEGORIES = ["Todos", "Coletes", "Jaquetas", "Camisetas", "Acessórios"];

export const PRODUCTS = [
  { id: "uvs-001", code: "UVS / 001", name: "Colete Tático 01", spec: "420G · RIPSTOP", price: 349, category: "Coletes", tex: "linear-gradient(150deg,#3A3A3A,#141414 70%)" },
  { id: "uvs-003", code: "UVS / 003", name: "Colete Utilitário", spec: "BRIM · 6 BOLSOS", price: 389, category: "Coletes", tex: "linear-gradient(150deg,#333330,#101010 70%)" },
  { id: "uvs-005", code: "UVS / 005", name: "Cargo Vest", spec: "SARJA · REFORÇADO", price: 359, category: "Coletes", tex: "linear-gradient(150deg,#363634,#121210 70%)" },
  { id: "uvs-007", code: "UVS / 007", name: "Colete Refletivo Noturno", spec: "TRIM 3M · TOTAL", price: 399, category: "Coletes", tex: "linear-gradient(150deg,#2E2E2E,#0F0F0F 70%)" },
  { id: "uvs-002", code: "UVS / 002", name: "Corta-vento Reflective", spec: "NYLON · TRIM 3M", price: 429, category: "Jaquetas", tex: "linear-gradient(150deg,#4A4A46,#181818 70%)" },
  { id: "uvs-004", code: "UVS / 004", name: "Jaqueta Shell", spec: "IMPERMEÁVEL LEVE", price: 479, category: "Jaquetas", tex: "linear-gradient(150deg,#40403C,#151512 70%)" },
  { id: "uvs-008", code: "UVS / 008", name: "Jaqueta Bomber Urbana", spec: "FORRO TÉRMICO", price: 459, category: "Jaquetas", tex: "linear-gradient(150deg,#3D3D3D,#131313 70%)" },
  { id: "uvs-009", code: "UVS / 009", name: "Corta-vento Neon", spec: "RIPSTOP LEVE", price: 399, category: "Jaquetas", tex: "linear-gradient(150deg,#454538,#121208 70%)" },
  { id: "uvs-006", code: "UVS / 006", name: "Regatão Técnico", spec: "DRY-FIT · SELADO", price: 219, category: "Camisetas", tex: "linear-gradient(150deg,#38381F,#121208 70%)" },
  { id: "uvs-010", code: "UVS / 010", name: "Camiseta Oversized Urban", spec: "ALGODÃO PESADO", price: 149, category: "Camisetas", tex: "linear-gradient(150deg,#333333,#101010 70%)" },
  { id: "uvs-011", code: "UVS / 011", name: "Camiseta Refletiva Print", spec: "SILK · TRIM 3M", price: 169, category: "Camisetas", tex: "linear-gradient(150deg,#3A3A34,#111110 70%)" },
  { id: "uvs-012", code: "UVS / 012", name: "Longsleeve Técnica", spec: "DRY-FIT · UV50", price: 189, category: "Camisetas", tex: "linear-gradient(150deg,#35352F,#0F0F0D 70%)" },
  { id: "uvs-013", code: "UVS / 013", name: "Boné Urban Vest", spec: "ABA RETA · AJUSTÁVEL", price: 129, category: "Acessórios", tex: "linear-gradient(150deg,#3E3E3E,#131313 70%)" },
  { id: "uvs-014", code: "UVS / 014", name: "Bolsa Transversal Tática", spec: "IMPERMEÁVEL", price: 199, category: "Acessórios", tex: "linear-gradient(150deg,#363630,#101010 70%)" },
  { id: "uvs-015", code: "UVS / 015", name: "Meia Refletiva Pack 3", spec: "ALGODÃO · TRIM", price: 79, category: "Acessórios", tex: "linear-gradient(150deg,#303030,#0D0D0D 70%)" },
];

export function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
