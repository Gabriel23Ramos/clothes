import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { formatBRL } from "../data/products";

export default function Cart() {
  const { cart, changeQty, removeItem, subtotal, totalItems, clearCart } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  function handleCheckout() {
    if (cart.length === 0) return;
    if (!isLoggedIn) {
      navigate("/login", { state: { from: "/carrinho", notice: "Entre na sua conta pra finalizar a compra." } });
      return;
    }
    clearCart();
    navigate("/", { state: { justCheckedOut: true } });
  }

  return (
    <section className="wrap section">
      <div className="section-head">
        <div>
          <p className="eyebrow mono">Sua sacola</p>
          <h2>
            {totalItems} {totalItems === 1 ? "peça" : "peças"} <span className="hi">selecionadas</span>
          </h2>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Sua sacola está vazia.</p>
          <Link to="/loja" className="btn-primary mono" style={{ marginTop: 20, display: "inline-flex" }}>
            Ver coleção →
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.lineId} className="cart-row">
                <div className="cart-thumb" />
                <div className="cart-row-info">
                  <h4>{item.name}</h4>
                  {item.size && <p className="mono muted" style={{ fontSize: 11.5, marginTop: 2 }}>Tamanho: {item.size}</p>}
                  <p className="mono price">{formatBRL(item.price)}</p>
                  <div className="qty-controls">
                    <button onClick={() => changeQty(item.lineId, -1)} aria-label="Diminuir quantidade">
                      <Minus size={12} />
                    </button>
                    <span className="mono">{item.qty}</span>
                    <button onClick={() => changeQty(item.lineId, 1)} aria-label="Aumentar quantidade">
                      <Plus size={12} />
                    </button>
                    <button onClick={() => removeItem(item.lineId)} aria-label="Remover item" className="remove-btn">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <div className="summary-row">
              <span className="mono">Subtotal</span>
              <span className="mono price-lg">{formatBRL(subtotal)}</span>
            </div>
            {!isLoggedIn && (
              <p className="mono muted" style={{ marginBottom: 14, fontSize: 12 }}>
                Você precisa entrar na conta pra finalizar.
              </p>
            )}
            <button className="btn-full mono" onClick={handleCheckout}>
              {isLoggedIn ? "Finalizar pedido" : "Entrar e finalizar"}
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
