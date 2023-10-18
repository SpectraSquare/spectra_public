import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="cursor-pointer m-5 p-5 border-2 border-solid border-[#ededed]">
        <img src={img} alt={title} className="w-52 mb-4" />
        <div>
          <h3 className="mb-4">{title}</h3>
          <section className="mb-4">
            <div className="flex">
              {star} {star} {star} {star}
            </div>
            <span className="text-[0.9rem]">{reviews}</span>
          </section>
          <section className="flex justify-between items-center">
            <div>
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div>
              <BsFillBagFill className="text-[#535353]" />
            </div>
          </section>
        </div>
      </section> 
    </>
  );
};

export default Card;