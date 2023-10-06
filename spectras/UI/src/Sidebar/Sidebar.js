import { GiShoppingCart } from "react-icons/gi";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = (handleChange) => {
    return (
      <div>
        <section className="sidebar flex flex-col items-center w-[15%] fixed h-[100%] border-r-2 border-gray-300 z-3">
          <div className="logo-container mb-[4rem]">
            <h1 className="mt-[rem]">
              <GiShoppingCart />
            </h1>
          </div>
          <Category handleChange = {handleChange} />
          <Price handleChange = {handleChange} />
          <Colors handleChange = {handleChange} />
        </section>
      </div>
    );
}
 
export default Sidebar;