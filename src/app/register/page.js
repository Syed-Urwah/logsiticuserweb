import React from 'react'
import Image from "next/image";

export default function page() {
  return (
    <main className='flex min-h-screen flex-col mt-6'>
      <div className='mt-5'>
        <h1 className='text-center text-2xl font-semibold'>Registration</h1>
      </div>
      <div className="container border-solid rounded-lg bg-gray-100 mt-7 pb-10" style={{ width: 1000 }}>
        <div className='columns-1 flex lg:flex-row max-sm:flex-col mt-10'>
          <label className='font-medium'>Enter Username</label>
          <input type='text' placeholder='Enter Your UserName' className='border-solid border-blue-200 h-9 ms-7 ps-6 max-sm:w-20  rounded-md' style={{ width: 700, borderWidth: 3, outline: 'none' }} />
        </div>
        <div className='columns-1 flex mt-10 '>
          <label className='font-medium'>Email Address</label>
          <input type='text' placeholder='Enter Your Email Address' className='border-solid  border-blue-200 h-9 ms-10 ps-6 rounded-md' style={{ width: 700,borderWidth: 3, outline: 'none' }} />
        </div>
        <div className='columns-1 flex mt-10'>
          <label className='font-medium'>Id Card No.</label>
          <input type='text' placeholder='Enter Id Card No.' className='border-solid border-blue-200 border-2 h-9 ms-16 ps-6 rounded-md' style={{ width: 700,borderWidth: 3, outline: "none" }} />
        </div>
        <div className='columns-1 flex mt-10'>
          <label className='font-medium'>Enter Password</label>
          <input type='text' placeholder='Enter Your Password' className='border-solid border-blue-200 border-2 h-9 ms-8 ps-6 rounded-md' style={{ width: 700,borderWidth: 3, outline: 'none' }} />
        </div>

      </div>
    </main>
  )
}
