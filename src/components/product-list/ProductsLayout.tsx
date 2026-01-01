// src/pages/ProductsPage/ProductsLayout.tsx

import "./ProductsLayout.css";

interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export default function ProductsLayout({ sidebar, content }: Props) {
  return (
    <main className="products-layout">
      <aside className="products-sidebar">{sidebar}</aside>
      <section className="products-main">{content}</section>
    </main>
  );
}
