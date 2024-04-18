import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-5 text-white">
      <div className="w-2/4 flex justify-between">
        <a
          href="https://www.linkedin.com/in/henry-morocho"
          target="_blank"
          rel="noreferrer"
          className=" rounded-full hover:scale-125 hover:bg-[#263a3b] flex justify-center items-center p-2"
        >
          LINKKEDIN
        </a>
        <a
          href="https://www.linkedin.com/in/henry-morocho"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/henry-morocho"
          target="_blank"
          rel="noreferrer"
        >
          instagram
        </a>
      </div>
      <div>@Henry Morocho -2024</div>
    </footer>
  );
};

export default Footer;
