import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Favorites() {
  const { favorites } = useFavorites();
  const favoriteProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  return (
    <section className="wrap section">
      <div className="section-head">
        <div>
          <p className="eyebrow mono">Sua lista</p>
          <h2>
            {favoriteProducts.length} {favoriteProducts.length === 1 ? "peça" : "peças"}{" "}
            <span className="hi">marcadas</span>
          </h2>
        </div>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className="empty-cart">
          <Heart size={28} style={{ marginBottom: 16, opacity: 0.4 }} />
          <p>Você ainda não marcou nenhuma peça.</p>
          <Link to="/loja" className="btn-primary mono" style={{ marginTop: 20, display: "inline-flex" }}>
            Ver coleção →
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {favoriteProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
