import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-fit mx-0 px-4 py-2 md:px-8 md:py-4 min-w-full bg-secondary text-secondary">
      <Link href="/" className="font-bold text-3xl md:text-5xl font-serif">
        Curramba
      </Link>
      <div>
        <Link href="/productos" className="p-2 md:text-lg">
          Productos
        </Link>
        <Link href="/contacto" className="p-2 md:text-lg">
          Contacto
        </Link>
      </div>
    </nav>
  );
}
