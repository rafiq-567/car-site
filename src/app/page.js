import Image from "next/image";
import Hero from "./components/Hero";
import CarListing from "./components/CarListing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <CarListing />
      <Contact />
      <Footer />
    </div>
  );
}
