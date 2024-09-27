import React from 'react'

const footer = () => {
  return (
    <div className='w-full py-4 flex items-center px-6 bg-gray-100 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col mobile:flex-col xss:flex-col gap-4'>
      <h1 className='flex-1'>Developed by <strong className='capitalize'>thawfeek</strong> © 2022</h1>
      <div className='flex items-center gap-10 text-[16px] font-medium'>
        <h1 className='hover:text-primary_color cursor-pointer'>Terms & Condition</h1>
        <h1  className='hover:text-primary_color cursor-pointer'>Privacy Policy</h1>

      </div>
    </div>
  )
}

export default footer