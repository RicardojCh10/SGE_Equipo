import React, { useState } from 'react';
import './editarperfil.css'

function EditarPerfil() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  

  const handleGuardarCambios = () => {
    
  };

  const handleCancelar = () => {
    
  };

  return (
    
    <div className="editar-perfil-container bg-[#325b87] point">
      <div className="bg-[#325b87]">
        <h1 className="text-3xl font-bold text-center text-white">Editar perfil</h1>
    </div >
      
      <div className="input-group">
        <label className='white'>Contraseña nueva:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="input-group">
        <label className='white'>Confirmar contraseña:</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </div>
      {/* <div className="input-group">
        <label>Correo Electrónico:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div> */}
      <div className="button-group">
        <button className="btn-guardar" onClick={handleGuardarCambios}>Guardar Cambios</button>
        <button className="btn-cancelar" onClick={handleCancelar}>Cancelar</button>
      </div>
    </div>
  );
}

export default EditarPerfil;
