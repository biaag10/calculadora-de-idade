import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";

// faz a mudança dos valores, atualização doa dados

const DisplayIdade = ({ label, value }) => {

  // se valor for zero exibe o "--"
  const ehZero = value === 0;

  // useSpring cria uma animação para o número de 0 até o valor fornecido
  const { number } = useSpring({ number: value, from: { number: 0 } });

  return (
    <h2>
      {ehZero ? (
        <span className="text-purple">--</span>
      ) : (
        <animated.span className="text-purple">
          {number.to((n) => Math.floor(n))} {/* arredonda o número para inteiro */}
        </animated.span>

      )}{" "} {/* espaço entre o número e o label */}
      {label}
    </h2>
  );
};

// definição das propTypes
DisplayIdade.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default DisplayIdade;
