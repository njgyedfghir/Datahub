import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/imageAccordion.css';

const ImageAccordion = () => {
  const [dataindicators, setDataindicators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('/api/DataIndicators');
        let data = await response.json();
        console.log('DATA:', data);

        setDataindicators(data);
      } catch (error) {
        console.error('Error fetching dataindicators:', error);
      }
    };

    fetchData();
  }, []);
  const getDynamicStyles = (index) => {
    const imageUrl = dataindicators[index]?.image;

    return {
      backgroundImage: `url(${imageUrl})`,
      // Add other dynamic styles as needed
    };
  };

  return (
    <div className="bodyy">
      <div className="containerr">
      {dataindicators.map((DataIndicator, index) => (
  <div
    key={index}
    className="single"
    
        style={getDynamicStyles(index)}
    
  >
    <div className="content justify-center">
      <h2>{DataIndicator.Title}</h2>
      <p className="text-justify">{DataIndicator.Description}</p>
      <Link to={`/explore/data-repository/${DataIndicator.Title}`}>
        {/* Assuming each DataIndicator has an "id" property */}
        <button className="bg-[#173e26] text-white p-2 rounded w-26 hover:bg-[#112e1c]">
          Know More
        </button>
      </Link>
    </div>
  </div>
))}
      </div>
    </div>
  );
  
};

export default ImageAccordion;
