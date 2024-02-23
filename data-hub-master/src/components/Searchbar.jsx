import React, { useState, useEffect } from 'react';
import '../styles/search.css';


const SearchBar = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  //const [queryString, setQueryString] = useState('');
  const [data, setData] = useState('');
  const [region, setRegion] = useState('');
  const [year, setYear] = useState('');

  const [filters, setFilters] = useState();
  

  useEffect(() => {
    handleSearch();
    handleRegion();
    handleYear();
  }, []);

  const handleSearch = async () => {
   
    try {
      const response = await fetch('/overview/get-filter-options/');
      if (response.ok) {
        const data = await response.json();
        console.log('Filter options:', data);
        setData(data);
      } else {
        throw new Error('Failed to fetch filter options');
      }
    } catch (error) {
      console.error('Error fetching filter options:', error);
      
    } 
  };
  const handleRegion = async () => {
    
    try {
      const response = await fetch('/overview/get-region-options/');
      if (response.ok) {
        const data = await response.json();
        console.log('Filter options:', data);
        setRegion(data);
      } else {
        throw new Error('Failed to fetch filter options');
      }
    } catch (error) {
      console.error('Error fetching filter options:', error);
    }
  };
  const handleYear = async () => {
    
    try {
      const response = await fetch('/overview/get-year-options/');
      if (response.ok) {
        const data = await response.json();
        console.log('year options:', data);
        setYear(data);
      } else {
        throw new Error('Failed to fetch filter options');
      }
    } catch (error) {
      console.error('Error fetching filter options:', error);
    
    }
  };

  const handlesetsetSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchCourse = () => {
    if (searchTerm !== '') {
      window.location.href = '/search/' + searchTerm;
    }
  };

  const handleApplyFilter = (e) => {
    setFilters(e.target.value);
  };

  const applyFilter = () => {
    if (filters !== '') {
      window.location.href = '/filter/' + filters;
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center space-x-2 p-4 search justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handlesetsetSearchTermChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchCourse();
            }
          }}
          className="border p-2 rounded w-full inputSearch lg:w-[60%]"
        />
        <div className='space-x-2 p-2'>
          <button
            className={`bg-[#173e26] text-white p-2 rounded hover:bg-[#153722] w-24 btn md:hidden ${
              searchTerm.trim() === '' ? 'cursor-not-allowed' : ''
            }`}
            onClick={searchCourse}
            type="button"
            disabled={searchTerm.trim() === ''}
          >
            Search
          </button>
          <button
            className="bg-white text-[#173e26] border-2 border-[#173e26] hover:border-bg-[#153722] p-2 rounded w-24 btn"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            {isFilterVisible ? 'Cancel' : 'Filter'}
          </button>
        </div>
      </div>
      {isFilterVisible && (
        <div className="w-[70%] mx-auto mt-8">
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {/* sector Filter */}
            <div className="flex-1">
          <select
            value={filters}
            onChange={handleApplyFilter}
            className=" w-full p-2 border rounded"
            aria-label="Select Sector"
          >
            <option value="">Select Sector</option>
            {data.map((option) => (
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
          </select>
          </div>

          {/* region Filter */}
          <div className="flex-1">

          <select
            value={filters}
            onChange={handleApplyFilter}
            className="w-full p-2 border rounded"
            aria-label="Select Region"
          >
            <option value="">Select Region</option>
            {region.map((option) => (
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
          </select>
          </div>
          {/* year Filter */}
          <div className="flex-1">

          <select
            value={filters}
            onChange={handleApplyFilter}
            className=" w-full p-2 border rounded"
            aria-label="Select Year"
          >
            <option value="">Select Year</option>
            {year.map((option) => (
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
          </select>
          </div>
          
           
          <button onClick={applyFilter} type="button"
          className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]">Apply</button>
        </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;

