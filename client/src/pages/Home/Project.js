import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
const Project = () => {
  const [selectItemIndex,setSelectItemIndex]=useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const projects = portfolioData?.projects || [];
  return (
    <div>
        <SectionTitle title="Projects"/>
      <div className='flex py-8 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-8 border-l-[4px] border-[#4bcedf] w-1/2 sm:flex sm:flex-row sm:overflow-x-scroll sm:w-full'>
            {projects.map((exp,index)=>(
                <div onClick={()=>{
                    setSelectItemIndex(index)
                }} className='cursor-pointer'>
                    <h1 className={`text-xl px-10 
                     ${selectItemIndex===index
                     ? "text-tertiary border-tertiary border-l-[#44e960] border-l-4 -ml-1 bg-[#41e48570] py-5 sm:w-full"
                     : "text-white"}`}>{exp.title}</h1>
                </div>
            ))}
        </div>
        <div className='flex gap-12 justify-center items-center sm:flex-col'>
            <img src={projects[selectItemIndex].image} alt='' className='h-[200px] w-[200px]'/>
        <div className='flex flex-col gap-5'>
          <a href={projects[selectItemIndex].link}><h1 className='text-secondary text-xl'>{projects[selectItemIndex].title}</h1> </a> 
            <p className='text-white'>{projects[selectItemIndex].description}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Project
