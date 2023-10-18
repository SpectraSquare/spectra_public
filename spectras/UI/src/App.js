// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import WishlistComponent from "./components/WishlistComponent";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import Email from "./components/Email";
// import ProductListPage from "./components/ProductList";
import Recommended from "./Recommended/Recommended";
import Nav from "./Navigattion/Nav";
import Products from "./Products/products";
import Sidebar from "./Sidebar/Sidebar.js";
import { useState } from "react";

// database
import products from "./db/data"
import Item from "./components/Item";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //------------------Input Filter-----------------

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //------------------Radio Filter-----------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //------------------Button Filter-----------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query){
    let filteredProducts = products;

    //Filtering input items
    if(query){
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter((
        {category, color, company, newPrice, title}) => 
        category === selected  ||
        color === selected || 
        company === selected || 
        newPrice === selected || 
        title === selected
      );
    } 
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Item
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  // const result = filteredData(products, selectedCategory, query)
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       {/* <Route path="/" element={<Home />}></Route>
    //       <Route path="/register" element={<Register />}></Route>
    //       <Route path="/login" element={<Login />}></Route> */}
    //       {/* <Route path="/" element={<ProductListPage />}></Route> */}
    //       {/* <Route path="/" element={<WishlistComponent />}></Route> */}
    //        {/* <Route path="/" element={<Email />}></Route> */}
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
