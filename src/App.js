import React from 'react';
import IdadeForm from './components/IdadeForm'; 
import Display from './components/Display'; 

const { useState } = React;

const App = () => {
  // declara o estado com 'useState' para armazenar o resultado da idade
  const [idadeResultado, setIdadeResultado] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
  });

  // cria o componente de renderização
  return React.createElement(
    'main', // nome da tag HTML
    null, // sem propriedades para 'main'
    React.createElement(IdadeForm, { setIdadeResultado: setIdadeResultado }), // cria o componente 'IdadeForm'
    React.createElement(Display, { // criao componente 'Display'
      anos: idadeResultado.anos,
      meses: idadeResultado.meses,
      dias: idadeResultado.dias
    })
  );
};

export default App;
