import "./FiltersPanel.css";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  priceFilter: number | null;
  setPriceFilter: (v: number | null) => void;
  clearAll: () => void;
}

export default function FiltersPanel({
  search,
  setSearch,
  priceFilter,
  setPriceFilter,
  clearAll,
}: Props) {
  const hasActiveFilters = search || priceFilter;

  return (
    <aside className="filters-panel">
      <div className="filters-header">
        <h3>Filters</h3>
        {hasActiveFilters && (
          <button className="clear-all" onClick={clearAll}>
            Clear all
          </button>
        )}
      </div>

      {/* SEARCH */}
      <div className="filter-section">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PRICE */}
      <div className="filter-section">
        <label>Price</label>

        {[300, 500, 800].map((price) => (
          <button
            key={price}
            className={`price-pill ${
              priceFilter === price ? "active" : ""
            }`}
            onClick={() =>
              setPriceFilter(
                priceFilter === price ? null : price
              )
            }
          >
            Under ₹{price}
          </button>
        ))}
      </div>
    </aside>
  );
}
