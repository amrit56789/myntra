import React from "react";
// import Image from "next/image";
import original from "../../assets/social-icons/original.jpg"
import returnImg from "../../assets/social-icons/returnImg.png"

export default function ForthBlock() {
  return (
    <div className="pl-14 mt-1 max-sm:hidden ">
      <div className="text-md flex">
        <img src={original} alt="Original guarantee" className="h-10 mr-2 w-14" />
        <div className=" text-slate-500">
          <span className="font-bold text-black">100% ORIGINAL</span> guarantee for all products at
          myntra.com
        </div>
      </div>
      <div className="text-md flex my-6 ">
        <img
          className="h-10 w-14 mr-2 "
          src={returnImg}
          alt="Return policy"
        />
        <div className="text-slate-500">
          <span className="font-bold text-black"> Return within 14 </span> days of receiving your order
        </div>
      </div>
    </div>
  );
}
