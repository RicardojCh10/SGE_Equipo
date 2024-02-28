import React from "react";
import Logo from "../img/ut_logo.png";
import Input_uno from "../components/input_uno";
import { Link } from "react";
function Login() {
  return (
    <>
      <div className="bg-[#325B87]  h-[780px] bottom-0 mb-0 ">
        <div className="bg-[#EFF1F0] h-full w-[70%] left-0 p-12 bottom-0 ">
          <div className="h-full w-full m-auto items-center bg-white p-10 rounded-xl shadow-xl">
            <div className="h-[45%] w-[45%] m-auto">
              <img src={Logo} alt="ut_logo" />
            </div>
            <div className="items-center m-auto text-center">
              <h1 className="montserrat-alternates-semibold text-3xl font-bold m-0 pt-5">
                Sistema de Gestión de Estadías
              </h1>
              <h2 className="inter-variacion text-2xl ">
                Identíficate con tu correo y contraseña
              </h2>
              <div className="mx-32 my-10">
                <Input_uno
                  indicacion="Correo"
                  tipo="email"
                  descripcion="Ingresa tu correo institucional"
                />
                <Input_uno
                  indicacion="Contraseña"
                  tipo="password"
                  descripcion="Ingresa tu contraseña"
                />
                <button className="items-center bg-[#5FC8BE] rounded-xl  font-bold h-full w-[50%] px-4 text-[#18496A]">
                  INGRESAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
