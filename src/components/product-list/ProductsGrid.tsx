
import type { Product } from "../../data/products";
import "./ProductsGrid.css";

export default function ProductsGrid({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <div className="image-wrap">
            <img src={p.image} alt={p.name} />
          </div>

          <h4>{p.name}</h4>
          <p className="price">Rs. {p.price}</p>

          <button className="buy-btn">Buy now</button>
        </div>
      ))}
    </div>
  );
}
