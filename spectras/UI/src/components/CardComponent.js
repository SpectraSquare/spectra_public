import Card from "./Card";

const CardComponent = () => {
  const cardData = [
    {
      id: "card1",
      title: "Card 1",
      index: 1,
      bgColor: "bg-blue-500",
      image:
        "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Description for Project 1",
    },
    {
      id: "card2",
      title: "Card 2",
      index: 2,
      bgColor: "bg-green-500",
      image:
        "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Description for Project 2",
    },
    {
      id: "card3",
      title: "Card 3",
      index: 3,
      bgColor: "bg-purple-500",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Description for Project 3",
    },
    {
      id: "card4",
      title: "Card 4",
      index: 4,
      bgColor: "bg-yellow-500",
      image:
        "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus.",
    },
  ];

  return (
    <div className="m-20">
      <div className=" font-sans font-medium  mx-auto">
        <ul
          className="list-none gap-[4vw] pl-0 grid mb-[6vw]"
          style={{
            gridTemplateRows: `repeat(${cardData.length}, h-var(--cardHeight))`,
          }}
        >
          {cardData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              index={card.index}
              bgColor={card.bgColor}
              image={card.image}
              description={card.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardComponent;
