import { Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import ProductDetails from "../components/ProductDetails";
import MakhanaStory from "../components/MakhanaStory";
import "./App.css";
import ScrollToTop from "../util/ScrollToTop";
import FAQs from "../components/faq/FAQs";
import PrivacyPolicy from "../components/faq/PrivacyPolicy";
import Terms from "../components/faq/Terms";
import Returns from "../components/faq/Returns";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makhana-story" element={<MakhanaStory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/returns" element={<Returns />} />

      </Routes>

      <Footer />
    </>
  );
}
