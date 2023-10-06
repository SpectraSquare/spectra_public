import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

const Item = () => {
  return (
    <div>
      <section className="m-[20px] border-2 border-slate-200 p-[20px] cursor-pointer rounded">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Shoe"
          className="card-img w-[13rem] mb-[1rem]"
        />
        <div className="card-details"></div>
        <h3 className="card-title mb-1">Shoe</h3>
        <section className="card-reviews mb-1 flex">
          <div className="flex justify-between items-center ">
            <AiFillStar className="rating-star text-yellow-400   " />
            <AiFillStar className="rating-star text-yellow-400  " />
            <AiFillStar className="rating-star text-yellow-400  " />
            <AiFillStar className="rating-star text-yellow-400  " />
            <span className="total-reviews ml-2 font-[0.9rem] ">4</span>
          </div>
        </section>
        <section className="card-price flex items-center gap-2">
          <div className="price flex mb-1">
            <del>$300</del>
            <p className="ml-2">200</p>
          </div>
          <div className="bag">
            <BsFillBagFill className="text-slate-400" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Item;
