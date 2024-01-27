import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Experience = () => {
  const [selectItemIndex, setSelectItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const experiences = portfolioData?.experiences || [];

  return (
    <div>
      <SectionTitle title="Experience" />
      <div className='flex py-8 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-8 border-l-[4px] border-[#4bcedf] w-1/2 sm:flex sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {experiences.map((exp, index) => (
            <div
              key={index} // Use a unique identifier if available
              onClick={() => {
                setSelectItemIndex(index);
              }}
              className='cursor-pointer'
            >
              <h1 className={`text-xl px-10 
                ${selectItemIndex === index
                  ? "text-tertiary border-tertiary border-l-[#44e960] border-l-4 -ml-1 bg-[#41e48570] py-5 sm:w-full"
                  : "text-white"}`}
              >
                {exp.period}
              </h1>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-secondary text-xl'>{experiences[selectItemIndex]?.title}</h1>
          <h1 className='text-[#eb4add] text-xl'>{experiences[selectItemIndex]?.company}</h1>
          <p className='text-white'>
            {experiences[selectItemIndex]?.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
