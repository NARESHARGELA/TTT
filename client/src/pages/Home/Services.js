import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
const Services = () => {
  const [selectItemIndex, setSelectItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const services = portfolioData?.services || [];
  return (
    <div>
      <SectionTitle title="Services"/>
      <div className='flex py-8 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-8 border-l-[4px] border-[#4bcedf] w-1/2 sm:flex sm:flex-row sm:overflow-x-scroll sm:w-full'>
            {services.map((exp,index)=>(
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
        <div className='flex flex-col gap-5'>
        <a href={services[selectItemIndex].link}><h1 className='text-secondary text-xl'>{services[selectItemIndex].title}</h1></a>
            <p className='text-white'>{services[selectItemIndex].description}</p>
            {/* <h1 className='text-[#eb4add] text-xl border-[1px] rounded-lg border-[#4bcedf]'>{projects[selectItemIndex].technologies}</h1> */}
            <button  className='text-white border-[1px] border-[#4bcedf] w-[60px]'>{services[selectItemIndex].link}</button>
        </div>
       <img src={services[selectItemIndex].image} alt='' className='h-[200px] w-[200px]'/>
        </div>
      </div>
    </div>
  )
}

export default Services
