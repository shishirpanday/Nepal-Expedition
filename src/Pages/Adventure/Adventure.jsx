import React from "react";
import "./Adventure.css";
import ScrollToTop from "../ScrollToTop";
import AdventureCards from "../../Components/AdventureCards/AdventureCards";
 import {adventure} from "../../utils/db.js"

const Adventure = () => {
  return (
    <>
    <ScrollToTop/>
      <div className="adventure">
        {
          adventure.map((item,idx)=>
            <AdventureCards item={item} key={idx}/>
          )
        }
      </div>
    </>
  );
};

export default Adventure;
