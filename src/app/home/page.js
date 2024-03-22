import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <div>
        <div className='3xl:container relative bg-custom-bg bg-cover bg-center' style={{ height:800,}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='flex items-center justify-center'>
      <div className='inline-block text-white uppercase align-top font-sans mt-14 opacity-75'>
        <label className='mb-4 tracking-widest font-semibold text-xl'>Logistics assists you in achieving your business objectives.</label>
        <h4 className='mb-6 text-xl font-semibold text-7xl pl-8 mt-4'>Offering top-tier</h4>
        <h4 className='mb-6 text-xl font-semibold text-7xl pl-10'>freight services.</h4>
        <div className='sm:container mt-20'>
        <button
            type="button"
            className='relative object-cover ml-20 w-1/3 min-h-40 rounded-lg border-2 uppercase text-5xl px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
            style={{ backgroundImage: "url('/images/ride.jpeg')" , backgroundSize: 'cover', backgroundPosition: 'center' }}
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Ride
        </button>
        <button
            type="button"
            className='relative object-cover ml-20 w-1/3 min-h-40 rounded-lg border-2 uppercase text-5xl px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
            style={{ backgroundImage: "url('/images/goods.jpeg')" , backgroundSize: 'cover', backgroundPosition: 'center' }}
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Goods
        </button>
        </div>
        <div className='sm:container mt-5 '>
        <button
            type="button"
            className='relative object-cover ml-20 w-1/3 min-h-40 rounded-lg border-2 uppercase text-5xl px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
            style={{ backgroundImage: "url('/images/fragile.jpeg')" , backgroundSize: 'cover', backgroundPosition: 'center' }}
            data-twe-ripple-init
            data-twe-ripple-color="light">
            FragileItems
        </button>
        <button
            type="button"
            className='relative object-cover ml-20 w-1/3 min-h-40 rounded-lg border-2 uppercase text-5xl px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
            style={{ backgroundImage: "url('/images/doc.jpeg')" , backgroundSize: 'cover', backgroundPosition: 'center' }}
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Documents
        </button>
        </div>
      </div>
    </div>
</div>

       
    </div>
  )
}
