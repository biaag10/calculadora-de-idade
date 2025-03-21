import IdadeForm from "./components/IdadeForm";
import Display from "./components/Display";
import { useState } from "react";

const App = () => {
  const [idadeResultado, setIdadeResultado] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
  });

  return (
    <main>
      <IdadeForm setIdadeResultado={setIdadeResultado} />
      <Display
        anos={idadeResultado.anos}
        meses={idadeResultado.meses}
        dias={idadeResultado.dias}
      />
    </main>
  );
};

export default App;
