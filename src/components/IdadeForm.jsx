import InputIdade from "./InputIdade";
import IconArrow from "../assets/images/icon-arrow.svg";
import { useState } from "react";

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
    const dataAtual = new Date();

    // Verifica se a data é válida
    if (
      inputData.getDate() !== parseInt(dia) ||
      inputData.getMonth() + 1 !== parseInt(mes) ||
      inputData.getFullYear() !== parseInt(ano)
    ) {
      return false; // Data inválida
    }

    // Verifica se a data está no futuro
    if (inputData > dataAtual) {
      return false; // Data futura
    }

    return true;
  };

  const validacao = () => {
    let errosDados = { dia: "", mes: "", ano: "" };
    const anoAtual = new Date().getFullYear();

    if (!dia) errosDados.dia = "Este campo é obrigatório!";
    else if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(dia))
      errosDados.dia = "Deve ser um dia válido!";

    if (!mes) errosDados.mes = "Este campo é obrigatório!";
    else if (!/^(0?[1-9]|1[0-2])$/.test(mes))
      errosDados.mes = "Deve ser um mês válido!";

    if (!ano) errosDados.ano = "Este campo é obrigatório!";
    else if (!/^[0-9]{4}$/.test(ano))
      errosDados.ano = "O ano deve ter 4 dígitos!";
    else if (parseInt(ano) > anoAtual)
      errosDados.ano = "Não pode ser maior que o ano atual!";
    else if (!validarData(dia, mes, ano))
      errosDados.dia = "A data é inválida!";

    setErros(errosDados);
    return Object.values(errosDados).every((x) => x === "");
  };

  const calcularIdade = (dia, mes, ano) => {
    const dataAniversario = new Date(ano, mes - 1, dia);
    const dataAtual = new Date();

    // Se a data de nascimento for maior que a data atual, retorna idade zero
    if (dataAniversario > dataAtual) {
      return {
        anos: 0,
        meses: 0,
        dias: 0,
      };
    }

    let idadeAno = dataAtual.getFullYear() - dataAniversario.getFullYear();
    let idadeMes = dataAtual.getMonth() - dataAniversario.getMonth();
    let idadeDia = dataAtual.getDate() - dataAniversario.getDate();

    // Ajuste para quando o dia é menor que o dia atual (ajustar os meses)
    if (idadeDia < 0) {
      idadeMes--;
      idadeDia += new Date(ano, mes, 0).getDate();
    }

    // Ajuste para quando o mês é menor que o mês atual (ajustar os anos)
    if (idadeMes < 0) {
      idadeAno--;
      idadeMes += 12;
    }

    // Garante que a idade não seja negativa
    if (idadeAno < 0) {
      idadeAno = 0;
      idadeMes = 0;
      idadeDia = 0;
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
          name="dia"
          id="dia"
          label="dia"
          placeholder="DD"
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          error={erros.dia}
        />
        <InputIdade
          type="text"
          name="mes"
          id="mes"
          label="mês"
          placeholder="MM"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
          error={erros.mes}
        />
        <InputIdade
          type="text"
          name="ano"
          id="ano"
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
