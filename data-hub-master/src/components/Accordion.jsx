import React, { useState } from 'react';
import Pdf from '../components/pdf.jsx';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Accordion = ({ title, pdfs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:ml-12 items-center'>
      <div className="mx-auto mt-8">
        <div className="rounded overflow-hidden ">
          <div
            className="p-4 cursor-pointer flex justify-between items-center border-t-4 rounded border-[#173e26] bg-[#ffffff]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="font-bold text-lg pl-2">{title}</span>
            <span className="text-gray-600" style={{ color: '#173e26' }}>{isOpen ? <AiFillCaretUp size={25}/> : <AiFillCaretDown size={25}/>}</span>
          </div>
          {isOpen && (
            <div className="p-4">
              {/* Content inside the accordion */}
              <div className="mb-4">
                {pdfs.map((pdf, index) => (
                  <Pdf key={index} title={pdf.title} downloadLink={pdf.downloadLink} isFree={pdf.isFree} />
                ))}
              </div>
              {/* Add more content as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
