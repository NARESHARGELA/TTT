import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'
const About = () => {
  const {loading,portfolioData} = useSelector((state)=> state.root)
  const about = portfolioData?.abouts?.[0] || {};
  const {lottieurl,skills,description1,description2} = about || {};
  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex items-center w-full sm:flex-col'>
        <div className='h-[70vh] w-1/2 sm:w-full'>
        <dotlottie-player src={lottieurl || ""}
         background="transparent"
          speed="1" loop
           autoplay></dotlottie-player>
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
            <p className='text-white'>{description1 || ""}</p>
             <p className='text-white'>{description2 || ""}</p>
        </div>
      </div>
      <div className='py-5'>
        <h1 className='text-blue-400 text-2xl font-mono'>Here are the few technologies I have been Working with recently:</h1>
        <div className='flex flex-wrap gap-10 mt-5 px-4 py-2'>
        {skills.map((skill,index)=>(
            <div className='border border-[#4bcedf] rounded-lg py-3 px-10'>
            <h1 className='text-tertiary'>{skill}</h1>
            </div>
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default About
