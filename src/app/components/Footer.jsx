export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-7 gap-4"
      style={{ background: "#060606", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
    >
      <div className="text-lg font-bold tracking-widest" style={{ fontFamily: "Georgia, serif" }}>
        <span className="text-gold">Car</span>
        <span className="text-white">Site</span>
      </div>
      <p className="text-xs text-white/20">© 2025 CarSite. All rights reserved.</p>
      <div className="flex gap-6">
        {["Privacy", "Terms"].map((link) => (
          <a key={link} href="#" className="text-[10px] tracking-widest uppercase text-white/25 hover:text-gold transition-colors">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}