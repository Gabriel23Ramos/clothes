import React from "react";
import { formatBRL } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-visual">
        <div className="tex" style={{ background: product.tex }} />
        <div className="corner-tag" />
        <span className="mono code-tag">{product.code}</span>
        <span className="mono category-tag">{product.category}</span>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p className="mono spec">{product.spec}</p>
        </div>
        <div className="product-side">
          <p className="mono price">{formatBRL(product.price)}</p>
          <button className="add-btn mono" onClick={() => addToCart(product)}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
