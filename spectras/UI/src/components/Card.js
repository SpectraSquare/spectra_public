const Card = ({ id, title, index, bgColor, image, description }) => {
  return (
    <li
      key={id}
      className={`sticky top-0`}
      id={id}
      style={{
        paddingTop: `calc(${index} * 3em)`,
      }}
    >
      <div
        className={`card-body p-4 rounded-2xl shadow-md ${bgColor}  md:w-96 lg:w-96`}
      >
        <div className="lg:flex-none">
          <div className="justify-center items-center">
            <h3 className="text-center font-semibold text-xl mb-2 ">{title}</h3>
          </div>
          <div className="gap-8 grid grid-cols-2 items-center p-6">
            <div className="">
              <img
                src={image}
                alt={title}
                className="object-cover rounded-lg "
              />
            </div>
            <div className="">
              <div className="">
                <p className="mb-4 text-sm md:text-base lg:text-lg">
                  {description}
                </p>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
