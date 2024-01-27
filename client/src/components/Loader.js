import React from 'react'

const Loader = () => {
  return (
    <div className=' flex items-center justify-center h-screen fixed inset-0 bg-primary z-[10000]'>
      <div className='flex gap-1 text-5xl'>
          <h1 className='text-[#fff] fd'>{">"}</h1>
          <h1 className='text-[#fff] sd'>{"_"}</h1>
      </div>
    </div>
  )
}

export default Loader
