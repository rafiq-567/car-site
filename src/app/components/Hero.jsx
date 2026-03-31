import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080808 0%, #0f0f0f 50%, #0a0d10 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(232,201,126,0.025) 80px, rgba(232,201,126,0.025) 81px)",
        }}
      />

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/yctsKg7y/ryanmcguire-car-498244.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 px-8 md:px-20 pt-28 pb-16 max-w-3xl">

        <div className="animate-fade-up inline-flex mb-8">
          <span
            className="text-gold text-[10px] tracking-[3px] uppercase px-4 py-1.5"
            style={{ border: "0.5px solid rgba(232,201,126,0.35)" }}
          >
            Premium Collection 2026
          </span>
        </div>

        <h1
          className="animate-fade-up-1 text-5xl md:text-7xl font-bold leading-[1.08] mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Find Your
          <br />
          <span className="text-gold">Dream Car</span>
          <br />
          Today.
        </h1>

        <p className="animate-fade-up-2 text-white/45 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
          Explore our curated selection of the world&apos;s finest automobiles.
          From exotic sports cars to ultra-luxury sedans — your perfect ride awaits.
        </p>

        <div className="animate-fade-up-3 flex flex-wrap gap-4">
          <Link href="#cars" className="btn-gold px-8 py-4 gap-3">
            Browse Cars <span>→</span>
          </Link>
          <Link href="#contact" className="btn-outline-white px-8 py-4">
            Contact Us
          </Link>
        </div>

        <div
          className="animate-fade-up-4 flex gap-10 mt-16 pt-10"
          style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { value: "50+", label: "Cars Available" },
            { value: "12", label: "Top Brands" },
            { value: "500+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-gold" style={{ fontFamily: "Georgia, serif" }}>
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}