import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
  const [overviews, setOverviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('/api/Views');
        let data = await response.json();
        console.log('DATA:', data);

        // Log image URLs after setting sliders
        console.log('Image URLs:', data.map(Overview => Overview.image));

        setOverviews(data);
      } catch (error) {
        console.error('Error fetching overviews:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">

      {/* Map through regulatoryoverviews array */}
      {overviews.map((Overview, index) => (
        <div key={index} className="w-full md:w-[350px] h-[600px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover object-center"
            src={Overview.image}
            alt=""
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 text-center">{Overview.Title}</h2>
            <p className="text-gray-600 mb-4 text-justify">{Overview.Description}</p>
            <Link to='/explore'>
              <button
                className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
