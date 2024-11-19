"use client";
import { useState } from "react";
import Image from "next/image.js";
import Modal from "./modal.js";

export default function CardProducto({ nombre, descripcion }) {
  let img = nombre.toLowerCase().replace(/ /gi, "");
  let [modal, setModal] = useState(false);
  let [click, setClick] = useState(false);
  let toggleModal = () => {
    setModal(!modal);
  };
  let toggleClick = () => {
    setClick(!click);
    console.log(click);
  };
  return (
    <div
      className="group w-80 h-72 shadow-md rounded-lg text-secondary [perspective:1000px]"
      onClick={() => toggleClick()}
    >
      <div
        style={click ? { transform: "rotateY(180deg)" } : {}}
        className={`relative w-full h-full ${
          click ? "[transform: rotateY(180deg)]" : ""
        } transition-all duration-500 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)]`}
      >
        <div className="absolute inset-0 w-full h-full [backface-visibility: hidden]">
          <div className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <Image
              className="w-full h-full object-cover rounded-lg shadow-xl shadow-secondary/40"
              width={400}
              height={400}
              src={`/productos/${img}.jpg`}
              alt={nombre}
            />
          </div>
          <div className="absolute bottom-0 inset-0 h-full w-full rounded-lg p-4 bg-secondary/80 text-secondary ">
            <p className="absolute bottom-12 left-1/2 transform -translate-x-1/2 font-bold text-xl text-center">
              {nombre}
            </p>
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg text-center">
              Ver mas
            </p>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black/40 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="w-full h-full px-4 py-2 rounded-lg">
            <div className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <Image
                className="w-full h-full object-cover rounded-lg shadow-xl shadow-secondary/40"
                width={400}
                height={400}
                src={`/productos/${img}.jpg`}
                alt={nombre}
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-lg p-4 bg-secondary/80 text-secondary ">
              <p className="font-bold text-xl text-center">{nombre}</p>
              <p className="text-lg mt-4">{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
