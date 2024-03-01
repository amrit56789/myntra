import React from "react";
import { useNavigate } from "react-router-dom";
import m1 from "../../assets/cards/k10.jpg";
import "./Card.css"
function Cards() {
  const navigate = useNavigate();
  const images = Array(15).fill(m1);

  // Function to handle image click
  const handleImageClick = () => {
    navigate('/shop');
  };

  return (
    <div className="mx-auto">
      <h1 className="shopByHeading uppercase text-zinc-700 mt-10 ml-5 text-2xl sm:text-3xl tracking-widest font-bold">
        Shop by Category
      </h1>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="card-images m-4 w-72 overflow-hidden rounded-lg" onClick={handleImageClick}>
            <img src={image} alt={`Card ${index}`} className="w-full h-full object-cover cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Cards;
