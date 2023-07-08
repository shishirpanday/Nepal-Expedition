import React from "react";
import "./Packages.css";
import ScrollToTop from "../ScrollToTop";
import db, { packages } from '../../utils/db.js'
// import PackagesCard from "../../Components/packagesCard/PackagesCard";
import PackagesCard from "../../Components/packagesCard/PackageCard";
const Packages = () => {

  return (
    <>
    <ScrollToTop/>
      <div class="package">
      {
        packages.map((item,idx)=>
          <PackagesCard item={item} key={idx} />)
      }
            </div>
    
    </>
  );
};

export default Packages;
