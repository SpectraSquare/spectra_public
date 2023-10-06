import Navbar from "./Navbar";
import Filters from "./Filters";
import Search from "./Search";


const ProductListPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-row">
        <div className="flex flex-row gap-3 m-5">
          <Filters />
        </div>
        <div className="m-3">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;