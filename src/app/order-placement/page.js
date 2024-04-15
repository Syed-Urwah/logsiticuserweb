import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CallUs from '@/components/CallUs'
import "../styles/custom.css";



export default function page() {
    return (
        <div>
            <div className='flex min-h-full flex-col justify-center px-6 py-5 lg:px-8 md:max-w-full sm:max-w-full'>
                <div className='mx-auto w-full sm:max-w-sm lg:max-w-full mb-5'>
                    <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Order Placement </h2>
                </div>
            </div>
            <form className='space-y-6 mb-3' action="#" method="POST">
                <div className='w-full mx-auto bg-[#F3F4F9] rounded-xl py-5 shadow-0 lg:max-w-5xl'>
                    <div className='lg:flex ms-6'>
                        <label htmlFor="goodsType" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Types Of Goods</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ms-4">
                            <select id="goodsType" name="goodsType" className="leading-9 w-full h-full outline-none rounded border-0 py-2.5 text-gray-900 shadow-sm bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:leading-6 pl-2' placeholder='Enter Your Email Address">
                                <option>Non-Frozen</option>
                                <option>Frozen</option>
                            </select>
                        </div>
                        <label htmlFor="temperature" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4 lg:ml-11'> Temperature</label>
                        <div className="p-4 w-full lg:w-4/12">
                            <select id="temperature" name="temperature" className=" w-full h-full outline-none rounded border-0 py-1.5 text-gray-900 shadow-sm bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' placeholder='Enter Your Email Address">
                                <option>A</option>
                                <option>C</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:flex ms-6'>
                        <label htmlFor="vehicle_type" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Type of vehicle</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ms-4">
                            <select id="vehicle_type" name="vehicle_type" className="lg:ml-2 w-full h-full outline-none rounded border-0 py-2.5 text-gray-900 shadow-sm bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' placeholder='Enter Your Email Address">
                                <option>Cargo Van</option>
                                <option>Cargo Truck</option>
                            </select>
                        </div>
                        <label htmlFor="total_km" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-12'> Total Km</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-7">
                            <Input id="total_km" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white ' placeholder="100" />
                        </div>
                    </div>
                    <div className="flex lg:ms-5 mt-3">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 lg:ms-4 ms-4 mt-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <div className='line-3'></div>
                        <Label htmlFor="origin" className='text-base mt-3 lg:ms-4 font-medium lg:text-sm text-xs' >Origin</Label>
                        <Input id="origin" required className='ml-11 lg:ml-16 w-9/12 lg:w-11/12 mt-2 lg:mr-20 rounded border-1 py-1.5 text-gray-900 bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:leading-6 pl-2' placeholder="Enter Origin Location" />
                    </div>
                    <div className="flex lg:ms-5 mt-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 lg:ms-4 ms-4 mt-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <Label htmlFor="destination" className='text-base mt-3 lg:ms-1 font-medium lg:text-sm text-xs' >Destination</Label>
                        <Input id="destination" required className='ml-4 lg:ml-10 w-9/12 lg:w-11/12 mt-2 lg:mr-20 rounded border-1 py-1.5 text-gray-900 bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:leading-6 pl-2' placeholder="Enter Destination Location" />
                    </div>
                    <div className='lg:flex ms-6 mt-2'>
                        <label htmlFor="loading-time" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Loading Time/Date</label>
                        <div className="p-4 w-full lg:w-4/12">
                            <input
                                type="datetime-local"
                                id="loading-time"
                                name="loading-time"
                                className="lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white p-2 w-full"
                                placeholder="YYYY-MM-DDTHH:MM"
                                required
                            />
                        </div>
                        <label htmlFor="labours" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-9'>No of Labours</label>
                        <div className="p-4 w-full lg:w-4/12">
                            <Input id="labours" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white ' placeholder="100" />
                        </div>
                    </div>
                    <div className='lg:flex ms-6'>
                        <label htmlFor="goods_volume" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4 lg:ml-4'> Volume of Good</label>
                        <div className="relative p-4 w-full lg:w-4/12 flex w-full lg:ml-5">
                            <span className="flex items-center whitespace-nowrap text-gray-400 rounded-s border bg-white border-e-0 border-solid border-blue-300 px-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white">KG</span>
                            <input type="text" id='goods_volume' className="lg:w-1/2 relative m-0 block flex-auto border rounded-e border-solid border-blue-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary" />
                        </div>
                        <label htmlFor="vehicle_no" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-9'>No of Vehicle</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-1">
                            <select id="vehicle_no" name="vehicle_no" className=" w-full h-full outline-none rounded border-0 py-2.5 text-gray-900 shadow-sm bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' placeholder='Enter Your Email Address">
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:flex ms-10 lg:ml-12'>
                        <label htmlFor="amount" className='mt-5 block text-sm font-medium leading-6 text-gray-900 lg:-ml-3'>Amount</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-20 -ml-4">
                            <Input id="amount" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white' placeholder="100" />
                        </div>
                        <label htmlFor="photo" className='mt-5 block text-sm font-medium leading-6 text-gray-900 lg:ml-12'>
                            Add Photo
                        </label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-4 relative">
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                                accept="image/*"
                                className="lg:ml-1 -ml-4 w-full h-full rounded border-1 py-1.5 text-gray-900 shadow-sm bg-white border-blue-300 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 opacity-1"
                            />
                        </div>

                    </div>
                    <div className="lg:flex ms-6">
                        <Label htmlFor="instructions" className='text-base mt-3 lg:ms-4 ms-5 font-medium text-sm' >Instructions</Label>
                        <Input id="instructions" type='text' required className='ml-4 lg:ml-16 w-11/12 mt-2 lg:mr-20 rounded border-1 py-1.5 text-gray-900 bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:leading-6 pl-2' placeholder="Special Instructions About Goods (If Any)" />
                    </div>

                </div>
                <div className="flex justify-center py-6">
                    <button type='submit' className="py-3 px-4 rounded bg-[#6C63FF] text-white text-sm font-sans font-semibold leading-6 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        View Order
                    </button>
                </div>

            </form>
            <CallUs />
        </div>
    )
}
