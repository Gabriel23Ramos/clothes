# Urban Vest Store

Site em React (Vite) da Urban Vest Store — loja de roupas urbanas/técnicas.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente http://localhost:5173).

## Como gerar a versão de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/   -> peças reutilizáveis (Header, Footer, ProductCard, etc.)
  context/      -> estado global (carrinho e conta de usuário, via React Context)
  data/         -> catálogo de produtos
  pages/        -> páginas (Home, Loja, Carrinho, Login, 404)
  App.jsx       -> define as rotas
  main.jsx      -> ponto de entrada
```

## Sobre o login e o carrinho

Este protótipo salva conta e carrinho no `localStorage` do navegador — não tem
banco de dados nem servidor por trás. Para produção de verdade (pagamento,
múltiplos usuários, painel de pedidos), o próximo passo é conectar um backend
real (ex: Supabase, Postgres + API própria).
