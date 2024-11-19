import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full h-max py-20 flex flex-wrap items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-primary font-bold text-4xl  mb-6">
              Descubre el Auténtico Sabor de productos Colombianos
            </h1>
            <p className="text-tertiary text-xl mb-8">
              Delicias tradicionales de la gastronomia Colombiana, directos a tu
              puerta. ¡Explora nuestra selección de productos y tradicion!
            </p>
            <Link
              href="#productos"
              className="px-6 py-3 bg-secondary text-secondary font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
