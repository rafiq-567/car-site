"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm]         = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-8 md:px-16"
      style={{ background: "#0d0d0d", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        <div>
          <p className="text-[10px] tracking-[3px] uppercase text-gold mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Let&apos;s Find Your
            <br />
            <span className="text-gold">Perfect Match</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm">
            Have questions about a vehicle? Our team of experts is ready to help
            you find your dream car.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: "📞", label: "Phone",    value: "+880 1956897488" },
              { icon: "✉️", label: "Email",    value: "hello@carsite.com" },
              { icon: "📍", label: "Location", value: "Khulna, PO 7300" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center text-sm flex-shrink-0"
                  style={{ border: "0.5px solid rgba(232,201,126,0.3)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-[9px] tracking-[2px] uppercase text-white/25 mb-0.5">{item.label}</div>
                  <div className="text-sm text-white/70">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {submitted ? (
            <div
              className="flex flex-col items-center justify-center py-16 text-center"
              style={{ border: "0.5px solid rgba(232,201,126,0.2)", background: "rgba(232,201,126,0.03)" }}
            >
              <div className="text-4xl mb-4">✓</div>
              <p className="text-xl text-gold mb-2" style={{ fontFamily: "Georgia, serif" }}>Message Sent!</p>
              <p className="text-sm text-white/40">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] tracking-[2px] uppercase text-white/30 block mb-2">Your Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="John Doe" className="input-dark w-full px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-[9px] tracking-[2px] uppercase text-white/30 block mb-2">Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="john@email.com" className="input-dark w-full px-4 py-3 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-[9px] tracking-[2px] uppercase text-white/30 block mb-2">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="I'm interested in the BMW M5..." rows={6}
                  className="input-dark w-full px-4 py-3 text-sm resize-none"
                />
              </div>
              <button onClick={handleSubmit} className="btn-gold w-full py-4 gap-3 mt-2">
                Send Message →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}