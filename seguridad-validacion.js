import React, { useState } from 'react';

function FormularioSolicitud() {
  // Estado para capturar los datos (US001)
  const [datos, setDatos] = useState({ nombre: '', numInterno: '' });

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    
    // AJUSTE SPRINT 2: Validación de seguridad básica
    if (datos.numInterno.length < 5) {
      alert("Error: El número de interno debe tener al menos 5 dígitos.");
      return;
    }
    
    alert(`Solicitud enviada para: ${datos.nombre}. Folio de seguridad generado.`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Solicitud de Información Legal (Sprint 2)</h2>
      <form onSubmit={enviarFormulario}>
        <input 
          name="nombre" 
          placeholder="Nombre del recluso" 
          onChange={manejarCambio} 
          required 
        />
        <br /><br />
        <input 
          name="numInterno" 
          placeholder="Número de interno (5 dígitos)" 
          onChange={manejarCambio} 
          required 
        />
        <br /><br />
        <button type="submit">Enviar Solicitud Segura</button>
      </form>
    </div>
  );
}

export default FormularioSolicitud;
