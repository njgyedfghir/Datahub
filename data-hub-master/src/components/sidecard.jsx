// SideCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const SideCard = ({ title, content, buttonText, imageUrl,type }) => {
  return (
    <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  max-w-[42rem] ">
    <div
      class="relative w-1/4 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0  hidden lg:block">
      <img
        src={imageUrl}
        alt="card-image" class="object-cover w-full h-full" />
    </div>
    <div class="p-6">
      <h6
        class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
        {type}
      </h6>
      <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h4>
      <p class="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        {content}
      </p>
      <Link to='/' class="inline-block">
        <button
          class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-[#173e26] active:bg-[#173e26]/60 hover:text-white"
          type="button">
          {buttonText}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg></button>
      </Link>  
    </div>
  </div>  
  );
};

export default SideCard;
