import React, { useState } from 'react';

function FormularioSolicitud() {
  const [datos, setDatos] = useState({ nombre: '', numInterno: '' });
  const [enviado, setEnviado] = useState(false); // Nuevo estado para la Fase 3

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    
    if (datos.numInterno.length < 5) {
      alert("Error: El número de interno debe tener al menos 5 dígitos.");
      return;
    }
    
    // Simulación de envío exitoso
    setEnviado(true); 
    console.log("Datos enviados al servidor ficticio:", datos);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '400px' }}>
      <h2>Sistema SAAI-CEFERESOS (Fase 3)</h2>
      
      {!enviado ? (
        <form onSubmit={enviarFormulario}>
          <p>Ingrese los datos para la solicitud legal:</p>
          <input 
            name="nombre" 
            placeholder="Nombre del recluso" 
            onChange={manejarCambio} 
            required 
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <input 
            name="numInterno" 
            placeholder="Número de interno (5 dígitos)" 
            onChange={manejarCambio} 
            required 
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <button type="submit" style={{ cursor: 'pointer' }}>Enviar Solicitud Final</button>
        </form>
      ) : (
        <div style={{ color: 'green', border: '1px solid green', padding: '10px' }}>
          <h3>¡Solicitud Procesada!</h3>
          <p>El registro para <strong>{datos.nombre}</strong> ha sido enviado al Centro de Documentación con éxito.</p>
          <button onClick={() => setEnviado(false)}>Nueva Solicitud</button>
        </div>
      )}
    </div>
  );
}

export default FormularioSolicitud;
