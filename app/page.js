import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Productos from "./components/productos";

export default function Home() {
  return (
    <div className="flex justify-center content-start flex-wrap min-h-screen h-max pb-12 bg-primary">
      <Navbar />
      <Hero />
      <Productos />
    </div>
  );
}
