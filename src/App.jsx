import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HazardStrip from "./components/HazardStrip";
import PromoBar from "./components/PromoBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <PromoBar />
          <HazardStrip />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loja" element={<Shop />} />
              <Route path="/favoritos" element={<Favorites />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <HazardStrip />
          <Footer />
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}
