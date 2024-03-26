import React from 'react'

export default function CallUs() {
  return (
    
    <div className='bg-gray-100'>
        <header className='text-center mx-auto mb-2 lg:px-20 py-6'>
          <h3 className='tracking-normal font-bold text-xl mt-4 font-sans text-black-500'>Still have questions about our Intracity Services?</h3>
        </header>
        <div className='grid grid-cols-3 gap-2'>
          <div className='mb-4 flex justify-end py-8'>

          </div>
          <div className='mb-4 flex justify-center py-2'>
            <button type="submit" className='flex lg:w-1/2 md:w-full mx-auto justify-center rounded-md bg-[#6C63FF] px-3 py-3 text-sm font-sans font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Call Us Now</button>
          </div>
          <div className='mb-4 flex justify-start py-8'>

          </div>
        </div>
      </div>
  )
}
