import React from "react";
import { CATEGORIES } from "../data/products";

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="category-tabs">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`tab-btn mono ${active === cat ? "tab-btn-active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
