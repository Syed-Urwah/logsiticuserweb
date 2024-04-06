import React from 'react'
import CallUs from '@/components/CallUs';

export default function page() {
  return (
    <div>
      <div className='bg-[#F3F4F9]'>
        <h1 className='flex justify-center md:pt-10 pt-10 font-bold lg:text-5xl text-3xl'>Navigating the Roads with Apaale:</h1>
        <h1 className='flex justify-center pt-4 font-bold lg:text-5xl text-3xl'>A Closer Look at Their Ride Services</h1>
        <p className='mt-8 px-6 xl:px-28 lg:px-20 md:px-16 mb-8 text-justify tracking-wide pb-5'>Ride services, such as those provided by it, have made it simpler than ever to go from point A to point B in today's hectic environment.
          You've probably come across Apaale's slick app or website if you've ever needed a short trip across town or a dependable way to get about
          regularly. Convenience is the main focus of Apaale's ride services. The days of impatiently waiting for public transit or standing on street corners
          flagging down cabs are long gone. With Apaale, you may call a ride to your doorstep with only a few taps on your smartphone.</p>
      </div>
      <div className='lg:flex md:flex flex-row w-full mb-6 lg:px-0 px-6'>
        <div className='lg:w-1/2 xl:mt-8 xl:px-28 lg:px-20 md:px-10 w-full lg:mt-8 md:full'>
          <h1 className='flex font-bold text-4xl'>Apaale: Logistics</h1>
          <h1 className='flex font-bold text-4xl'>Solution Provider</h1>
          <p className='mt-8 text-justify tracking-wide lg:w-3/2'>Apaale is a leading provider of logistics solutions in addition to transportation services. Apaale is a logistics company that
            specializes in effectively organizing the transportation of commodities and products from one location to another. Whether it's
            moving cargo between warehouses or delivering items to consumers' doorsteps, Apaale guarantees safe and prompt delivery at every
            stage. Apaale streamlines supply chain management by utilizing cutting-edge tracking technology and a committed staff of logistics
            specialists. This frees up businesses to concentrate on their core competencies, leaving the logistics to the pros.
          </p>
        </div>
        <div className='lg:w-2/5 rounded-xl h-[437px] bg-[#D9D9D9] md:mt-8 w-full lg:mt-8 mt-6 md:w-full'></div>
      </div>
      <div className='bg-[#F3F4F9]'>
        <header className='text-center mx-auto mb-12 lg:px-20'>
          <h2 className='tracking-normal font-bold text-3xl mt-4 font-sans text-black-500 pt-10'>Our Ride Offerings</h2>
        </header>
        <div className='h-full xl:w-5/6 mx-auto pt-8 p-20 mb-5'>
          <div className='grid gap-14 md:grid-cols-3 md:gap-5'>
            <div className='rounded-2xl p-6 text-center ring-indigo-300 ring-4 ring-inset'>
              <h1 className='text-darken text-2xl font-large font-semibold font-sans lg:px-14 mb-4'>Standard Vehicle <br /> Trips</h1>
              <p className='tracking-wide text-justify pt-4 text-lg'>Providing comfort and dependability for travellers on the go, Apaale's standard vehicle trips address daily commuting demands.</p>
            </div>
            <div className='rounded-2xl p-6 text-center ring-indigo-300 ring-4 ring-inset'>
              <h1 className='text-2xl font-large font-semibold font-sans lg:px-14 mb-4'>Luxurious Vehicle <br /> Options</h1>
              <p className='tracking-wide text-justify pt-4 text-lg'>Apaale offers a selection of luxurious vehicles that are ideal for special events. These options will enhance your trip experience.</p>
            </div>
            <div className='rounded-2xl p-6 text-center ring-indigo-300 ring-4 ring-inset'>
              <h1 className='text-darken text-2xl font-large font-semibold font-sans lg:px-10 mb-4'>Other Modes of <br />Transportation</h1>
              <p className='tracking-wide text-justify pt-4 text-lg'>Apaale expands its services to include short-distance bike rides and electric scooter rentals for urban exploration, and embracing convenient.</p>
            </div>
          </div>

          <div className='grid gap-14 md:grid-cols-2 md:gap-5 mt-16 lg:px-48'>
            <div className='rounded-2xl p-6 text-center ring-indigo-300 ring-4 ring-inset'>
              <h1 className='text-darken text-2xl font-large font-semibold font-sans lg:px-14 mb-4'>Group Transportation <br /> Services</h1>
              <p className='tracking-wide text-justify pt-4 text-lg'>Apaale offers smooth transportation options for gatherings of all kinds, making sure that everyone gets there on time and together.</p>
            </div>
            <div className='rounded-2xl p-6 text-center ring-indigo-300 ring-4 ring-inset'>
              <h1 className='text-darken text-2xl font-large font-semibold font-sans lg:px-14 mb-4'>Truck  <br /> Services</h1>
              <p className='tracking-wide text-justify pt-4 text-lg'>Apaale provides truck services to companies in need of logistical assistance, enabling the effective transportation of commodities and products between sites. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-20 px-5 sm:px-10 md:px-20 py-6">
        <h2 className='text-3xl mb-10 font-bold text-center'>Why Choose Us?</h2>

        <div className=" p-2 mt-7  pb-14 grid grid-cols-1 gap-5 sm:gap-0 sm:grid-cols-2">

          <div className="sm:border-b-2 sm:border-r-2 sm:pr-7 sm:pb-5 border-[#29B473]/30 ">
            <h3 className='text-[#6C63FF] font-bold mb-2 '>Variety of Ride Services</h3>
            <p className='text-[#7D7D7E] text-justify'>One of the many possible modes of transportation is Apaale's ride services. Users of Apaale can select from a variety of cars to meet their requirements and tastes.</p>
          </div>

          <div className="border-b-2 border-t-2 sm:border-t-0 pb-5 pt-5 sm:pt-0 sm:pl-7 sm:pb-5 border-[#29B473]/30 ">
            <h3 className='text-[#6C63FF] font-bold mb-2'>Measures for Safety and Security</h3>
            <p className='text-[#7D7D7E] text-justify'>Safety is the top priority when it comes to transportation services, and we take this duty very seriously. All drivers must pass extensive background checks and vehicle inspections to be accepted by Apaale, which has very high criteria for safety. </p>
          </div>

          <div className="sm:border-r-2 border-b-2 sm:border-b-0 pb-5 sm:pb-0 sm:pt-5 pr-7 border-[#29B473]/30">
            <h3 className='text-[#6C63FF] font-bold mb-2'>A Smooth Booking Process</h3>
            <p className='text-[#7D7D7E] text-justify'>Apaale makes it simple to book a ride. Open the app, choose your desired car type, input your pickup and destination locations, and that's it! You'll be paired with a driver in your area who is prepared to take you there in a matter of seconds.</p>
          </div>

          <div className="sm:pt-5 sm:pl-7">
            <h3 className='text-[#6C63FF] font-bold mb-2'>Transparent Pricing</h3>
            <p className='text-[#7D7D7E] text-justify'>Apaale offers up-front cost estimates that take demand and distance into account. This openness not only encourages confidence and loyalty among Apaale's clientele but also aids consumers in more efficiently budgeting their transportation costs.</p>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-10 md:px-20 xl:px-52 bg-[#F3F4F9] py-16">
        <p className='text-center text-lg sm:text-xl'>We make sure that getting around is never difficult. By offering a wide variety of transit choices, a smooth booking process, strong security features, and open pricing, Apaale is laying the groundwork for a time when travelling from point A to point B will only require pressing a button on your smartphone. So why not give Apaale the wheel the next time you need a ride?</p>
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

      <CallUs />
    </div>
  )
}
