import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Import your images
import m1 from "../../assets/sliderImg/handbags.jpg";
import m2 from "../../assets/sliderImg/m.jpg";
import m3 from "../../assets/sliderImg/m1.jpg";
import m4 from "../../assets/sliderImg/m2.jpg";
import m5 from "../../assets/sliderImg/m3.jpg";
import m6 from "../../assets/sliderImg/m4.jpg";
import m7 from "../../assets/sliderImg/m5.jpg";
import m8 from "../../assets/sliderImg/m6.jpg";

const ImageCaro = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200); // This timeout simulates a loading delay

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const images = [m1, m2, m3, m4, m5, m6, m7, m8]; // Array of images for easier management

  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      autoPlay
      interval={3000} 
      infiniteLoop
      className="relative"
    >
      {images.map((image, index) => (
        <div key={index}>
          {loading ? (
            <Skeleton width={1300} height={300} />
          ) : (
            <img src={image} alt={`Carousel item ${index}`} style={{ objectFit: "contain" }} />
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCaro;
