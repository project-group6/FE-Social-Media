import React, { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="bg-black flex w-full justify-between items-center h-16 px-4 z-10">
      <div className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </div>

      <div className="flex  items-center justify-center w-auto h-11 px-5 text-white">Postingan John Doe</div>

      <div className="md:flex"></div>
    </div>
  );
};

export default Header;
