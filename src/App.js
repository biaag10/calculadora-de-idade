import React from 'react';
import IdadeForm from './components/IdadeForm'; 
import Display from './components/Display'; 

const { useState } = React;

const App = () => {
  // Declaração do estado com 'useState' para armazenar o resultado da idade
  const [idadeResultado, setIdadeResultado] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
  });

  // criação do componente de renderização
  return React.createElement(
    'main', // nome da tag HTML
    null, // sem propriedades para 'main'
    React.createElement(IdadeForm, { setIdadeResultado: setIdadeResultado }), // criação do componente 'IdadeForm'
    React.createElement(Display, { // criação do componente 'Display'
      anos: idadeResultado.anos,
      meses: idadeResultado.meses,
      dias: idadeResultado.dias
    })
  );
};

export default App;
