import React from "react";
import { Link } from "react-router-dom";
import HazardStrip from "../components/HazardStrip";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES, discountPercent } from "../data/products";

export default function Home() {
  const featured = PRODUCTS.filter((_, i) => i % 2 === 0).slice(0, 10);

  const categoryDeals = CATEGORIES.filter((c) => c !== "Todos").map((cat) => {
    const items = PRODUCTS.filter((p) => p.category === cat);
    const maxDiscount = Math.max(...items.map((p) => discountPercent(p.price, p.originalPrice)));
    return { category: cat, maxDiscount };
  });

  return (
    <>
      <section className="hero wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow mono">Urban Vest Store — linha treino 01 / 2026</p>
            <h1 className="hero-title">
              Pronto pro treino.
              <br />
              <span className="cut">Feito pra evoluir.</span>
            </h1>
            <p className="hero-sub">
              Legging, top e corta-vento pro seu treino: compressão que ajuda, reflexivo pra
              treinar de noite, respiro que não pesa.
            </p>
            <Link to="/loja" className="btn-primary mono">
              Ver coleção →
            </Link>
          </div>

          <img
            src="/hero-showcase.png"
            alt="Loja física conceito Urban Vest Store"
            className="hero-showcase"
          />
        </div>
      </section>

      <HazardStrip />

      <section className="wrap gender-section">
        <Link to="/loja?genero=Masculino" className="gender-banner gender-banner-m">
          <span className="mono gender-eyebrow">Para o treino</span>
          <span className="gender-title">Masculino</span>
          <span className="mono gender-cta">Comprar agora →</span>
        </Link>
        <Link to="/loja?genero=Feminino" className="gender-banner gender-banner-f">
          <span className="mono gender-eyebrow">Para o treino</span>
          <span className="gender-title">Feminino</span>
          <span className="mono gender-cta">Comprar agora →</span>
        </Link>
      </section>

      <HazardStrip />

      <section className="wrap deals-section">
        <p className="eyebrow mono">Categorias em destaque</p>
        <div className="deals-grid">
          {categoryDeals.map((d) => (
            <Link key={d.category} to={`/loja?categoria=${encodeURIComponent(d.category)}`} className="deal-tile">
              <span className="mono deal-discount">até {d.maxDiscount}% off</span>
              <span className="deal-name">{d.category}</span>
              <span className="mono deal-cta">Descubra →</span>
            </Link>
          ))}
        </div>
      </section>

      <HazardStrip />

      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow mono">Destaques da linha treino</p>
            <h2>
              Bora <span className="hi">começar</span>
            </h2>
          </div>
          <p className="section-sub">Uma amostra de cada categoria. O catálogo completo tá na Loja.</p>
        </div>

        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link to="/loja" className="btn-primary mono">
            Ver catálogo completo →
          </Link>
        </div>
      </section>
    </>
  );
}
