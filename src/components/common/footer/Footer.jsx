import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-5 text-white z-30s relative">
      <div className="w-2/4 flex justify-between py-4">
        <a
          href="https://www.linkedin.com/in/henry-morocho"
          target="_blank"
          rel="noreferrer"
          className="rounded-full hover:scale-110 hover:bg-[#0a66c2] flex justify-center items-center p-2 text-4xl text-center animate-bounce"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/Ihenr"
          target="_blank"
          rel="noreferrer"
          className=" rounded-full hover:scale-110 hover:bg-[#000000] flex justify-center items-center p-2 text-4xl text-center animate-bounce"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://wa.me/593967860725"
          target="_blank"
          rel="noreferrer"
          className=" rounded-full hover:scale-110 hover:bg-[#03f500] flex justify-center items-center p-2 text-4xl text-center animate-bounce"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
      <div className="text-xl">@Henry Morocho - 2024</div>
    </footer>
  );
};

export default Footer;
