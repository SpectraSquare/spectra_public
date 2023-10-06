import { useState } from "react";

const Wishlist = ({ pname, pimage, pprice }) => {

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
      setIsAddedToCart(!isAddedToCart);
    };
    
  return (
    <div className="bg-slate-100 border-b-2">
      <div className="flex flex-row">
        <div className="mb-9 flex-none items-center ">
          <img src={pimage} alt={pname} className="w-16 h-16 mr-4" />
          <div>
            <p className="text-xl font-semibold">{pname}</p>
            <p className="text-gray-400">{pprice}</p>
          </div>
        </div>
        <div className=" flex items-center">
          <button
            className={`${
              isAddedToCart ? "bg-red-500" : "bg-green-500"
            } text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-opacity-80 hover:bg-slate-800`}
            onClick={handleAddToCart}
          >
            {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
      {/* Add a button to remove the item from the wishlist */}
      {/* You can implement this functionality separately */}
    </div>
  );
};

export default Wishlist;
