import React from "react";
import Navbar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";
import Grafic from '../img/grafic.png'
function DashAlumno() {
  return (
    <>
      <div className="bg-[#F8F8F8] h-full">
        <Navbar></Navbar>
        <Title titulo="Sistema de Gestión de Estadías"></Title>
        <div className="flex flex-row m-auto mx-20 mt-7 h-full gap-8 inter-variacion ">
          <div className="h-full w-[25%]">
            <div className="bg-white h-[245px] w-full text-left mb-8  p-4 rounded-xl shadow-xl">
              <h4 className="text-[#010D82] pb-2 text-xl montserrat-alternates-regular-italic">
                Asesor Académico
              </h4>
              <p className=" pb-3 text-lg">Rafael Villegas</p>
              <p className=" pb-3 text-lg">rvillegas@utcancun.edu.mx</p>
            </div>
            <div className="bg-white h-[245px] text-left mb-8 p-4 rounded-xl w-full shadow-xl">
              <h4 className="text-[#010D82] pb-2 text-xl montserrat-alternates-regular-italic">
                Calendario
              </h4>
              <p className=" pb-3 text-lg">Citas próximas</p>
              <p className=" pb-3 text-lg">Tareas pendientes</p>
            </div>
          </div>
          <div className="h-full w-[25%] ">
            <div className="bg-white h-[245px] w-full text-left mb-8  p-4 rounded-xl shadow-xl">
              <h4 className="text-[#010D82] pb-2 text-xl montserrat-alternates-regular-italic">
                Estatus del proyecto
              </h4>
              <p className=" pb-3 text-lg">Comentarios</p>
              <p className=" pb-3 text-lg">Votos</p>
            </div>
            <div className="bg-white h-[245px] text-left mb-8 p-4 rounded-xl w-full shadow-xl">
              <h4 className="text-[#010D82] pb-2 text-xl montserrat-alternates-regular-italic">
                Documentos
              </h4>
              <p className=" pb-3 text-lg">Rafael Villegas</p>
              <p className=" pb-3 text-lg">rvillegas@utcancun.edu.mx</p>
            </div>
          </div>
          <div className="bg-white h-[520px]  w-[25%]  text-left mb-8  p-4 rounded-xl shadow-xl">
            <img src={Grafic} alt="Grafica" className=" h-[50%] w-[98%] p-3"/>
            <h4 className="text-[#010D82] pb-2 text-xl montserrat-alternates-regular-italic">
              Avances del proyecto
            </h4>
            <p className=" pb-3 text-lg">Realizado </p>
            <p className=" pb-3 text-lg">Por complementar</p>
          </div>
          <div className="bg-white h-[520px]  w-[25%] text-left mb-8  p-4 rounded-xl shadow-xl">
            <h4 className="text-[#010D82] pb-2 text-xl montserrat-alternates-regular-italic">
              Tareas próximas faltantes
            </h4>
            <p className=" pb-3 text-lg">
              Corrección de objetivo principal
              <input type="checkbox" />
            </p>
            <p className=" pb-3 text-lg">
              Corrección de título
              <input type="checkbox" />
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DashAlumno;
