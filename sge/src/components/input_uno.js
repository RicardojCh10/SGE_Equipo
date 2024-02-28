import React from 'react'

function input_uno({indicacion, descripcion, dato, value, change}) {
  return (
    <>
      <div className='w-full '>
      <label className="text-[#0D476D] inter-variacion text-xl left-0 " htmlFor="nombre">
            {indicacion}
          </label>
          <input
            id={indicacion}
            type={dato}
            value={value}
            onChange={change}
            className="mt-2 h-4 block w-full border-2 mb-6 rounded-lg border-[#185866] p-3 bg-white"
            placeholder={descripcion}
            name={indicacion}
          />
      </div>
    </>
  )
}

export default input_uno
