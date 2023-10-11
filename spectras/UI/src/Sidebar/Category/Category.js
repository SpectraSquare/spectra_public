import "./Category.css";
const Category = (handleChange) => {
  return (
    <div>
      <h2 className="sidebar-title text-2xl mb-[20px]">Category</h2>
      <div>
        <label className="sidebar-label-container ">
          <input type="radio" onChange={handleChange} value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <input
          handleChange={handleChange}
          name="test"
          value="sneakers"
          title="Sneakers"
        />
        <input
          handleChange={handleChange}
          name="test"
          value="flats"
          title="Flats"
        />
        <input
          handleChange={handleChange}
          name="test"
          value="sandals"
          title="Sandals"
        />
        <input
          handleChange={handleChange}
          name="test"
          value="heels"
          title="Heels"
        />
      </div>
    </div>
  );
}

export default Category;
