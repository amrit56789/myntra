import BorderLine from "./BorderLine";
import { CompanyDetails } from "./CompanyDetails";
import FirstBlock from "./FirstBlock";
import ForthBlock from "./ForthBlock";
import FooterProductList from "./FooterProductList";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";

export default function Footer () {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-3 py-2 px-10 md:grid-cols-4 md:py-4 md:px-28">
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <ForthBlock />
      </div>
      <BorderLine />
      <FooterProductList />
      <BorderLine />
      <CompanyDetails />
  </div>
  );
};
