import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <div className="text-center sm:text-left">
          <p className="text-xl font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-black">{description}</p>
          <div className="mt-3">
            <button className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
