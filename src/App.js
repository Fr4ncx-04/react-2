import React from 'react';
import './App.css';
import Formulario from './Components/formulario.jsx';
import ListaEstudiantes from './Components/lista.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulario y Lista de Estudiantes</h1>
        <div className="container">
          <Formulario />  {}
          <ListaEstudiantes />  {}
        </div>
      </header>
    </div>
  );
}

export default App;
