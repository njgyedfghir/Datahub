import React from 'react'
import pic from '../images/Business Plan-amico.png'
import pic2 from '../images/Statistics-bro.png'
import pic3 from '../images/Visual data-amico.png'
import pic4 from '../images/Analysis-amico.png'
import { Link } from 'react-router-dom'

const Explorecomp = () => {
  return (
    <div className='justify-center ml-4 mr-4'>
        <div className='min-h-[70vh] flex flex-col md:flex-row justify-center place-items-center center items-center  gap-10 md:mx-32 '>
            <div className='md:w-2/4 text-center'>
                <h2 className='text-5xl font-semibold leading-tight'>Regulatory and Strategy</h2>

                <p className='mt-5 text-justify self-center text-lg'>
                    The Strategy and Regulatory Frameworks is a collection of documents and links that enable you to understand the Ethiopian government's strategy and regulatory frameworks. National strategies and policies and Business regulatory frameworks (such as directives and proclamations) are among some of the documents available for your viewing.
                </p>
                <Link to='/explore/Regulatory-and-Strategy'>
                <button className="bg-[#173e26] text-white p-2 rounded w-fit hover:bg-[#112e1c] mt-10"> Know More</button>
                </Link>
            </div>
            <div className='w-full md:w-2/4'>
                <img src={pic} alt="" />
            </div>

            
        </div>
        <div className='min-h-[70vh] flex flex-col md:flex-row justify-center place-items-center center items-center  gap-6 md:mx-32'>
            
            <div className='w-full md:w-2/4'>
                <img src={pic2} alt="" />
            </div> 

            <div className='md:w-2/4 text-center'>
                <h2 className='text-5xl font-semibold leading-tight'>Investment Lifecycle</h2>

                <p className='mt-5 text-justify self-center text-lg'>
                ACE Advisors has outlined and broken down investment in Ethiopia into a tri-phased investment cycle, with each phase entailing a specific set of paperwork and processes. In the course of understanding the Ethiopian Investment ecosystem, ACE Advisors can offer you a comprehensive investment guide. 
                </p>

                <Link to='/explore/Investment-Lifecycle'>
                <button className="bg-[#173e26] text-white p-2 rounded w-fit hover:bg-[#112e1c] mt-10"> Know More</button>
                </Link>
            </div>

            

            
        </div>
        <div className='min-h-[70vh] flex flex-col md:flex-row justify-center place-items-center center items-center  gap-6 md:mx-32'>
            <div className='md:w-2/4 text-center'>
                <h2 className='text-5xl font-semibold leading-tight'>Data Repository</h2>

                <p className='mt-5 text-justify self-center text-lg'>
                    The Strategy and Regulatory Frameworks is a collection of documents and links that enable you to understand the Ethiopian government's strategy and regulatory frameworks. National strategies and policies and Business regulatory frameworks (such as directives and proclamations) are among some of the documents available for your viewing.
                </p>

                <Link to='/explore/data-repository/Economy'>
                <button className="bg-[#173e26] text-white p-2 rounded w-fit hover:bg-[#112e1c] mt-10"> Know More</button>
                </Link>
            </div>

            <div className='w-full md:w-2/4'>
                <img src={pic3} alt="" />
            </div>
        </div>
        <div className='min-h-[70vh] flex flex-col md:flex-row justify-center place-items-center center items-center  gap-6 md:mx-32 '>
            <div className='w-full md:w-2/4'>
                <img src={pic4} alt="" />
            </div>
            
            <div className='md:w-2/4 text-center'>
                <h2 className='text-5xl font-semibold leading-tight'>ACE Services</h2>

                <p className='mt-5 text-justify self-center text-lg'>
                    The Strategy and Regulatory Frameworks is a collection of documents and links that enable you to understand the Ethiopian government's strategy and regulatory frameworks. National strategies and policies and Business regulatory frameworks (such as directives and proclamations) are among some of the documents available for your viewing.
                </p>

                <Link to='/explore/ACE-Services'>
                <button className="bg-[#173e26] text-white p-2 rounded w-fit hover:bg-[#112e1c] mt-10"> Know More</button>
                </Link>
            </div>

            
        </div>
    </div>
  )
}

export default Explorecomp