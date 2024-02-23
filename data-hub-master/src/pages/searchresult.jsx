import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {Pagination,Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";


const Result= () => {
  const { searchstring } = useParams();
  
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedOption, setSelectedOption] = useState('Latest');
  const perPage = 5;
  
  const [fileCounts, setFileCounts] = useState([]);
  const [repository, setRepository] = useState([]);
  const [results, setResults] = useState({
    reg: [],
    dr_results: [],
    rf_results: [],
    ns_results: [],
    ot_results: [],
    il: [],
    preimp: [],
    imp: [],
    opr: [],
    ro_results: [],

  });
  useEffect(() => {
const fetchresult = async () => {
    try {
      const response = await fetch('/overview/Searchresults/'+ searchstring); // Adjust your API endpoint accordingly
      if (response.ok) {
        const data = await response.json();
        setResults({
          reg: data['reg '], // Corrected key
          dr_results: data['dr_results '], // Corrected key
          rf_results: data['rf_results '], // Corrected key
          ns_results: data['ns_results '],
          ot_results: data['ot_results '], // Corrected key
            il: data.il,
            preimp: data.preimp,
            imp: data.imp,
            opr: data.opr,
            ro_results: data.ro_results,
        });

      } else {
        console.error('Failed to fetch result');
      }
    } catch (error) {
      console.error('Error fetching result:', error);
     
    }
  };
const fetchRegion= async () => {
    try {
      const response = await fetch('/overview/file_counts');

      const result = await response.json();
      setFileCounts(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
const fetchdatatype= async () => {
    try {
      const response = await fetch('/overview/repository');

      const data = await response.json();
      setRepository(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    fetchresult();
    fetchRegion();
    fetchdatatype();
   
}, [searchstring]);
 // Combine both rf_results and ns_results
 const combinedResults = [...results.rf_results, ...results.ns_results, ...results.ot_results];

 // Filter combinedResults based on selected option
 let filteredResults = combinedResults;
 if (selectedOption === 'Last Week') {
   const lastWeek = new Date();
   lastWeek.setDate(lastWeek.getDate() - 7);
   filteredResults = combinedResults.filter(result => new Date(result.created) >= lastWeek);
 } else if (selectedOption === 'Last Month') {
   const lastMonth = new Date();
   lastMonth.setMonth(lastMonth.getMonth() - 1);
   filteredResults = combinedResults.filter(result => new Date(result.created) >= lastMonth);
 }

 // Sort filteredResults by date in descending order
 filteredResults.sort((a, b) => new Date(b.created) - new Date(a.created));

 // Calculate start and end indices for the current page
 const startIndex = (currentPage - 1) * perPage;
 const endIndex = currentPage * perPage;

 const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDownload = (downloadLink) => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.target = '_blank'; // Open in a new tab
    link.click();
  };


  const sendEmail = () => {
    window.open("mailto:infoaceadvisors.org?subject=SendMail&body=Description");
  };

  return (
      <div class="overflow-x-hidden bg-gray-100">
          <div class="px-6 py-8">
              <div class="container flex justify-between mx-auto">
                  <div class="w-full lg:w-8/12">
                      <div class="flex items-center justify-between">
                          <h1 class="text-xl font-bold text-[#173e26] md:text-2xl">Search Result For:{searchstring}</h1>
                          <div>
                          <select
            
            className="w-[200px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-[#173e26] focus:ring-opacity-50"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}
          >
            
            <option value="Latest">Latest</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
          </select>

                          </div>
                      </div>
                      
                      {filteredResults.slice(startIndex, endIndex).map(result => (
                      <div class="mt-6">
                        
                        <div key={result.id} className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                          <div className="flex items-center justify-between">
                            <span className="font-light text-gray-600">
                              {new Date(result.created).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                })}
                                </span>
                                <Link to="/" className="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">{result.data_repository_name}</Link>
                                </div>
                                <div className="mt-2"><h1 className="text-2xl font-bold text-[#173e26] hover:underline">{result.pdfs.title}</h1></div>
                  <div className="flex items-center justify-between mt-4">
                    <button className="text-[#24542f] hover:underline" onClick={result.pdfs.isFree ? () => handleDownload(result.pdfs.downloadLink) : onOpen}>
                      {result.pdfs.isFree ? 'Open PDF' : 'Read more'}
                    </button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalContent>
                        <ModalHeader>Send Email</ModalHeader>
                        <ModalBody> Interested? Please send us a request through our email info@aceadvisors.org.</ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                          <Button color='success' variant='light' onClick={sendEmail}>Send Email</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                    <div>
                      <button className="flex items-center">
                        <img src={result.region_image} alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <h1 className="font-bold text-[#173e26] hover:underline">{result.region_name}</h1>
                      </button>
                    </div>
                  </div>
                </div>
                                      
                                      
                                      </div>)) }
                                      
     
                      
                     
            
                      <div className="flex flex-col gap-5">
      <p className="text-small text-default-500">Selected Page: {currentPage}</p>
      <div className='flex gap-2'>
      <Button
          size="sm"
          variant="flat"
          color="secondary"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          class="px-3 py-2 mx-1 font-medium text-[#173e26] bg-white rounded-md hover:bg-[#24542f] hover:text-white"
        >
          Previous
        </Button>
      <Pagination
        total={Math.ceil(filteredResults.length  / perPage)}
        page={currentPage}
        color='success'
        onChange={setCurrentPage}
        className=' bg-transparent'
      />
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          onPress={() => setCurrentPage(prev =>
            prev < Math.ceil(filteredResults.length  / perPage)
              ? prev + 1
              : prev
          )
        }
          class="px-3 py-2 mx-1 font-medium text-[#173e26] bg-white rounded-md hover:bg-[#24542f] hover:text-white"
        >
          Next
        </Button>
        </div>
    </div>
    </div>
                  <div class="hidden w-4/12 -mx-8 lg:block">
                  <div className="px-8">
        <h1 className="mb-4 text-xl font-bold text-[#173e26]">Region</h1>
        <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
          <ul className="-mx-4">
            {fileCounts.map((item, index) => (
              <li key={index} className="flex items-center">
                {/* Use the correct URL for your country flag */}
                <img src={item.flag_image_url} alt="avatar" className="object-cover w-4 h-4 mx-4 rounded-full" />
                <p>
                  <a href="/" className="mx-1 font-bold text-[#173e26] hover:underline">{item.country}</a>
                  <span className="text-sm font-light text-gray-700">{`${item.file_count} Files`}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
                      <div class="px-8 mt-10">
                          <h1 class="mb-4 text-xl font-bold text-[#173e26]">Data Type</h1>
                          <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <ul>
                              {repository.map((item, index) => (
                                  <li key={index}><Link href="#" class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                          {item.Data_Name}</Link></li>
                              ))}
                              </ul>
                          </div>
                      </div>
                      <div class="px-8 mt-10">
                          <h1 class="mb-4 text-xl font-bold text-[#173e26]">Related</h1>
                          <div class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-center"><Link to="/"
                                      class="px-2 py-1 text-sm text-white bg-[#173e26] rounded hover:bg-[#24542f]">Investment</Link>
                              </div>
                              <div class="mt-4"><button class="text-lg font-medium text-[#173e26] hover:underline">Investment in Afar Region.</button></div>
                              <div class="flex items-center justify-between mt-4">
                                  <div class="flex items-center"><img
                                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_the_Afar_Region.svg/2560px-Flag_of_the_Afar_Region.svg.png"
                                          alt="avatar" class="object-cover w-8 h-8 rounded-full"/><button
                                          class="mx-3 text-sm text-gray-700 hover:underline">Afar</button></div><span
                                      class="text-sm font-light text-gray-600">Jun 1, 2020</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Result