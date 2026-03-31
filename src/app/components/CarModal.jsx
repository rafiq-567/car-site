"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function CarModal({ car, onClose }) {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const specs = [
    { label: "Engine",       value: car.features.engine },
    { label: "Horsepower",   value: car.features.horsepower },
    { label: "0 – 60 mph",   value: car.features.zeroToSixty },
    { label: "Top Speed",    value: car.features.topSpeed },
    { label: "Transmission", value: car.features.transmission },
    { label: "Drive",        value: car.features.drive },
    { label: "Fuel / Range", value: car.features.mileage },
    { label: "Year",         value: car.features.year },
  ];

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0,0,0,0.88)" }}
      onClick={onClose}
    >
      <div
        className="modal-content relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        style={{ background: "#111", border: "0.5px solid rgba(232,201,126,0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
          style={{ background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.1)" }}
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-full min-h-[280px]" style={{ background: "#1a1a1a" }}>
            <Image
              src={car.image}
              alt={`${car.brand} ${car.name}`}
              fill
              className="object-cover"
              sizes="50vw"
            />
            {car.tag && (
              <span className={`absolute top-4 left-4 text-[9px] tracking-[2px] uppercase font-bold px-3 py-1 ${car.tagColor}`}>
                {car.tag}
              </span>
            )}
          </div>

          <div className="p-7 md:p-8">
            <div className="text-[10px] tracking-[2px] uppercase text-gold mb-1">{car.brand} · Premium</div>
            <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>{car.name}</h2>
            <div className="text-2xl text-gold font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {formatPrice(car.price)}
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">{car.description}</p>

            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-3"
                  style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="text-[8px] tracking-[1.5px] uppercase text-white/30 mb-1">{spec.label}</div>
                  <div className="text-xs font-semibold text-white/85">{spec.value}</div>
                </div>
              ))}
            </div>

            <button onClick={onClose} className="btn-gold w-full py-3.5 gap-3">
              Book Test Drive →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}