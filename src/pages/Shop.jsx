import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryTabs from "../components/CategoryTabs";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES, GENDERS } from "../data/products";

const GENDER_OPTIONS = ["Todos", ...GENDERS];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("categoria");
  const genderFromUrl = searchParams.get("genero");

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.includes(categoryFromUrl) ? categoryFromUrl : "Todos"
  );
  const [activeGender, setActiveGender] = useState(
    GENDER_OPTIONS.includes(genderFromUrl) ? genderFromUrl : "Todos"
  );

  useEffect(() => {
    if (CATEGORIES.includes(categoryFromUrl)) setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    if (GENDER_OPTIONS.includes(genderFromUrl)) setActiveGender(genderFromUrl);
  }, [genderFromUrl]);

  const filtered = PRODUCTS.filter((p) => {
    const categoryMatch = activeCategory === "Todos" || p.category === activeCategory;
    const genderMatch =
      activeGender === "Todos" || p.gender === activeGender || p.gender === "Unissex";
    return categoryMatch && genderMatch;
  });

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

      <div className="filter-row">
        <span className="mono filter-label">Gênero</span>
        {GENDER_OPTIONS.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGender(g)}
            className={`mono tab-btn tab-btn-small ${activeGender === g ? "tab-btn-active" : ""}`}
          >
            {g}
          </button>
        ))}
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
