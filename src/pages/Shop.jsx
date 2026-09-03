import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryTabs from "../components/CategoryTabs";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const fromUrl = searchParams.get("categoria");
  const initialCategory = CATEGORIES.includes(fromUrl) ? fromUrl : "Todos";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    if (CATEGORIES.includes(fromUrl)) {
      setActiveCategory(fromUrl);
    }
  }, [fromUrl]);

  const filtered = activeCategory === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="wrap section">
      <div className="section-head">
        <div>
          <p className="eyebrow mono">Catálogo atual — {filtered.length} peças</p>
          <h2>
            Peça que <span className="hi">aguenta</span> o treino
          </h2>
        </div>
        <p className="section-sub">Sem frescura. Cada peça com ficha técnica de verdade: compressão, tecido e ajuste.</p>
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
