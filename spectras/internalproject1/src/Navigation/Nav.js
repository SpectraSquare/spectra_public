import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="flex justify-around items-center z-[999] ml-8 p-5 ">
      <div>
        <input
          className="relative w-56 mr-5 px-5 py-3 rounded-[5px] border-b-2"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="flex">
        <a href="heart">
          <FiHeart className="w-6 h-6 ml-8" />
        </a>
        <a href="shoppingCart">
          <AiOutlineShoppingCart className="w-6 h-6 ml-8" />
        </a>
        <a href="userAdd">
          <AiOutlineUserAdd className="w-6 h-6 ml-8" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
