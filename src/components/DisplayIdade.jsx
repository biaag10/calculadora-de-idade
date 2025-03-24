import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";

// faz a mudança dos valores, atualização

const DisplayIdade = ({ label, value }) => {
  const ehZero = value === 0;
  const { number } = useSpring({ number: value, from: { number: 0 } });

  return (
    <h2>
      {ehZero ? (
        <span className="text-purple">--</span>
      ) : (
        <animated.span className="text-purple">
          {number.to((n) => Math.floor(n))}
        </animated.span>
      )}{" "}
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
