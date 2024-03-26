import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <div className='3xl:container relative bg-custom-bg bg-cover bg-center' style={{ height: 800, }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='flex items-center justify-center'>
          <div className='inline-block text-white uppercase align-top font-sans mt-16 opacity-75'>
            <label className='mb-4 tracking-widest font-semibold text-sm lg:text-xl ps-10 lg:ps-6'>Logistics assists you in achieving your business objectives.</label>
            <h4 className='mb-6 font-semibold text-4xl mx-auto lg:text-7xl mt-4 ps-24 lg:ps-11'>Offering top-tier</h4>
            <h4 className='mb-6 font-semibold text-4xl mx-auto lg:text-7xl ps-24 lg:ps-14'>freight services.</h4>
            <div className='sm:container mt-20'>
              <button
                type="button"
                className='relative object-cover ml-20 w-1/3 min-h-40 rounded-xl border-2 uppercase text-2xl px-7 pb-[8px] pt-[10px] font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                style={{ backgroundImage: "url('/images/ride.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                data-twe-ripple-init
                data-twe-ripple-color="light">
                Ride
              </button>
              <button
                type="button"
                className='relative object-cover ml-20 w-1/3 min-h-40 rounded-xl border-2 uppercase text-2xl px-7 pb-[8px] pt-[10px] font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                style={{ backgroundImage: "url('/images/goods.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                data-twe-ripple-init
                data-twe-ripple-color="light">
                Goods
              </button>
            </div>
            <div className='sm:container mt-5 '>
              <button
                type="button"
                className='relative object-cover ml-20 w-1/3 min-h-40 rounded-xl border-2 uppercase text-lg lg:text-2xl px-3 pb-[8px] pt-[10px] font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                style={{ backgroundImage: "url('/images/fragile.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                data-twe-ripple-init
                data-twe-ripple-color="light">
                Fragile Items
              </button>
              <button
                type="button"
                className='relative object-cover ml-20 w-1/3 min-h-40 rounded-xl border-2 uppercase text-lg lg:text-2xl px-7 pb-[8px] pt-[10px]  font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                style={{ backgroundImage: "url('/images/doc.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                data-twe-ripple-init
                data-twe-ripple-color="light">
                Documents
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className='text-center mx-auto mb-12 lg:px-20 mt-5'>
        <h2 className='tracking-normal font-bold text-3xl mt-4 font-sans uppercase text-black-500'>What We Offer</h2>
      </header>
      <div className='h-full w-5/6 pt-12 p-20 mb-5 mx-auto'>
        <div className='grid gap-14 md:grid-cols-3 md:gap-5'>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1 ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/time-track.jpeg"
                alt="phone"
                className='h-12'
              />
<<<<<<< HEAD
              </div>
              <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14'>Real Time Cargo Tracking</h1>
            </div>
            <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1 ring-inset shadow-indigo-300/50'>
              <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
                <img
                  src="/images/safety.jpeg"
                  alt="phone"
                  className='h-12'
                />
              </div>
              <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14'>Safety & Security Services</h1>
            </div>
            <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1 ring-inset shadow-indigo-300/50'>
              <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
                <img 
                  src="/images/time.jpeg"
                  alt="phone"
                  className='h-12'
                />
              </div>
              <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14'>On Time Delivery</h1>
=======
>>>>>>> e4cb167f44e0d3dbcfbe033d946abe37b6fddd1e
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14'>Real Time Cargo Tracking</h1>
          </div>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1 ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/safety.jpeg"
                alt="phone"
                className='h-12'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14'>Safety & Security Services</h1>
          </div>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1 ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/time.jpeg"
                alt="phone"
                className='h-12'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14'>On Time Delivery</h1>
          </div>
        </div>
        <div className='grid gap-14 md:grid-cols-2 md:gap-5 mt-14 lg:px-40'>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1 ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/cost.jpeg"
                alt="phone"
                className='h-12'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14'>Optimized Travel Cost</h1>
          </div>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1 ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/client.jpeg"
                alt="phone"
                className='h-12'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14'>24/7 Clients Support</h1>
          </div>
        </div>
      </div>
      <div className='h-full w-full min-h-screen pt-12 p-20 bg-gray-100'>
        <div className='grid grid-cols-2 gap-5 lg:px-32'>
          <div className='lg:px-20'>
            <h2 className='tracking-widest font-semibold text-lg font-sans uppercase text-indigo-500'>Select a required service</h2>
            <p className='indent-8 tracking-wide'>Choose the required Logistics Service that you need, provide all the relevant details of the cargo you want to get transported along with the Payment details.</p>
            <h2 className='tracking-normal font-semibold text-lg font-sans mt-4 text-black-500'>Download the Truckload Shippers' app now</h2>
            <div className='flex justify-center items-center mt-3'>
              <img src="/images/google-play.jpeg" alt="alternate text" className='h-12' />
            </div>
            <h2 className='tracking-widest font-semibold text-lg mt-4 font-sans uppercase text-indigo-500'>Payment Processing</h2>
            <p className='indent-8 tracking-wide justify-center'>Once your delivery is complete, You will be charged in accordance with the agreed payment terms, set at the beginning while you posted your order. Cash on Delivery(COD) facility available. However, for some deliveries 100% payment will be processed in advance. Please review our Terms & Conditions in detail.</p>

          </div>

          <div className='border-l-2 border-gray-300 lg:px-20 px-4'>
            <div>
              <h2 className='tracking-widest font-semibold text-lg font-sans uppercase text-indigo-500'>Mobilization</h2>
              <p className='indent-8 tracking-wide'>A verified Truck and driver will be mobilized to execute your order as soon as you accept the quoted price. Our verified partners will ensure that your goods are transported safely to the destination. We will provide live vehicle tracking on regular intervals through our Shippers' MOBILE APP.</p>
              <h2 className='tracking-widest font-semibold text-lg mt-4 font-sans uppercase text-indigo-500'>Payment Processing</h2>
              <p className='indent-8 tracking-wide justify-center'>Once your delivery is complete, You will be charged in accordance with the agreed payment terms, set at the beginning while you posted your order. Cash on Delivery(COD) facility available. However, for some deliveries 100% payment will be processed in advance. Please review our Terms & Conditions in detail.</p>
              <div className='flex justify-center items-center mt-3'>
                <img src="/images/rate-us.jpeg" alt="alternate text" className='h-16' />
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className='mt-10 grid grid-cols-3 gap-2'>
            <div className='mb-4 flex justify-end py-8'>
              <img
                src="/images/left-mob.jpeg"
                className='h-auto w-1/2 rounded-lg'
                alt="" />
            </div>
            <div className='mb-4 flex justify-center py-2'>
                <img
                  src="/images/center-mob.jpeg"
                  className='h-auto w-1/2 rounded-lg'
                  alt="" 
                />
            </div>
            <div className="mb-4 flex justify-start py-8">
                <img
                    src="/images/right-mob.jpeg"
                    className='h-auto w-1/2 rounded-lg'
                    alt="" />
            </div>
=======
        </div>
        <div className='mt-10 grid grid-cols-3 gap-2'>
          <div className='mb-4 flex justify-end py-8'>
            <img
              src="/images/left-mob.jpeg"
              className='h-auto w-1/2 rounded-lg'
              alt="" />
          </div>
          <div className='mb-4 flex justify-center py-2'>
            <img
              src="/images/center-mob.jpeg"
              className='h-auto w-1/2 rounded-lg'
              alt=""
            />
          </div>
          <div class="mb-4 flex justify-start py-8">
            <img
              src="/images/right-mob.jpeg"
              className='h-auto w-1/2 rounded-lg'
              alt="" />
>>>>>>> e4cb167f44e0d3dbcfbe033d946abe37b6fddd1e
          </div>
        </div>
      </div>
      <header className='text-center mx-auto mb-12 lg:px-20 mt-5'>
        <h2 className='tracking-normal font-bold text-3xl mt-4 font-sans uppercase text-black-500'>Our Services Type</h2>
      </header>
      <div className='h-full w-5/6 mx-auto pt-12 p-20 mb-5'>
        <div className='grid gap-14 md:grid-cols-3 md:gap-5'>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1  ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/pickdrop.jpeg"
                alt="phone"
                className='h-12'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14 -translate-y-12'>Pick & Drop</h1>
            <p className='indent-8 tracking-wide -translate-y-6'>Full Truckload or Full Container Load shipment services Outbound from Lahore, Karachi & Islamabad at market rates.</p>
          </div>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1  ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/cargocar.jpeg"
                alt="phone"
                className='h-11'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14 -translate-y-12'>Cargo Car</h1>
            <p className='indent-8 tracking-wide -translate-y-6'>Door to Door Loose Cargo Transportation on weight or volume basis at competitive rates, with great care, between Lahore and Karachi.</p>

          </div>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1  ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/cargovan.jpeg"
                alt="phone"
                className='h-12'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14 -translate-y-12'>Cargo Van</h1>
            <p className='indent-8 tracking-wide -translate-y-6'>We Match LCL Cargo at affordable rates on long hual, book your sizeable load/cargo in sharing mode (LCL) in 17ft or 20Ft containers, Safety guaranteed.</p>
          </div>
        </div>
        <div className='grid gap-14 md:grid-cols-2 md:gap-5 mt-16 lg:px-40'>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1  ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/cargotruck.jpeg"
                alt="phone"
                className='h-16'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14 -translate-y-12'>Truck Cargo</h1>
            <p className='indent-8 tracking-wide -translate-y-6'>Ship your car between Lahore, Karachi, Faisalabad,Peshawar and Islamabad at market competitive rates through our wide network of trusted partners.</p>
          </div>
          <div className='rounded-xl bg-white p-6 text-center shadow-xl ring-indigo-300 ring-1  ring-inset shadow-indigo-300/50'>
            <div className='mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-indigo-400/100'>
              <img
                src="/images/flatbed.jpeg"
                alt="phone"
                className='h-8'
              />
            </div>
            <h1 className='text-darken mb-3 text-2xl font-large font-semibold font-sans text-indigo-500 lg:px-14 -translate-y-12'>Flatbed Truck</h1>
            <p className='indent-8 tracking-wide -translate-y-6'>Mobilize a Tow Truck in Lahore, Islamabad and Karachi within minutes to service your borken down vehicle.</p>
          </div>
        </div>
      </div>
      <div className='h-full w-full pt-12 p-20 bg-gray-100'>
        <div className='grid grid-cols-2 gap-5 lg:px-32'>
          <div className='lg:px-20 flex justify-center items-center'>
            <img src="/images/man.jpeg" alt="alternate text" className='h-96' />


          </div>

          <div className='grid grid-rows-2 gap-5 lg:px-20'>
            <div className='bg-white p-3 border-2 ring-gray-200 px-4 mt-9'>
              <h2 className='tracking-widest font-semibold text-lg font-sans uppercase text-indigo-500'>Not happy with traditional transporters for LCL Cargo handling!</h2>
              <p className='indent-8 tracking-wide'>Truckload offers following LCL services at affordable rates on Lahore Karachi Lane.</p>
              <li>Store to Store</li>
              <li>Door to Door</li>
              <li>Store to Door Short & Long term Warehouse Storage Facility at Affordable rates</li>
            </div>
            <div className='bg-white p-3 border-2 ring-gray-200 px-4 h-1/2 mt-8'>
              <h2 className='tracking-widest font-semibold text-lg font-sans uppercase text-indigo-500 p-3'>No Interchange of LCL cargo on trucks during the delivery Process</h2>
            </div>
          </div>
        </div>
      </div>
      <header className='text-center mx-auto mb-2 lg:px-20 mt-5'>
        <h2 className='tracking-normal font-bold text-3xl mt-4 font-sans uppercase text-black-500'>Customers</h2>
      </header>
      <div className='grid grid-cols-3'>
        <div className='mb-4 flex justify-end py-8'>
          <div className='flex justify-center items-center mt-3'>
            <img src="/images/clicky.jpeg" alt="alternate text" className='h-16' />
          </div>
        </div>
        <div className='mb-4 flex justify-center py-2'>
          <div className='flex justify-center items-center mt-3'>
            <img src="/images/gmp.jpeg" alt="alternate text" className='h-16' />
          </div>
        </div>
        <div className='mb-4 flex justify-start py-8'>
          <div className='flex justify-center items-center mt-3'>
            <img src="/images/metro.jpeg" alt="alternate text" className='h-16' />
          </div>
        </div>
      </div>
      <div className='bg-gray-100'>
        <header className='text-center mx-auto mb-2 lg:px-20 py-6'>
          <h3 className='tracking-normal font-bold text-xl mt-4 font-sans text-black-500'>Still have questions about our Intracity Services?</h3>
        </header>
        <div className='grid grid-cols-3 gap-2'>
          <div className='mb-4 flex justify-end py-8'>

          </div>
          <div className='mb-4 flex justify-center py-2'>
            <button type="submit" className='flex lg:w-1/2 md:w-full mx-auto justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-sans font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Call Us Now</button>
          </div>
          <div className='mb-4 flex justify-start py-8'>

          </div>
        </div>
      </div>
    </div>
  )
}
