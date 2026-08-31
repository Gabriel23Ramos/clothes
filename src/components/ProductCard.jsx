import React, { useState } from "react";
import { formatBRL } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [active, setActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[Math.floor(product.sizes.length / 2)]
  );
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd(e) {
    e.stopPropagation();
    addToCart(product, selectedSize);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  }

  function toggleActive() {
    setActive((v) => !v);
  }

  return (
    <div
      className="product-card"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="product-visual" onClick={toggleActive}>
        <div className="tex" style={{ background: product.tex }} />
        <div className="corner-tag" />
        <span className="mono code-tag">{product.code}</span>
        <span className="mono category-tag">{product.category}</span>

        <div className={`product-overlay ${active ? "product-overlay-active" : ""}`}>
          <div>
            <h3 className="overlay-name">{product.name}</h3>
            <p className="mono overlay-price">{formatBRL(product.price)}</p>
            <p className="overlay-material">{product.material}</p>
            <p className="overlay-desc">{product.description}</p>
          </div>

          <div onClick={(e) => e.stopPropagation()}>
            <p className="mono overlay-label">Tamanho</p>
            <div className="size-row">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`mono size-btn ${selectedSize === size ? "size-btn-active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button className="mono overlay-add-btn" onClick={handleAdd}>
              {justAdded ? "Adicionado ✓" : "Adicionar à sacola"}
            </button>
          </div>
        </div>
      </div>

      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p className="mono spec">{product.spec}</p>
        </div>
        <div className="product-side">
          <p className="mono price">{formatBRL(product.price)}</p>
        </div>
      </div>
    </div>
  );
}
