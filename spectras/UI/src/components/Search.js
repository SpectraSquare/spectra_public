import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import useFetch from "./useFetch";
import data from "../db/data";

const Search = () => {
  const [search, setSearch] = useState("");
  //  const { data, isPending, error } = useFetch(
  //    "http://localhost:8000/products"
  //  );
  //  if (error) {
  //    return <div>Error: {error}</div>;
  //  } else {
  //    console.log("data loaded", data, isPending, error);
  //  }
  return (
    <div>
      <div className="relative">
        <input
          className="font-serif font-bold border border-gray-300 rounded-3xl py-2 px-9 pr-10 focus:outline-none max-w-md text-slate-600 ml-80"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="absolute top-1/2 -translate-y-1/2 p-4 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-8 mx-[100px] mt-[40px]">
          {data
            .filter((prod) => {
              return search.toLowerCase() === ""
                ? prod
                : prod.title.toLowerCase().includes(search);
            })
            .map((prod) => (
              <div key={prod.id} className="w-[280px] h-[280px] cursor-pointer">
                <img src={prod.img} alt="object-fit" />
                <p>{prod.title}</p>
                <p>{prod.newPrice}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
