import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="mt-8 text-[22px] font-[normal] mb-5">Colors</h2>
        <label className="block relative cursor-pointer select-none mb-3 pl-[35px]">
          <input
            className="absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value=""
            name="test1"
          />
          <span className="absolute h-5 w-5 bg-[#eee] rounded-[50%] left-0 top-0 bg-gradient-to-r from-blue-500 to-red-500"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="gold"
          title="gold"
          name="test1"
          color="gold"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="block relative cursor-pointer select-none mb-3 pl-[35px]">
          <input
            className="absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value="silver"
            name="test1"
          />
          <span
            className="absolute h-5 w-5 bg-[#eee] rounded-[50%] left-0 top-0"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          Silver
        </label>
      </div>
    </>
  );
};

export default Colors;