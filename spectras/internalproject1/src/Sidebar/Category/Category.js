import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="text-[22px] font-[normal] mb-5">Category</h2>

      <div>
        <label className="block relative cursor-pointer select-none mb-3 pl-[35px]">
          <input
            className="absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
          />
          <span className="absolute h-5 w-5 bg-[#eee] rounded-[50%] left-0 top-0 "></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;