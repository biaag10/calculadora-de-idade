import React from 'react';
import IdadeForm from './components/IdadeForm'; 
import Display from './components/Display'; 

const { useState } = React;

// Componente 'App'
const App = () => {
  // Declarando o estado com 'useState' para armazenar o resultado da idade
  const [idadeResultado, setIdadeResultado] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
  });

  // Criando o componente de renderização
  return React.createElement(
    'main', // Nome da tag HTML
    null, // Não há propriedades para o 'main'
    React.createElement(IdadeForm, { setIdadeResultado: setIdadeResultado }), // Criando o componente 'IdadeForm'
    React.createElement(Display, { // Criando o componente 'Display'
      anos: idadeResultado.anos,
      meses: idadeResultado.meses,
      dias: idadeResultado.dias
    })
  );
};

// Exportando o componente 'App' como default
export default App;
