import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Logo */}
      <div className="font-serif text-xl font-bold tracking-widest">
        <span className="text-gold">Car</span>
        <span className="text-white">Site</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        <li>
          <Link
            href="#hero"
            className="text-xs tracking-widest uppercase text-white/50 hover:text-gold transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#cars"
            className="text-xs tracking-widest uppercase text-white/50 hover:text-gold transition-colors duration-200"
          >
            Browse Cars
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="text-xs tracking-widest uppercase text-white/50 hover:text-gold transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* CTA */}
      <Link href="#cars" className="btn-gold px-5 py-2.5">
        Browse Cars
      </Link>
    </nav>
  );
}
