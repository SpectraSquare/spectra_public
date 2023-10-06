import CarouselComp from "./CarouselComp";
import CardComponent from "./CardComponent";
import FAQ from "./FAQ";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="carousel">
        <div>
          <CarouselComp />
        </div>
        <div className="cards">
          <CardComponent />
        </div>
        <div className="faq">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Home;