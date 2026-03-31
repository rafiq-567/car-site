import Image from "next/image";

export default function CarCard({ car, onViewDetails }) {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div
      className="card-hover flex flex-col"
      style={{ background: "#111111", border: "0.5px solid rgba(255,255,255,0.08)" }}
    >
      <div className="relative h-52 overflow-hidden" style={{ background: "#1a1a1a" }}>
        <Image
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {car.tag && (
          <span className={`absolute top-3 left-3 text-[9px] tracking-[2px] uppercase font-bold px-3 py-1 ${car.tagColor}`}>
            {car.tag}
          </span>
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(17,17,17,0.5) 0%, transparent 60%)" }}
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="text-[10px] tracking-[2px] uppercase text-gold mb-1.5">{car.brand}</div>
        <div className="text-lg font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>{car.name}</div>
        <p className="text-xs text-white/40 leading-relaxed mb-4 flex-1">{car.description}</p>

        <div
          className="flex gap-5 mb-4 pb-4"
          style={{ borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { label: "Engine", value: car.features.engine.split(" ").slice(0, 2).join(" ") },
            { label: "0–60", value: car.features.zeroToSixty },
            { label: "HP", value: car.features.horsepower },
          ].map((spec) => (
            <div key={spec.label}>
              <div className="text-[8px] tracking-[1.5px] uppercase text-white/25 mb-0.5">{spec.label}</div>
              <div className="text-xs font-semibold text-white/80">{spec.value}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gold" style={{ fontFamily: "Georgia, serif" }}>
            {formatPrice(car.price)}
          </div>
          <button
            onClick={() => onViewDetails(car)}
            className="text-[10px] tracking-[1.5px] uppercase text-white/60 px-4 py-2 transition-all duration-200 hover:text-gold cursor-pointer bg-transparent"
            style={{ border: "0.5px solid rgba(255,255,255,0.2)" }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}