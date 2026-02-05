import React, { useState } from 'react';

function FormularioSolicitud() {
  // Estado para capturar los datos (US001)
  const [datos, setDatos] = useState({ nombre: '', numInterno: '' });

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Solicitud de Información Legal</h2>
      <input 
        name="nombre" 
        placeholder="Nombre del recluso" 
        onChange={manejarCambio} 
      />
      <input 
        name="numInterno" 
        placeholder="Número de interno" 
        onChange={manejarCambio} 
      />
      <button onClick={() => alert('Solicitud enviada')}>Enviar</button>
    </div>
  );
}

export default FormularioSolicitud;