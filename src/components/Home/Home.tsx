import HeroSlider from "../slider/HeroSlider";
import ProductCarousel from "../product/ProductCarousel";
import "./Home.css";
import HomeDetailSection from "./HomeDetailSection";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* REQUIRED wrapper */}
      <section className="home-carousel">
        <ProductCarousel />
      </section>

      <HomeDetailSection />
    </>
  );
}
