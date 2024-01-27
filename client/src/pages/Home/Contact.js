import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const contact = portfolioData?.contacts || {};

  return (
    <div>
      <SectionTitle title="Contact" />
      <div className='flex justify-center items-center sm:flex-col sm:gap-10'>
        <div className='flex flex-col'>
          <div className='bg-gray-800 p-4 rounded-lg ml-8'>
            <h1 className='text-white text-md'>{"{"}</h1>
            {typeof contact === 'object' &&
              Object.keys(contact).map((key) => (
                <p key={key} className='ml-4'>
                  <span className='text-green-400 text-md'>{key}</span>
                  <span className='text-white text-md'>{" "}:{" "}</span>
                  {typeof contact[key] === 'object'
                    ? renderNestedObject(contact[key])
                    : <span className='text-blue-300'>{contact[key]}</span>
                  },
                </p>
              ))}
            <h1 className='text-white ml-4 text-md'>{"}"}</h1>
          </div>
        </div>
        <div className='h-[60vh] w-1/2 sm:w-full'>
          <dotlottie-player
            src="https://lottie.host/ff410fc3-467a-49dd-b8d0-f559bf1a3079/C11FFXNd3M.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

// Helper function to render nested objects
const renderNestedObject = (nestedObject) => (
  <>
    {"{"}
    {Object.keys(nestedObject).map((nestedKey) => (
      <p key={nestedKey} className='ml-4'>
        <span className='text-green-400 text-md'>{nestedKey}</span>
        <span className='text-white text-md'>{" "}:{" "}</span>
        <span className='text-blue-300'>{nestedObject[nestedKey]}</span>,
      </p>
    ))}
    {"}"}
  </>
);

export default Contact;
