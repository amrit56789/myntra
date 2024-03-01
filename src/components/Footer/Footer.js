import React from 'react';
import BorderLine from "./BorderLine";
import { CompanyDetails } from "./CompanyDetails";
import FirstBlock from "./FirstBlock";
import ForthBlock from "./ForthBlock";
import FooterProductList from "./FooterProductList";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";

export default function Footer() {
  return (
    <div className="bg-slate-100 mt-8 pt-14 mx-auto">
      <div className="w-full lg:w-3/4 lg:items-start mx-auto flex flex-wrap justify-center sm:justify-between items-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 flex justify-center sm:justify-start">
          <FirstBlock />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 flex justify-center sm:justify-start">
          <SecondBlock />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 flex justify-center sm:justify-start">
          <ThirdBlock />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 flex justify-center sm:justify-start">
          <ForthBlock />
        </div>
        <div className="w-full flex flex-col items-center">
          <BorderLine />
          <FooterProductList />
          <BorderLine />
          <CompanyDetails />
        </div>
      </div>
    </div>
  );
};
