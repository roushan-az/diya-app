import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCarousel.css";
import { products } from "../data/products";

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const itemsPerView = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };

  const visible = itemsPerView();
  const maxIndex = Math.max(products.length - visible, 0);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="carousel-section">
      {/* Title */}
      <div className="title-wrapper">
        <span className="title-badge">Handpicked</span>
        <h2 className="carousel-title luxury-title">
          DesiDazzle Premium Collection
        </h2>
      </div>

      <div className="carousel-wrapper">
        {/* Left Arrow */}
        {index > 0 && (
          <button className="nav-btn left" onClick={prev}>
            ‹
          </button>
        )}

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * (100 / visible)}%)`,
            }}
          >
            {products.map((p) => (
              <div className="product-card" key={p.id}>
                <Link to={`/product/${p.id}`}>
                  <div className="image-box">
                    <img src={p.image} alt={p.name} />
                  </div>
                </Link>

                <h3>{p.name}</h3>
                <p className="price">Rs. {p.price}</p>
                <button className="buy-btn">Buy now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {index < maxIndex && (
          <button className="nav-btn right" onClick={next}>
            ›
          </button>
        )}
      </div>
    </section>
  );
}
