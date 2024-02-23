import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#173e26] bottom-0 w-[100%] flex text-white py-4 relative">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} ACE Investment & Impact Advisors PLC | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
