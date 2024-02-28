import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const rakshabandhanList = [
  {
    id: new Date(),
    image: "",
    // image: "https://i.pinimg.com/originals/02/84/c7/0284c7b61010c95f91f65f44a907e97f.jpg",
    title: "Ethnic Wear Collections",
    description: "For an always cool outlook"
  },
  {
    id: new Date(),
    image: "",
    // image: "https://looksgud.com/blog/wp-content/uploads/2019/09/fabindia-kurta.jpg",
    title: "Ethnic Casuals",
    description: "Indians surely know the route to comfort"
  },
  {
    id: new Date(),
    image: "",
    // image: "https://www.stylesnic.com/wp-content/uploads/2020/04/White-Elegant-Kurtas-For-Men.jpg",
    title: "All White Indian Wear",
    description: "For an always cool outlook"
  },
  {
    id: new Date(),
    image: "",
    // image: "https://4.bp.blogspot.com/-JhTIj-C3uRA/Vx9uqPdez5I/AAAAAAAAARM/0Bgvut-ydvsr2e860cHgwgAIpQpPVSWrACLcB/s1600/Gul-Ahmad-Men-Kurta-Slwar-Suite-Designs-2016-17-3.jpg",
    title: "Ethnic Casuals",
    description: "Indians surely know the route to comfort"
  },
  {
    id: new Date(),
    image: "",
    // image: "https://astyletips.com/wp-content/uploads/2015/12/Best-Kurtas-for-Men-by-Bonanza-2.jpg",
    title: "Ethnic Casuals",
    description: "Indians surely know the route to comfort"
  }
].map(item => ({ ...item, id: uuidv4() }));

function AdsSlider() {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="uppercase text-zinc-700 mt-12 sm:mt-16 sm:text-3xl text-xl mb-10 tracking-widest font-bold">
        Rakshabandhan Gifts This Way
      </h1>
      <Slider {...settings}>
        {rakshabandhanList.map((item) => (
          <div className="p-4" key={item.id}>
            <Image src={item.image || '/default-placeholder.png'} width={200} height={100} alt={item.title} className="object-cover" />
            <div>
              <h2 className="font-bold text-xl mt-2 mb-1">{item.title}</h2>
              <span className="text-sm">{item.description}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AdsSlider;
