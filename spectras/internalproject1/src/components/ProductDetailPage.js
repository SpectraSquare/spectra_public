import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../db/data";
import Nav from "../Navigation/Nav";

function ProductDetailPage() {
  const { id } = useParams();
   const [quantity, setQuantity] = useState(1);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

   const handleQuantityChange = (e) => {
     setQuantity(parseInt(e.target.value));
   };

  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center">
        <div className="h-[590px] w-[590px] flex justify-center items-center hover:scale-150 cursor-pointer">
          <img className="h-96 w-96 " src={product.img} alt={product.title} />
        </div>
        <div className="ml-10 ">
          <div className="">
            <h1 className="font-bold text-3xl">{product.title}</h1>
          </div>
          <p>{product.description}</p>
          <div>
            <del>{product.prevPrice}</del>
            <p>${product.newPrice}</p>
          </div>

          <div className="product-ratings">
            <div className="flex">
              {product.star} {product.star} {product.star} {product.star}
            </div>
            <p>{product.reviews}</p>
          </div>
          <div className="">
            <label>Quantity:</label>
            <input
              className="w-10"
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="mt-10 grid gap-2 w-[130px]">
            <button className="bg-[#84d52e] font-semibold text-white rounded text-base cursor-pointer shadow-[0_0_4px_rgba(0,0,0,0.2)] transition-all duration-[0.5s] ease-[ease-in-out] px-5 py-2.5 hover:bg-[#111] hover:shadow-[0_0_6px_rgba(0,0,0,0.4)]">
              Add to Cart
            </button>
            <button className="bg-[#2ed573] font-semibold text-white rounded text-base cursor-pointer shadow-[0_0_4px_rgba(0,0,0,0.2)] transition-all duration-[0.5s] ease-[ease-in-out] px-5 py-2.5 hover:bg-[#111] hover:shadow-[0_0_6px_rgba(0,0,0,0.4)]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-40 ml-20">
        <h2 className="text-xl mb-2.5">Related products</h2>
        <div className="grid grid-cols-[repeat(4,1fr)]">
          {products.map((product) => (
            <div className="w-[290px] h-[300px]" key={product.id}>
              <img
                className=" w-full h-[200px] object-cover"
                src={product.img}
                alt={product.title}
              />
              <h4 className="text-lg mt-2.5">{product.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;