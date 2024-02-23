import React from 'react';
import { AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-white sticky text-[173e26] pl-6 pr-6 flex justify-between">
      <div className="container mx-auto flex">
        <div className='flex'>
        <a href="https://twitter.com/Advisors_ACE?t=67Mw_E3bxDUMJK2Qt6jdKQ&s=09"><AiFillTwitterSquare color='#173e26' size={25}/></a> <a href="https://www.linkedin.com/company/ace-investment-impact-advisors-plc"><AiFillLinkedin color='#173e26' size={25}/></a> </div>
        <div className="text-[12px] space-x-2 ml-auto font-semibold text-right flex w-fit">Ethio-China St, KT 12 Building, 6th Floor, Suite 601, P.O.Box 2255, Addis Ababa, Ethiopia</div>
      </div>
    </header>
  );
};

export default Header;
