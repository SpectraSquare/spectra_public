import { FaSpinner } from "react-icons/fa";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import Wishlist from "./Wishlist";
import { AiOutlineHeart } from "react-icons/ai";

const WishlistComponent = () => {
    
  const { data, isPending, error } = useFetch("http://localhost:8000/products");
  if (error) {
    return <div>Error: {error}</div>;
  } else {
    console.log("data loaded", data, isPending, error);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="mt-40 font-bold text-pink-400 text-4xl">
            My Wishlist
          </h1>
          <AiOutlineHeart className=" text-pink-400 text-4xl " />
        </div>
        {isPending ? (
          <div>
            <FaSpinner />
          </div>
        ) : data?.length !== 0 ? (
          data.map((wishlist) => (
            <Wishlist
              key={wishlist.id}
              pname={wishlist.pname}
              pimage={wishlist.pimage}
              pprice={wishlist.pprice}
            ></Wishlist>
          ))
        ) : (
          <div>
            <FaSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistComponent;