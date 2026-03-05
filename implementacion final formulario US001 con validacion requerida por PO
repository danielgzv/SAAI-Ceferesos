import React, { useState } from 'react';

function FormularioSolicitud() {
  const [datos, setDatos] = useState({ nombre: '', numInterno: '' });

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    alert(`Solicitud enviada para: ${datos.nombre}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Solicitud de Información Legal</h2>
      <form onSubmit={enviarFormulario}>
        <div>
          <label>Nombre del recluso: </label>
          <input 
            name="nombre" 
            placeholder="Ej. Juan Pérez" 
            onChange={manejarCambio} 
            required 
          />
        </div>
        <br />
        <div>
          <label>Número de interno: </label>
          <input 
            name="numInterno" 
            type="number"
            placeholder="12345" 
            onChange={manejarCambio} 
            required 
          />
        </div>
        <br />
        <button type="submit">Enviar Solicitud</button>
      </form>
    </div>
  );
}

export default FormularioSolicitud;
