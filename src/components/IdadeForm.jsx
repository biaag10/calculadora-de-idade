import InputIdade from "./InputIdade";
import IconArrow from "../assets/images/icon-arrow.svg";
import { useState } from "react";
// import PropTypes from "prop-types";

// IdadeForm.propTypes = {
//   setIdadeResultado: PropTypes.func.isRequired,
// };

const IdadeForm = ({ setIdadeResultado }) => {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [erros, setErros] = useState({ dia: "", mes: "", ano: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validacao()) {
      const resultado = calcularIdade(dia, mes, ano);

      setIdadeResultado(resultado);
    }
  };

  const validarData = (dia, mes, ano) => {
    const inputData = new Date(ano, mes - 1, dia);
    if (
      inputData.getDate() !== parseInt(dia) ||
      inputData.getMonth() + 1 !== parseInt(mes) ||
      inputData.getFullYear() !== parseInt(ano)
    ) {
      return false;
    }
    return true;
  };

  const validacao = () => {
    let errosDados = { dia: "", mes: "", ano: "" };
    const currentYear = new Date().getFullYear();

    if (!dia) errosDados.dia = "Este campo é obrigatório!";
    else if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(dia))
      errosDados.dia = "Deve ser um dia válido!";

    if (!mes) errosDados.mes = "Este campo é obrigatório!";
    else if (!/^(0?[1-9]|1[0-2])$/.test(mes))
      errosDados.mes = "Deve ser um mês válido!";

    if (!ano) errosDados.ano = "Este campo é obrigatório!";
    else if (!/^[0-9]{4}$/.test(ano))
      errosDados.year = "O ano deve ter 4 dígitos!";
    else if (parseInt(ano) > currentYear)
      errosDados.year =  "Nao pode ser maior que o ano atual!";
    else if (!validarData(dia, mes, ano))
      errosDados.day = "A data é invalida!";

    setErros(errosDados);
    return Object.values(errosDados).every((x) => x === "");
  };

  const calcularIdade = (dia, mes, ano) => {
    const dataAniversario = new Date(ano, mes - 1, dia);
    const currentDate = new Date();

    let idadeAno = currentDate.getFullYear() - dataAniversario.getFullYear();
    let idadeMes = currentDate.getMonth() - dataAniversario.getMonth();
    let idadeDia = currentDate.getDate() - dataAniversario.getDate();

    if (idadeDia < 0) {
      idadeMes--;
      idadeDia += new Date(ano, mes, 0).getDate();
    }

    if (idadeMes < 0) {
      idadeAno--;
      idadeMes += 12;
    }

    return {
      anos: idadeAno,
      meses: idadeMes,
      dias: idadeDia,
    };
  };

  return (
    <form action="#" method="post" id="dateForm" onSubmit={handleSubmit}>
      <div className="flex gap-4 text-smokey-grey font-bold sm:gap-8">
        <InputIdade
          type="text"
          name="day"
          id="day"
          label="dia"
          placeholder="DD"
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          error={erros.day}
        />
        <InputIdade
          type="text"
          name="month"
          id="month"
          label="mes"
          placeholder="MM"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
          error={erros.mes}
        />
        <InputIdade
          type="text"
          name="year"
          id="year"
          label="ano"
          placeholder="AAAA"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          error={erros.ano}
        />
      </div>
      <button type="submit" className="btn">
        <img src={IconArrow} alt="submit" className="h-6 lg:h-11" />
      </button>
    </form>
  );
};

export default IdadeForm;
