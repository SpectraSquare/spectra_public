import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

const Nav = () => {
    return (
      <nav className="flex border-b-2 border-slate-200 p-[20px] z-999 ml-2 ">
        <div className=" container ml-80">
          <input
            type="text"
            className="px-[20px] py-[12px] border-none bg-slate-300 mr-[20px] rounded relative w-[14rem] outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex">
          <a href="#profile">
            <FiHeart className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-slate-800" />
          </a>
          <a href="#profile">
            <AiOutlineShoppingCart className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-slate-800" />
          </a>
          <a href="#profile">
            <AiOutlineUserAdd className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-slate-800" />
          </a>
        </div>
      </nav>
    );
}
 
export default Nav;