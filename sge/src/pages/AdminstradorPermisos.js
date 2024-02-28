import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';


function Permisos() {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-3xl font-bold text-center">Administrador Permisos</h1>
      <div className="mt-5 mx-auto max-w-2xl">
    <button
        type="button"
        className="block mx-auto bg-[#325b87] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
        Agregar nuevo Docente
    </button>
</div>

<div className="mt-5 mx-20 overflow-auto h-250 border-separate border border-gray-300 bg-gray-200 rounded-t-lg items-center">
    <table className="w-full table-auto bg-gray-200 rounded-t-lg">
        <thead className="text-center text-white bg-[#325b87]">
            <tr>
                <th className="p-2">ID</th>
                <th className="p-2">Nomina</th>
                <th className="p-2">Directivo</th>
                <th className="p-2">Carrera</th>
                <th className="p-2">Permisos</th>
                <th className="p-2">Acciones</th>
            </tr>
        </thead>
        <tbody className="text-center bg-white">
            {[...Array(10)].map((_, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>Nomina {index + 1}</td>
                    <td>Docente {index + 1}</td>
                    <td>Ingenieria</td>
                    <td><form class="max-w-sm mx-auto">
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Seleccionar</option>
                      <option value="US">Permiso 1</option>
                      <option value="CA">Permiso 2</option>
                      <option value="FR">Permiso 3</option>
                      <option value="DE">Permiso 4</option>
                    </select>
</form></td>
                    <td className="pt-2 flex justify-center space-x-10">
                        <button
                            type="button"
                            className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
                        >
                            <FaTrash />
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                        >
                            <FaEdit />
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
    </div>

  );
}

export default Permisos;