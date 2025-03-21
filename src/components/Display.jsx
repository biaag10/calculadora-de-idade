import DisplayIdade from "./DisplayIdade";
import PropTypes from "prop-types";

const Display = ({ anos, meses, dias }) => {
  return (
    <section className="flex flex-col pt-16 text-[56px] italic font-extrabold leading-[1.1em] tracking-[-0.02em] lg:pt-12 lg:text-[104px]">
      <DisplayIdade label="anos" value={anos} />
      <DisplayIdade label="meses" value={meses} />
      <DisplayIdade label="dias" value={dias} />
    </section>
  );
};

// Definição das propTypes
Display.propTypes = {
  anos: PropTypes.number.isRequired,
  meses: PropTypes.number.isRequired,
  dias: PropTypes.number.isRequired,
};

export default Display;
