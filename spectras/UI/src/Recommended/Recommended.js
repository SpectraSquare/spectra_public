const Recommended = () => {
  return (
    <div>
      <h2 className="ml-[20rem] mb-[20px] mt-[20px] font-3xl font-serif font-bold">Recommended</h2>
      <div className="recommended-btns flex ml-[20rem]">
        <button className="btns px-[20px] py-[10px] mr-[6px] bg-transparent border-[0.6px] rounded-sm text-slate-800 cursor-pointer">All Products</button>
        <button className="btns px-[20px] py-[10px] mr-[6px] bg-transparent border-[0.6px] rounded-sm text-slate-800 cursor-pointer">Nike</button>
        <button className="btns px-[20px] py-[10px] mr-[6px] bg-transparent border-[0.6px] rounded-sm text-slate-800 cursor-pointer">Adidas</button>
        <button className="btns px-[20px] py-[10px] mr-[6px] bg-transparent border-[0.6px] rounded-sm text-slate-800 cursor-pointer">Puma</button>
        <button className="btns px-[20px] py-[10px] mr-[6px] bg-transparent border-[0.6px] rounded-sm text-slate-800 cursor-pointer">All Products</button>
      </div>
    </div>
  );
};

export default Recommended;
