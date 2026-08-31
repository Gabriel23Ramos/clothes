import React from "react";
import { Link } from "react-router-dom";
import HazardStrip from "../components/HazardStrip";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Home() {
  const featured = PRODUCTS.filter((_, i) => i % 2 === 0).slice(0, 10);

  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow mono">Urban Vest Store — lançamento 01 / 2026</p>
          <h1 className="hero-title">
            Pronto pra rua.
            <br />
            <span className="cut">Feito pra voar.</span>
          </h1>
          <p className="hero-sub">
            Colete, jaqueta e peça utilitária pro seu corre: reflexivo pra quem sai de noite,
            resistente pra quem não para de se mexer.
          </p>
          <Link to="/loja" className="btn-primary mono">
            Ver coleção →
          </Link>
        </div>
      </section>

      <HazardStrip />

      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow mono">Destaques do lançamento</p>
            <h2>
              Começa <span className="hi">por aqui</span>
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
