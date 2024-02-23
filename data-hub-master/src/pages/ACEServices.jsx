import React from 'react';
import bank from '../images/bank.png'
import hand from '../images/handshake.png'
import plant from '../images/plant.png'
import arrow from '../images/Asset 4.png'
const ServiceCard = ({ title, description, image }) => {
  // Splitting the description into paragraphs
  const paragraphs = description.split('\n');

  return (
    <div className="w-full  py-6 mx-auto overflow-hidden shadow-md rounded-lg bg-white flex flex-wrap">
      <div className='md:w-1/3 px-10 object-cover'><img src={image} alt={title} className="w-full md:w-auto"/></div>
      <div className="md:w-2/3 md:px-10">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          {/* Rendering description paragraphs with vertical line */}
          <div className="text-gray-700 text-base relative text-justify">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'pl-4 border-l-4 rounded border-[#9fb1a5] relative' : 'relative'}>
                {/* Circle bullet */}
                {index > 0 && (
                    <img
                      src={arrow}// Replace with your arrow image path
                      alt="Arrow"
                      className="absolute  top-2 left-[-10px] w-4 h-4 rotate-90 "
                    />
                  )}

                {paragraph}
              </p>
            ))}
          </div>

        </div>
        {/* <div className="px-6 py-4">
          <button className="bg-[#173e26] text-white p-2 rounded w-fit hover:bg-[#112e1c]">
            Learn More
          </button>
        </div> */}
      </div>
    </div>
  );
};

const ACEServices = () => {
  const services = [
    {
      title: 'Policy reform and investment promotion',
      description: `\n Leveraging our experience to support the government to improve the competitiveness in domestic and global markets for foreign and domestic investment in Ethiopia through research and innovation.\n Conducting process analysis and strategy design to improve the business climate in Ethiopia. \n Providing technical support and building policy implementation capacity of key government organizations based on specific requests and reform needs.`,
      image: bank, // Add your image path here
    },
    {
      title: 'Investor services center',
      description: '\n With a deep understanding of the Ethiopian investment climate, our advisory team will assist you in understanding investment opportunities, creating a clear road map for your proposed venture, and providing hand-holding solutions to ensure smooth establishment and implementation. \n We assist you in making sound investment decisions by offering transactional due diligence that is both relevant to your needs and appropriate to finances.',
      image: hand, // Add your image path here
    },
    {
      title: 'Startup support and Incubation',
      description: '\nDrawing on global best success stories and lessons learned, ACE will provide entrepreneurs with business skills, and systemic coaching, and facilitate access to information and finance.\n We support startups to get from an idea to a feasible business plan to a growing brand by providing tailored support to avoid common start-up mistakes.\n Working with development partners and the government to provide startups with a package of support and incubation to create growth and employment opportunities.',
      image: plant, // Add your image path here
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {services.map((service, index) => (
        <div key={index} className="m-4 md:w-[80%]">
          <ServiceCard {...service} />
        </div>
      ))}
    </div>
  );
};

export default ACEServices;
