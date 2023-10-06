import { AiFillTag } from "react-icons/ai";

const Filters = () => {
    return (
      <div>
        <div className="flex flex-col gap-2">
          <div className="w-[200px] border border-gray-300 rounded-md">
            <div className="m-3">
              <p className="font-serif font-bold">Show only</p>
              <div className="flex">
                <input
                  type="checkbox"
                  className="border border-gray-400 font-2xl"
                />
                <AiFillTag className="ml-2 mt-1" />
                <p className="ml-2">On sale</p>
              </div>
            </div>
          </div>
          <div className="w-[200px]  border border-gray-300 rounded-md">
            <div className="m-3">
              <p className="font-serif font-bold">Price</p>
              <div className="flex">
                <input
                  type="radio"
                  className="border border-gray-400 font-2xl"
                />
                <p className="ml-2">Up to ₹4,500</p>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="border border-gray-400 font-2xl"
                />
                <p className="ml-2">₹4,500 - ₹15,000</p>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="border border-gray-400 font-2xl"
                />
                <p className="ml-2">₹15,000 - ₹45,000</p>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="border border-gray-400 font-2xl"
                />
                <p className="ml-2">Over ₹45000</p>
              </div>
            </div>
          </div>
          <div className="w-[200px]  border border-gray-300 rounded-md">
            <div className="m-3">
              <p className="font-serif font-bold">Seller</p>
              <div className="flex">
                <input
                  type="checkbox"
                  className="border border-gray-400 font-2xl"
                />
                <p className="ml-2">Nike</p>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  className="border border-gray-400 font-2xl"
                />
                <p className="ml-2">GlobalGolf</p>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  className="border border-gray-400 font-2xl"
                />
                <p className="ml-2">Sportiptop</p>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  className="border border-gray-400 font-2xl"
                />
                <p className="ml-2">HerbsPro.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Filters;