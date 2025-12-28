import type { Product } from "../data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <p className="price">
        Rs. {product.price}
        {product.originalPrice && (
          <span> Rs. {product.originalPrice}</span>
        )}
      </p>

      <button className="buy">Buy now</button>
    </div>
  );
}
