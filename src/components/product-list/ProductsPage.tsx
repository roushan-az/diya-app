import { useState } from "react";
import { products } from "../../data/products";
import ProductsLayout from "./ProductsLayout";
import FiltersPanel from "./FiltersPanel";
import ProductsGrid from "./ProductsGrid";
import "./ProductsPage.css";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice = priceFilter
      ? product.price <= priceFilter
      : true;

    return matchesSearch && matchesPrice;
  });

  const clearAll = () => {
    setSearch("");
    setPriceFilter(null);
  };

  return (
    <ProductsLayout
      sidebar={
        <FiltersPanel
          search={search}
          setSearch={setSearch}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          clearAll={clearAll}
        />
      }
      content={
        <ProductsGrid
          products={filteredProducts}
        />
      }
    />
  );
}
