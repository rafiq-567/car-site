import Image from "next/image";
import Hero from "./components/Hero";
import CarListing from "./components/CarListing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <CarListing />
      <Contact />
      <h1>Hello World!</h1>
    </div>
  );
}
