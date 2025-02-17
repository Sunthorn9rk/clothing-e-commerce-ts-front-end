import React from "react";

function BrandBanner() {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-wrap justify-center p-6 gap-10 border-2 ">
        <div className="w-auto flex items-center justify-center bg-black md:flex-1">
          <img src="/brands/VERSACE.png" alt="versace" className="" />
        </div>
        <div className="w-auto flex items-center justify-center bg-black md:flex-1">
          <img src="/brands/ZARA.png" alt="zara" className="" />
        </div>
        <div className="w-auto flex items-center justify-center bg-black md:flex-1 ">
          <img src="/brands/Gucci.png" alt="gucci" className="" />
        </div>
        <div className="w-auto flex items-center justify-center bg-black md:flex-1 ">
          <img src="/brands/Prada.png" alt="prada" className="" />
        </div>
        <div className="w-auto flex items-center justify-center bg-black md:flex-1 ">
          <img src="/brands/CalvinKlein.png" alt="calvinklein" className="" />
        </div>
      </div>
    </div>
  );
}

export default BrandBanner;
