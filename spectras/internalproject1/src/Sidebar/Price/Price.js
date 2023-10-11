import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml-5">
        <h2 className="mt-8 text-[22px] font-[normal] mb-5">Price</h2>

        <label className="block relative cursor-pointer select-none mb-3 pl-[35px]">
          <input
            className="absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value=""
            name="test2"
          />
          <span className="absolute h-5 w-5 bg-[#eee] rounded-[50%] left-0 top-0"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;