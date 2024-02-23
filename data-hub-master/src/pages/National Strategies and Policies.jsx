import React, { useState, useEffect } from 'react';
import Accordion from '../components/Accordion'

 // Assuming you have an Accordion component

const NationalStrategy = () => {
  const [accordionData, setAccordionData] = useState([]);
 

  useEffect(() => {
    fetchData();
   
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/overview/Strategy');
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

 
    

    return (
      <>
      <div className='ml-4 md:ml-12 mb-4 md:mb-10'>
          <h1 className='text-2xl md:text-5xl font-semibold leading-tight text-[#173e26]'>
              National Strategies and Policies
          </h1>
      </div>
  
      <div className='flex gap-24'>
          <div className='w-full mb-4 '>
              {accordionData.map((accordion, index) => (
                  <Accordion key={index} title={accordion.title} pdfs={accordion.pdfs} isfree={accordion.isfree}/>
              ))}
          </div>
          
          
      </div>
  </>
  
    );

}

export default NationalStrategy;