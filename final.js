import React, { useState } from 'react';

function SistemaSAAI() {
  const [pestaña, setPestaña] = useState('sistema'); // Menú: actividades, sistema, codigo, modificaciones
  const [datos, setDatos] = useState({ nombre: '', numInterno: '' });
  const [enviado, setEnviado] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Sistema SAAI-CEFERESOS (Entrega Final)</h1>
      
      {/* EL MENÚ SOLICITADO */}
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
        <button onClick={() => setPestaña('actividades')} style={{ padding: '8px', cursor: 'pointer' }}>a) Actividades</button>
        <button onClick={() => setPestaña('sistema')} style={{ padding: '8px', cursor: 'pointer', fontWeight: pestaña === 'sistema' ? 'bold' : 'normal' }}>b) Sistema</button>
        <button onClick={() => setPestaña('codigo')} style={{ padding: '8px', cursor: 'pointer' }}>c) Código Fuente</button>
        <button onClick={() => setPestaña('modificaciones')} style={{ padding: '8px', cursor: 'pointer' }}>d) Modificaciones</button>
      </nav>

      {/* CONTENIDO DENTRO DEL MENÚ */}
      {pestaña === 'actividades' && (
        <div>
          <h3>a) Actividades realizadas en el curso</h3>
          <ul>
            <li>Unidad 1: Configuración del Product Backlog institucional.</li>
            <li>Unidad 2: Estimación de Historias de Usuario (US001-US003) y Roles Scrum.</li>
            <li>Unidad 3: Desarrollo iterativo de Sprints (Fases 1, 2 y 3) en React.</li>
            <li>Unidad 4: Revisiones, bitácoras de modificaciones y cierre del proceso ágil.</li>
          </ul>
        </div>
      )}

      {pestaña === 'sistema' && (
        <div>
          <h3>b) Sistema Implementado: Captura de Solicitudes Legales</h3>
          {!enviado ? (
            <form onSubmit={(e) => { e.preventDefault(); if(datos.numInterno.length < 5) { alert("Error de seguridad: Mínimo 5 dígitos"); return; } setEnviado(true); }}>
              <input name="nombre" placeholder="Nombre del recluso" required onChange={(e) => setDatos({...datos, nombre: e.target.value})} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
              <input name="numInterno" placeholder="Número de interno (5 dígitos)" required onChange={(e) => setDatos({...datos, numInterno: e.target.value})} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
              <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Enviar Solicitud Segura</button>
            </form>
          ) : (
            <div style={{ color: 'green', border: '1px solid green', padding: '15px', borderRadius: '5px' }}>
              <h4>¡Solicitud Procesada Exitosamente!</h4>
              <p>El registro para <strong>{datos.nombre}</strong> fue enviado al Centro de Documentación de la Corte.</p>
              <button onClick={() => setEnviado(false)} style={{ padding: '5px 10px', cursor: 'pointer' }}>Nueva Captura</button>
            </div>
          )}
        </div>
      )}

      {pestaña === 'codigo' && (
        <div>
          <h3>c) Código Fuente</h3>
          <p>El código fuente completo se encuentra versionado y estructurado en el repositorio oficial de GitHub.</p>
          <p><strong>Repositorio:</strong> <a href="https://github.com/danielgzv/SAAI-Ceferesos" target="_blank" rel="noreferrer">Ver Repositorio Abierto</a></p>
        </div>
      )}

      {pestaña === 'modificaciones' && (
        <div>
          <h3>d) Reporte de Modificaciones Realizadas</h3>
          <ul>
            <li><strong>Módulo Estilos:</strong> Ajuste de márgenes y tipografías para el entorno CEFERESO.</li>
            <li><strong>Módulo Lógica:</strong> Transición de alertas de navegador a renderizado condicional adaptativo.</li>
            <li><strong>Módulo Seguridad:</strong> Restricción estricta de longitud para folios de internos.</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SistemaSAAI;
