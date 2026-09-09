import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

const FavoritesContext = createContext(null);
const FAVORITES_KEY = "urbanvest:favorites";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch (err) {
      setFavorites([]);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites, loaded]);

  const toggleFavorite = useCallback((productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }, []);

  const isFavorite = useCallback((productId) => favorites.includes(productId), [favorites]);

  const value = { favorites, toggleFavorite, isFavorite, totalFavorites: favorites.length };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites precisa estar dentro de um FavoritesProvider");
  return ctx;
}
