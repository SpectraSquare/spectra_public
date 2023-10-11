const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="block relative cursor-pointer select-none mb-3 pl-[35px]">
      <input
        className="absolute opacity-0 cursor-pointer"
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
      />
      <span
        className="absolute h-5 w-5 bg-[#eee] rounded-[50%] left-0 top-0"
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;