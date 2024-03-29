import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Card.css"
import r1 from "../../assets/medal worthy/00e27983-d373-4d86-9f25-3e46a18ec12a1690609817622-Top_casual_Styles-_Levi-s-_Tommy_Min_40.png";
import r2 from "../../assets/medal worthy/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png";
import r3 from "../../assets/medal worthy/2ccbd34a-3340-4b55-bd4e-2ac182e425c11691079149976-image_png_1139490265.png";
import r4 from "../../assets/medal worthy/51084b8a-9c9e-4b03-bc4a-dfd7738590eb1691076143197-image_png949061620--1-.png";
import r5 from "../../assets/medal worthy/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png";
import r6 from "../../assets/medal worthy/7abcde7c-18e5-44c5-9cd9-c1490daa842a1691142533559-image_png2078004791.png";
import r7 from "../../assets/medal worthy/8027069a-3a10-4a92-a228-1c4e24cd58071691066276841-unnamed---2023-08-03T180720.906.png";
import r8 from "../../assets/medal worthy/921e38ac-f903-4701-a419-df42b9448ef51691142513445-image_png1803300271.png";
import r9 from "../../assets/medal worthy/944486f4-8cf8-456e-a0d5-c2655bf1deaa1691131597834-image_png_1935947130.png";
import r0 from "../../assets/medal worthy/a06120fd-caa3-4dac-93c3-3d4d574f8d7c1691087170219-image_png_116457033.png";
import r10 from "../../assets/medal worthy/a9734bdc-8054-4806-8ab4-748d7dfdfe411691066316796-unnamed---2023-08-03T180830.165.png";
import r12 from "../../assets/medal worthy/b504644b-f446-48c9-b928-36f1958bd19a1691142484406-image_png_292913761.png";
import r11 from "../../assets/medal worthy/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png";
import r13 from "../../assets/medal worthy/ca44e488-c06b-48ce-814f-3a1e3e66e08b1691142548139-image_png_840304476.png";
import r14 from "../../assets/medal worthy/ccebd3fc-3628-4eb5-9604-5487049c2cff1691142886405-image_png356438875.png";
import r15 from "../../assets/medal worthy/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png";
import r16 from "../../assets/medal worthy/dc79e7c8-af20-4b65-ae2f-da2ca8e8c3f31691134139774-image_png1749927309.png";
import r17 from "../../assets/medal worthy/eb385972-caf6-4e84-a37c-3fc2b4ac52041691079093062-image_png892897249.png";

function AdsCaro(props) {
  const [slidesToShow, setSlidesToShow] = useState(6);
  const [slidesToScroll, setSlidesToScroll] = useState(6);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSlidesToShow(window.innerWidth < 768 ? 3 : 6)
      setSlidesToScroll(window.innerWidth < 768 ? 3 : 6)
    };
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };


  return (
    <div className="second-card md:w-100 max-sm:w-11/12 overflow-hidden">
      <h1 className="uppercase text-zinc-700 mt-20 mb-20 ml-10
      max-sm:mr-12 max-sm:ml-3 
      md:text-3xl max-sm:text-xl  tracking-wider  font-bold ">
        {props.heading}
      </h1>
      <Slider className="max-sm:m-3" {...settings} autoplay={true}>
        <img objectFit="contain" src={r0} alt="d" />
        <img objectFit="contain" src={r1} alt="d" />
        <img src={r2} alt="d" objectFit="contain" />
        <img src={r3} alt="d" objectFit="contain" />
        <img src={r4} alt="d" objectFit="contain" />
        <img src={r5} alt="d" objectFit="contain" />
        <img src={r6} alt="d" objectFit="contain" />
        <img src={r7} alt="d" objectFit="contain" />
        <img src={r8} alt="d" objectFit="contain" />
        <img src={r9} alt="d" objectFit="contain" />
        <img src={r10} alt="d" objectFit="contain" />
        <img src={r11} alt="d" objectFit="contain" />
        <img src={r12} alt="d" objectFit="contain" />
        <img src={r13} alt="d" objectFit="contain" />
        <img src={r14} alt="d" objectFit="contain" />
        <img src={r15} alt="d" objectFit="contain" />
        <img src={r16} alt="d" objectFit="contain" />
        <img src={r17} alt="d" objectFit="contain" />
      </Slider>
    </div>
  );
}

export default AdsCaro;
