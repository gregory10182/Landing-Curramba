import CardProducto from "./cardProducto";

export default function Productos() {
  return (
    <section id="productos" className="w-full h-max my-6 px-6">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Nuestros Productos
      </h2>
      <div className="flex flex-wrap flex-col lg:flex-row items-center justify-around gap-8">
        <CardProducto
          nombre={"Buñuelos"}
          descripcion={
            "Masa de queso, maizena y almidón de mandioca. Se cocina frito y es un alimento básico en Colombia durante la temporada navideña"
          }
        />
        <CardProducto
          nombre={"Pan de Bono"}
          descripcion={
            "Masa de queso, maizena y almidón de mandioca. Se cocina al horno y es un pan muy popular en Colombia"
          }
        />
        <CardProducto
          nombre={"Deditos"}
          descripcion={
            "Masa de harina de trigo, rellena de queso sólido blanco costeño y aveces bocadillo"
          }
        />
        <CardProducto
          nombre={"Empanadas"}
          descripcion={"Masa de harina de trigo, rellena con carnes o queso"}
        />
      </div>
    </section>
  );
}
