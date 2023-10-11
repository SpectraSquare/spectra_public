import { GiShoppingCart } from "react-icons/gi";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({handleChange}) => {
  return (
    <div>
      <section className="w-[15%] fixed h-full border-r-neutral-200 z-[3] flex flex-col items-center border-r-2 border-solid overflow-auto">
        <div className=" mb-16">
          <h1 className="mt-[1.3rem]">
            <GiShoppingCart />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </div>
  );
}
 
export default Sidebar;