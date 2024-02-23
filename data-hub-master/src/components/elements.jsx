import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const Elements = () => {
const [regulatoryoverviews, setRegulatoryoverviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('/api/RegulatoryOverviews');
        let data = await response.json();
        console.log('DATA:', data);


        setRegulatoryoverviews(data);
      } catch (error) {
        console.error('Error fetching regulatoryoverviews:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* Card 1 */}
{regulatoryoverviews.map((RegulatoryOverview, index) => (
      <div key={index} className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src={RegulatoryOverview.image}
          alt=""
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-center">{RegulatoryOverview.Title}</h2>
          <p className="text-gray-600 mb-4 text-justify">{RegulatoryOverview.Description}</p>
          <Link to='/explore/Regulatory-and-Strategy'>
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
  )
}

export default Elements