import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function CrudDocente() {
    return (
        <>
            <div className="bg-[#325b87]">
                <h1 className="text-3xl font-bold text-center text-white">Crud Docente</h1>
            </div>

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
                            <th className="p-2">Docente</th>
                            <th className="p-2">Carrera</th>
                            <th className="p-2">Proyectos</th>
                            <th className="p-2">Estatus</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-center bg-white">
                        {[...Array(10)].map((_, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>Nomina {index + 1}</td>
                                <td>Docente {index + 1}</td>
                                <td>Desarrollo de Software</td>
                                <td>Proyectos {index + 1}</td>
                                <td>Activo</td>
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
        </>
    );
}

export default CrudDocente;
