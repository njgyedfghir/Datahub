import React, { useState } from 'react';
import {Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,} from "@material-tailwind/react";

import {
  Rectangle,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
  Legend
} from "recharts";
import { Agri } from '../data';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white shadow-md p-2 rounded-md">
        <p><strong className='text-[#173e26]'>Year:</strong> {data.year}</p>
        <p><strong className='text-[#173e26]'>% of GDP:</strong> {data.value}</p>
        <p><strong className='text-[#173e26]'>Real time value:</strong>{data.realtime}</p>
        {/* Add additional information here */}
      </div>
    );
  }

  return null;
};

const Trade = () => {
  const [chartType, setChartType] = useState('line');
  const [selectedRange, setSelectedRange] = useState([0, Agri.length - 1]);

  const handleLineClick = () => {
    setChartType('line');
  };

  const handleBarClick = () => {
    setChartType('bar');
  };

  const handleRangeChange = ({ startIndex, endIndex }) => {
    setSelectedRange([startIndex, endIndex]);
  };

  return (
    <div>
      <div className='flex justify-center items-center'>
        <Menu
          dismiss={{
            itemPress: false,
          }}
        >
          <MenuHandler>
            <Button className='bg-white w-fit text-black m-4 md:w-2/5'>Data Indicator</Button>
          </MenuHandler>
         
          <MenuList className='m-2'>
          <Input placeholder='Search' className=' rounded-sm'/>
            <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2'>Agriculture, forestry, and fishing, value added (% of GDP) | Data (worldbank.org)</MenuItem>
            <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2'>Central government debt, total (% of GDP)</MenuItem>
            <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2'>External debt stocks (% of GNI)</MenuItem>
            <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2'>GDP per capita growth (annual %)</MenuItem>
            <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2'>GDP per capita (current US$)</MenuItem>
            

          </MenuList>
        </Menu>
      </div>
    <div className=' flex justify-center items-center'>
      
      <div className='md:w-4/6 h-[100%] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md'>
        <div><h2 className='text-center font-bold text-[#173e26] mt-4'> Agriculture, forestry, and fishing, value added (% of GDP)</h2></div>
        <div className="flex justify-center mt-4">
          <button className={`mr-4 px-4 py-2 rounded ${chartType === 'line' ? 'bg-gray-200' : ''}`} onClick={handleLineClick}>Line</button>
          <button className={`px-4 py-2 rounded ${chartType === 'bar' ? 'bg-gray-200' : ''}`} onClick={handleBarClick}>Bar</button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          {chartType === 'line' ? (
            <LineChart 
            data={Agri}
            margin={{
              top: 35,
              right: 45,
              left: 20,
              bottom: 5
            }}
            >
              <CartesianGrid strokeDasharray="0" horizontal='' vertical='true' />
              <XAxis dataKey="year" padding={{ left: 30, right: 30 }}/>
              <YAxis />
              <Tooltip content={CustomTooltip}/>
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#173e26" />
              <Brush dataKey="year" height={30} stroke="#173e26" onChange={handleRangeChange} startIndex={selectedRange[0]} endIndex={selectedRange[1]} />
            </LineChart>
          ) : (
            <BarChart 
            data={Agri}
            margin={{
              top: 35,
              right: 45,
              left: 20,
              bottom: 5
            }}
            >
              <CartesianGrid strokeDasharray="0" horizontal='true' vertical=''/>
              <XAxis dataKey="year" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip content={CustomTooltip}/>
              <Legend />
              <Bar dataKey="value" fill="#0F5132" activeBar={<Rectangle fill='#7AE582'/>}/>
              <Brush dataKey="year" height={30} stroke="#173e26" onChange={handleRangeChange} startIndex={selectedRange[0]} endIndex={selectedRange[1]} />
            </BarChart>
          )}
        </ResponsiveContainer>
        <div className="bg-white p-4 rounded-md shadow-md flex">
          <span className="font-bold text-[#173e26]">Selected Range:</span> {Agri[selectedRange[0]]?.year} - {Agri[selectedRange[1]]?.year}
          <p className='ml-auto'>Source: World Bank </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Trade;
