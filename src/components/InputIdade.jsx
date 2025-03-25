import PropTypes from "prop-types";

// entrada de dados

const InputIdade = ({ name, label, placeholder, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <span className="text-[14px] italic font-normal text-light-red">
          {error}
        </span>
      )}
    </div>
  );
};

// definição das propTypes
InputIdade.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default InputIdade;
