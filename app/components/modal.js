export default function Modal({ nombre, img, descripcion, toggleModal }) {
  return (
    <div className="fixed h-3/6 w-80 top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-secondary rounded-lg">
      <div
        style={{ backgroundImage: `url('/productos/${img}.jpg')` }}
        className="w-full h-2/5 bg-cover bg-center rounded-t-md"
      ></div>
      <div className="w-full h-3/5 px-4 py-2 bg-secondary rounded-b-md relative">
        <p className="font-bold text-lg">{nombre}</p>
        <p className="text-md">{descripcion}</p>
        <button
          className="absolute left-1/2 transform -translate-x-1/2 bottom-6 w-4/6 px-6 py-3 bg-primary text-primary border-tertiary border-2 font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-300"
          onClick={() => toggleModal()}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
