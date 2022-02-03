const Input = ({ error, value, setValue, text, type, placeholder }) => {
  return (
    <div className="input-container">
      <span>{text}</span>
      <input
        className={`input ${error && "pw-error"}`}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
