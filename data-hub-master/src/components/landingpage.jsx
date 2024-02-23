import React, { useState, useEffect } from 'react';
import '../styles/landingpage.css';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [sliders, setSliders] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const manualNav = (index) => {
    setCurrentSlide(index);
  };

  let Frontslider = async () => {
    try {
      let response = await fetch('/api/Sliders');
      let data = await response.json();
      console.log('DATA:', data);

      // Log image URLs after setting sliders
      console.log('Image URLs:', data.map(frontslider => frontslider.image));

      setSliders(data);
    } catch (error) {
      console.error('Error fetching sliders:', error);
    }
  };
  
  useEffect(() => {
    Frontslider();
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
    }, 3500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
    // eslint-disable-next-line 
  }, [sliders.length]);

  return (
    <div>
      
    <div className="img-slide w-full relative h-[500px] overflow-hidden flex bg-scroll">
      <div className="search-bar-container absolute z-20 w-full">
        <SearchBar />
      </div>

      {sliders.map((frontslider, index) => (
        <div
        key={index}
        className={`slide absolute w-full h-48 object-cover object-center ${index === currentSlide ? 'active' : ''}`}
        >
          <img className="z-10 w-full  bg-cover" src={frontslider.image} alt="" />
          
          <div className="info absolute top-0 pt-4 pr-8 pb-4 pl-8 object-center justify-center text-justify">
          
            <h2 className="text-[45px] mt-40 uppercase font-extrabold tracking-wider  text-white">{frontslider.Title}</h2>
            <p className='text-white'>{frontslider.Body}</p>
            <Link to='/searchresult'><button className="bg-[#173e26] text-white p-2 rounded w-36 hover:bg-[#112e1c] btnn">Know more</button></Link>
          </div>
        </div>
      ))}
      <div className="navigation">
        {sliders.map((_, index) => (
          <div key={index} className={`btn ${index === currentSlide ? 'active' : ''}`} onClick={() => manualNav(index)}></div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
