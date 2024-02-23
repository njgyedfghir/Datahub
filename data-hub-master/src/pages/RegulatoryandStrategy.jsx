import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../images/Business Plan-amico.png'

const RegulatoryandStrategy = () => {
  return (
    <div className='min-h-[70vh] flex flex-col md:flex-row justify-center place-items-center center items-center  gap-10 md:mx-32 '>
            <div className='md:w-2/4 text-center'>
                <h2 className='text-5xl font-semibold leading-tight'>Regulatory and Strategy</h2>

                <p className='mt-5 text-justify self-center text-lg'>
                    The Strategy and Regulatory Frameworks is a collection of documents and links that enable you to understand the Ethiopian government's strategy and regulatory frameworks. National strategies and policies and Business regulatory frameworks (such as directives and proclamations) are among some of the documents available for your viewing.
                </p>

                <Link to='/explore/National-strategies-and-policies'><button className="bg-[#173e26] text-white p-2 rounded w-fit hover:bg-[#112e1c] mt-10"> Know More</button></Link>
            </div>
            <div className='w-full md:w-2/4'>
                <img src={pic} alt="" />
            </div>

            
    </div>
  )
}

export default RegulatoryandStrategy