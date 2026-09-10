import React, { useState } from "react";
import { Heart } from "lucide-react";
import { formatBRL, discountPercent } from "../data/products";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [active, setActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[Math.floor(product.sizes.length / 2)]
  );
  const [justAdded, setJustAdded] = useState(false);

  const favorited = isFavorite(product.id);
  const discount = discountPercent(product.price, product.originalPrice);

  function handleAdd(e) {
    e.stopPropagation();
    addToCart(product, selectedSize);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  }

  function handleFavorite(e) {
    e.stopPropagation();
    toggleFavorite(product.id);
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
        <img src={product.image} alt={product.name} className="product-photo" loading="lazy" />
        <div className="corner-tag" />
        <span className="mono code-tag">{product.code}</span>
        {discount > 0 && <span className="mono discount-badge">-{discount}%</span>}
        <span className="mono category-tag">{product.category}</span>

        <button
          className={`favorite-btn ${favorited ? "favorite-btn-active" : ""}`}
          onClick={handleFavorite}
          aria-label={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          aria-pressed={favorited}
        >
          <Heart size={16} fill={favorited ? "currentColor" : "none"} />
        </button>

        <div className={`product-overlay ${active ? "product-overlay-active" : ""}`}>
          <div>
            <h3 className="overlay-name">{product.name}</h3>
            <p className="mono overlay-price">
              {product.originalPrice && (
                <span className="overlay-price-original">{formatBRL(product.originalPrice)}</span>
              )}
              {formatBRL(product.price)}
            </p>
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
          {product.originalPrice && (
            <p className="mono price-original">{formatBRL(product.originalPrice)}</p>
          )}
          <p className="mono price">{formatBRL(product.price)}</p>
        </div>
      </div>
    </div>
  );
}
