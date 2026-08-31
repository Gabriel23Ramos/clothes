import React from "react";

const ICONS = {
  Coletes: (
    <path d="M35 8 L45 8 L50 20 L50 92 L35 92 L30 60 L20 92 L8 92 L8 20 Z M8 20 L20 12 L35 8 M50 20 L38 12" />
  ),
  Jaquetas: (
    <path d="M30 6 L44 6 L50 16 L58 18 L58 40 L50 38 L50 92 L10 92 L10 38 L2 40 L2 18 L10 16 Z M30 6 L22 16 L30 24 L38 16 Z" />
  ),
  Camisetas: (
    <path d="M22 4 L38 4 L44 12 L58 18 L52 32 L44 28 L44 92 L16 92 L16 28 L8 32 L2 18 L16 12 Z" />
  ),
  Acessórios: (
    <path d="M12 34 L48 34 L52 90 L8 90 Z M20 34 C20 18 22 8 30 8 C38 8 40 18 40 34" />
  ),
};

export default function CategoryIcon({ category, className }) {
  const path = ICONS[category] || ICONS.Acessórios;
  return (
    <svg viewBox="0 0 60 96" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
      {path}
    </svg>
  );
}
