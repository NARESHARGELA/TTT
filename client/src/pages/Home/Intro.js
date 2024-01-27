import React from 'react'
import { useSelector } from 'react-redux'
const Intro = () => {
  const {loading,portfolioData} = useSelector((state)=> state.root)
  const intro = portfolioData?.intros?.[0] || {};
  const {welcomeText,firstName,lastName,caption,description} = intro || {};
  return (
    <div className='flex'>
      <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>{welcomeText || ""}</h1>
      <h1 className='text-secondary text-5xl sm:text-2xl font-mono'>{firstName || ""} {lastName || ""}</h1>
      <h1 className='text-white text-5xl sm:text-2xl font-mono'>{caption || ""}</h1>
      <p className='text-white w-2/3'>{description||""}</p>
        <button className='text-tertiary border-solid border-2 border-indigo-900 px-10 py-4 rounded-lg '>Hire Me</button>
    </div>
    </div>
  )
}

export default Intro
