import React from 'react';
import './formulario.css'

const Formulario = () => {
  return (
    <div className="col-md-5 mt-2">
      <div className="card">
        <div className="card-header">Formulario</div>
        <div className="card-body">
          <form action="">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Num. Matrícula:</span>
              <input 
                type="number" 
                className="form-control" 
                placeholder="Ingresa tu matrícula" 
                aria-label="Número de matrícula" 
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre:</span>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Ingresa tu nombre" 
                aria-label="Nombre"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Apellido:</span>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Ingresa tu apellido" 
                aria-label="Apellido"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Teléfono:</span>
              <input 
                type="tel" 
                className="form-control" 
                placeholder="Ingresa tu teléfono" 
                aria-label="Teléfono" 
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Correo:</span>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Ingresa tu correo" 
                aria-label="Correo" 
              />
            </div>

            <div>
              <button type="submit" className="btn btn-success">Enviar</button>
            </div>

          </form>
          <button type="reset" className="btn btn-primary mt-2">Restablecer</button>
        </div>
      </div>
    </div>
  );
}

export default Formulario;