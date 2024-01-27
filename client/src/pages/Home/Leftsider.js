import React from 'react'

const Leftsider = () => {
  return (
    <div className='fixed left-2 bottom-10 px-5 sm:static'>
        <div className='flex flex-col items-center gap-10 '>
            <div className='flex flex-col text-gray-500 gap-5 sm:flex-row sm:py-5'>
                <a href='https://www.facebook.com/naresh.argela.9/' target="_blank" rel="noopener noreferrer"><i class="ri-facebook-box-fill text-xl"></i></a>
                <a href='mailto:nareshargela2002@gmail.com' target="_blank" rel="noopener noreferrer"><i class="ri-mail-check-fill text-xl"></i></a>
                <a href='https://www.instagram.com/_naresh_a_07/' target="_blank" rel="noopener noreferrer"><i class="ri-instagram-line text-xl"></i></a>
                <a href='https://www.linkedin.com/in/naresh-argela07' target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-box-line text-xl"></i></a>
                <a href='https://github.com/NARESHARGELA' target="_blank" rel="noopener noreferrer"><i class="ri-github-fill text-xl"></i></a>
            </div>
            <div className='w-[1px] h-52 bg-[#45bfc4] sm:hidden'>
            </div>
        </div>
      
    </div>
  )
}

export default Leftsider
