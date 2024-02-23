import React, { useState, useEffect } from 'react';
import Accordion from '../components/Accordion'
import { Link } from 'react-router-dom';
 // Assuming you have an Accordion component

const Business = () => {
  const [accordionData, setAccordionData] = useState([]);
  const [categoriesWithCount, setCategoriesWithCount] = useState([]);

  useEffect(() => {
    fetchData();
    fetchCategoriesWithCount();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/overview/Framework');
      if (response.ok) {
        const data = await response.json();

        // Process accordion data
        const dataByRepository = {};
        data.forEach(item => {
          const repositoryName = item.data_repository_name;

          if (!dataByRepository[repositoryName]) {
            dataByRepository[repositoryName] = [];
          }

          dataByRepository[repositoryName].push({
            title: item.file_name,
            downloadLink: item.file,
            isFree: item.Status === 'Free',
          });
        });

        const newData = Object.keys(dataByRepository).map(repositoryName => ({
          title: repositoryName,
          pdfs: dataByRepository[repositoryName],
        }));

        setAccordionData(newData);
      } else {
        console.error('Failed to fetch accordion data');
      }
    } catch (error) {
      console.error('Error fetching accordion data:', error);
    }
  };

  const fetchCategoriesWithCount = async () => {
    try {
      const response = await fetch('/overview/Category'); // Adjust your API endpoint accordingly
      if (response.ok) {
        const data = await response.json();
        setCategoriesWithCount(data);
      } else {
        console.error('Failed to fetch categories with count');
      }
    } catch (error) {
      console.error('Error fetching categories with count:', error);
     
    }
  };
    

    return (
      <>
      <div className='ml-4 md:ml-12 mb-4 md:mb-10'>
          <h1 className='text-2xl md:text-5xl font-semibold leading-tight text-[#173e26]'>
              Business and Regulatory Framework
          </h1>
      </div>
  
      <div className='flex gap-24'>
          <div className='w-full mb-4 '>
              {accordionData.map((accordion, index) => (
                  <Accordion key={index} title={accordion.title} pdfs={accordion.pdfs} isfree={accordion.isfree} />
              ))}
          </div>
          
          <div className="hidden w-4/12 -mx-8 lg:block">
              <h1 className="mb-4 text-xl font-bold text-[#173e26]">Types</h1>
              <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                  <ul className="-mx-4">
                      {categoriesWithCount.map((category, index) => (
                        
                          <li key={category.category} className="flex items-center">
                              <p key={index}>
                                  <Link to="/" className="mx-1 font-bold text-[#173e26] hover:underline">
                                      {category.category}
                                  </Link>
                                  <span className="text-sm font-light text-gray-700">{category.count} Files</span>
                              </p>
                          </li>
                          
                    ))}
                  </ul>
              </div>
          </div>
      </div>
  </>
  
    );

}

export default Business;