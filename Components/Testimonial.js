import React from "react";
import { AiFillStar } from "react-icons/ai";
import UserImage from "./UserImage";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          "Delicious and satisfying! The food never disappoints.
          From the flavorful dishes to the friendly service, it's a
          culinary experience that keeps me coming back for more."
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <UserImage /> {/* Render the UserImage component here */}
        <p>
          "The food was outstanding—full of flavor and beautifully presented.
          Every bite was a delight, and the service was impeccable. A dining
          experience that exceeded all expectations."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Avinash Ranjan</h2>
      </div>
    </div>
  );
};

export default Testimonial;
