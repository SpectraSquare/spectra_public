import Button from "../components/Button";

const Recommend = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="text-base ml-80 my-5">Recommended</h2>
        <div className="flex ml-80">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommend;
