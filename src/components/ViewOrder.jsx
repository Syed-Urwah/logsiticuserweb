"use client" 
import React from 'react' 
 

const ViewOrder = ({ orderDetails, handleSubmit, vehicleType, goodType }) => {

    console.log("good type: ", goodType);

    const { origin, destination, total_km, volume_of_good_kg, loading_date_time, no_of_vehicles,no_of_labours, type_of_good_id, vehicle_type_id, temperature } = orderDetails


    return (
        <div className='p-4'>
            <h1 className='text-2xl sm:text-3xl  text-center font-sans font-bold mb-4'>Order Placement</h1> 
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className='text-xl text-gray-400 font-sans font-semibold pl-7'>Address of Order</h1>
                    <div className='flex gap-3 pt-2'>
                        <div className="flex flex-col items-center gap-1 mt-1.5">
                            <img src="/icons/location.png" className='w-4' alt="location" />
                            <img src="/icons/vline.png" className='h-9' alt="location" />
                            <img src="/icons/location.png" className='w-4' alt="location" />
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div>
                                <h3 className='font-semibold text-indigo-5s00'>Origin</h3>
                                <p className='text-gray-600'>{origin}</p>
                            </div>
                            <div>
                                <h3 className='font-semibold text-indigo-5s00'>Destination</h3>
                                <p className='text-gray-600'>{destination}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='text-xl text-gray-400 font-sans font-semibold pl-7'>Order Details</h1>

                <div className="flex items-center">

                    <div className="flex items-start gap-2 w-1/2">
                        <img src="/icons/search-content.png" className='object-contain pt-1.5' alt="search" />
                        <div>
                            <h3 className='font-semibold'>
                                Total Km
                            </h3>
                            <p className='text-gray-600'>{total_km} Km</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src="/icons/search-content.png" className='object-contain pt-1.5' alt="search" />
                        <div>
                            <h3 className='font-semibold'>
                                Temperaure Requirements
                            </h3>
                            <p className='text-gray-600'>{temperature} C</p>
                        </div>
                    </div>

                </div>
                {/* type of goods and vehicles */}
                <div className="flex items-center">

                    <div className="flex items-start gap-2 w-1/2">
                        <img src="/icons/search-content.png" className='object-contain pt-1.5' alt="search" />
                        <div>
                            <h3 className='font-semibold'>
                                Types of Vehicle
                            </h3>
                            <p className='text-gray-600'>{vehicleType}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src="/icons/delivery.png" className='object-contain pt-1.5' alt="search" />
                        <div>
                            <h3 className='font-semibold'>
                                Types of Good
                            </h3>
                            <p className='text-gray-600'>{goodType}</p>
                        </div>
                    </div>

                </div>

              
                {/* Goods types and no.of vehicles */}
                <div className="flex items-center">
                    <div className="flex items-start w-1/2 gap-2">
                        <img src="/icons/weight-scale.png" className='object-contain pt-1.5' alt="search" />
                        <div>
                            <h3 className='font-semibold'>
                                Volume of Goods
                            </h3>
                            <p className='text-gray-600'>{volume_of_good_kg}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src="/icons/delivery.png" className='object-contain pt-1.5' alt="search" />
                        <div>
                            <h3 className='font-semibold'>
                                Number of Vehicles
                            </h3>
                            <p className='text-gray-600'>{no_of_vehicles}</p>
                        </div>
                    </div>
                </div>

                  {/* loading time and goods */}
                  <div className='flex items-center'>
                    <div className="flex w-1/2 items-start gap-2">
                        <img src="/icons/search-content.png" className='object-contain pt-1.5' alt="search" />
                        <div>
                            <h3 className='font-semibold'>
                                Loading Time
                            </h3>
                            <p className='text-gray-600'>{loading_date_time}</p>
                        </div>
                    </div>
                    {/* <div className="flex items-start gap-2">
                        <img src="/icons/search-content.png" className='object-contain pt-1.5' alt="search" />
                        <div>
                            <h3 className='font-semibold'>
                                No of Labours
                            </h3>
                            <p className='text-gray-600'>{no_of_labours}</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <button onClick={handleSubmit} className="py-3 px-4 mt-20 w-1/4 mx-auto block rounded   bg-[#564dff] text-white text-sm font-sans font-semibold leading-6 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                Confirm Order
            </button>

        </div>
    )
}

export default ViewOrder


