import { useSpring, animated } from "@react-spring/web";  // Importando a biblioteca de animação
import PropTypes from "prop-types";  // Importando PropTypes para validação de propriedades

const DisplayIdade = ({ label, value }) => {
  const ehZero = value === 0;

  // usa useSpring para criar uma animação do número
  // resolver o erro para conseguir mostrar o objeto em tela, react so recebe os numeros para exibir com isso
  const { number } = useSpring({
    number: value,  // valor final da animação
    from: { number: 0 },  // valor inicial (começa do zero)
    config: { tension: 200, friction: 20 },  // Ccnfiguração da animação
  });

  return (
    <h2>
      {ehZero ? (
        <span className="text-purple">--</span>  // Exibe '--' se o valor for zero
      ) : (
        <animated.span className="text-purple">
          {number.to((n) => Math.floor(n))}  
        </animated.span>
      )}
      {" "}
      {label}  
    </h2>
  );
};

// Definição das propTypes
DisplayIdade.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default DisplayIdade;
