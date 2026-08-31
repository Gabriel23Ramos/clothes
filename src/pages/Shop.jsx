import React, { useState } from "react";
import CategoryTabs from "../components/CategoryTabs";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const filtered = activeCategory === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="wrap section">
      <div className="section-head">
        <div>
          <p className="eyebrow mono">Catálogo atual — {filtered.length} peças</p>
          <h2>
            Peça que <span className="hi">acompanha</span> o role
          </h2>
        </div>
        <p className="section-sub">Sem frescura. Cada peça com ficha técnica de verdade: peso, tecido e reforço.</p>
      </div>

      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
