"use client";

import { useState } from "react";
import { cars, brands } from "../data/cars";
import CarCard from "./CarCard";
import CarModal from "./CarModal";

const priceRanges = [
  { label: "All Prices",     min: 0,      max: Infinity },
  { label: "Under $100K",    min: 0,      max: 100000 },
  { label: "$100K – $200K",  min: 100000, max: 200000 },
  { label: "$200K+",         min: 200000, max: Infinity },
];

export default function CarListing() {
  const [search, setSearch]           = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [priceRange, setPriceRange]   = useState("All Prices");
  const [selectedCar, setSelectedCar] = useState(null);

  const filtered = cars.filter((car) => {
    const matchSearch =
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.brand.toLowerCase().includes(search.toLowerCase());
    const matchBrand = selectedBrand === "All" || car.brand === selectedBrand;
    const range = priceRanges.find((r) => r.label === priceRange) ?? priceRanges[0];
    const matchPrice = car.price >= range.min && car.price <= range.max;
    return matchSearch && matchBrand && matchPrice;
  });

  return (
    <section id="cars" className="py-20 px-8 md:px-16" style={{ background: "#0a0a0a" }}>

      <div className="flex items-baseline justify-between mb-10">
        <div>
          <p className="text-[10px] tracking-[3px] uppercase text-gold mb-2">Our Collection</p>
          <h2 className="text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
            Featured <span className="text-gold">Vehicles</span>
          </h2>
        </div>
        <span className="text-xs text-white/30 hidden md:block">{filtered.length} cars found</span>
      </div>

      <div
        className="flex flex-col md:flex-row gap-3 mb-10 p-4"
        style={{ background: "#111", border: "0.5px solid rgba(255,255,255,0.07)" }}
      >
        <input
          type="text"
          placeholder="🔍  Search by name or brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-dark flex-1 px-4 py-3 text-sm"
        />
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="input-dark px-4 py-3 text-sm cursor-pointer"
        >
          {brands.map((b) => (
            <option key={b} value={b} style={{ background: "#1a1a1a" }}>
              {b === "All" ? "All Brands" : b}
            </option>
          ))}
        </select>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="input-dark px-4 py-3 text-sm cursor-pointer"
        >
          {priceRanges.map((r) => (
            <option key={r.label} value={r.label} style={{ background: "#1a1a1a" }}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} onViewDetails={setSelectedCar} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-5xl mb-4 opacity-20">🚗</div>
          <p className="text-xl text-white/30 mb-2" style={{ fontFamily: "Georgia, serif" }}>No cars found</p>
          <p className="text-sm text-white/20">Try adjusting your search or filters</p>
        </div>
      )}

      {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </section>
  );
}