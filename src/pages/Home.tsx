import HeroSlider from "../components/hero/HeroSlider";
import ProductGrid from "../components/ProductGrid";


export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="collection">
        <div className="container">
          <h1>
            DiyaDazzle Premium Collection | Buy Upper Bihar Makhana & Water Chestnut Flour Online in India
          </h1>

          <ProductGrid />
        </div>
      </section>
    </>
  );
}
