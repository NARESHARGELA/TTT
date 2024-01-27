import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex gap-10 items-center'>
      <h1 className='text-3xl text-[#cfee47] py-5'>{title}</h1>
      <div className='w-40 h-[1px] bg-tertiary'>
      </div>
    </div>
  )
}

export default SectionTitle
