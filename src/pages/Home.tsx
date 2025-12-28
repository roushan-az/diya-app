import HeroSlider from "../components/hero/HeroSlider";
import ProductGrid from "../components/ProductGrid";


export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="collection">
        <div className="container">
          <h1>
            Vikram Tea Premium Collection | Buy Upper Assam and Second Flush Tea
            Online in India
          </h1>

          <ProductGrid />
        </div>
      </section>
    </>
  );
}
