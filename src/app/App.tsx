import HeroSlider from "../components/hero/HeroSlider";
import ProductCarousel from "../components/ProductCarousel";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <ProductCarousel />
      <Footer />
    </>
  );
}
