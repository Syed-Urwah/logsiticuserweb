'use client';
import { Car, Image } from 'lucide-react'
import React, { useEffect, useState } from 'react';
import "../styles/custom.css";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CallUs from '@/components/CallUs'
import "../styles/custom.css";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import Map from '@/components/Map';
import Stars from '@/components/Rating';
import ReadOnlyMap from '@/components/ReadOnlyMap';
import { useDispatch, useSelector } from 'react-redux';
import { ResetAcceptDriver } from '@/redux-toolkit/features/driverSlice';


export default function page() {
    const [driverStatus, setDriverStatus] = useState(-1);
    const [driverLat, setDriverLat] = useState('');
    const [driverLong, setDriverLong] = useState('');
    const dispatch = useDispatch();
    const driverData = useSelector((state)=> state.root.driverData.confirmDriver); 

    let rideId='';
    // let vehicleTypeId;
    // let transportationTypeId;
    // let userTypeId;
    // let vehicleNo;
    useEffect(()=>{
        
        if(!!driverData){
             rideId = driverData.get_ride.id;
            //  vehicleTypeId = driverData.get_driver.get_vehicle.get_vehicle_type.id;
            //  transportationTypeId = driverData.get_driver.get_vehicle.transportation_type_id;
            //  userTypeId = driverData.get_driver.user_type_id;
            //  vehicleNo = driverData.get_driver.get_vehicle.vehicle_number;   
        }
        
        const intervalId = setInterval(()=>{ 
           const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL + `/api/supplier/driver/get_single_ride/${rideId}` 

            const getDriverData = async() =>{
        
              if(driverData){
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      "Api-Token": process.env.NEXT_PUBLIC_API_TOKEN,
                    },
                    // body: JSON.stringify({
                    //     user_id:userData?.id,
                    //     vehicle_type_id:vehicleTypeId,
                    //     tranportation_type_id:transportationTypeId,
                    //     user_type_id:userTypeId,
                    //     vehicle_no:vehicleNo,
                    //     lat:"",
                    //     long:""
                    // }),
                  });
        
                  const driverRes = await res.json();
                   
                  if( driverRes?.result?.ride?.status_id == 3 || driverRes?.result?.ride?.status_id == 4){
                    clearInterval(intervalId);
                    dispatch(ResetAcceptDriver()); 
                  }
        
                  if(driverRes?.response?.response_desc === "success" && driverData){ 
                    setDriverLat(driverRes.result.ride.get_driver.driver_location.latitude);
                    setDriverLong(driverRes.result.ride.get_driver.driver_location.longitude);
                    setDriverStatus(driverRes.result.ride.status_id);  
                  }
              }
            }
            getDriverData();
        },4000);
    },[]);
 

    return (
        <div>
            <div className='2xl:px-[320px] max-md:px-[20px] md:px-[120px] py-12'>
                <div>
                    <h1 className='text-center text-xl font-bold mb-5'>Track Shipment</h1>
                </div>
                <div className='bg-gray-100 px-5 rounded-xl'>
                    <ReadOnlyMap driverLat={driverLat} driverLong={driverLong}/>
                    <div className='flex flex-col md:px-7 ' >
                        <div className='flex items-center my-4'>
                            <span className='z-10'>
                                {
                                    driverStatus>=0 && driverStatus<=4 ? 
                                    <img src="images/0-1.png" className='w-10' />
                                    :
                                    <img src="images/0.png" className='w-10' />
                                }
                                </span>
                            <div className='line-1'></div>
                            <div className={`ms-5 text-[#6C63FF] font-medium ${driverStatus>=0 && driverStatus<=4 ? 'text-[#6C63FF]':'text-[#B7B4B4]'}`}>Driver Start Ride</div>
                            {/* <div className='text-gray-400 flex ms-5 text-[12px] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                <p>2020/03/21 - 09:00</p>

                            </div> */}
                        </div>
                        <div className='flex items-center my-4'>
                            <span className='z-10'>
                                {
                                    driverStatus>=1 && driverStatus<=4 ? 
                                    <img src="images/1-2.png" className='w-10' />
                                    :
                                    <img src="images/1.png" className='w-10' />

                                }
                            </span>
                            <div className='line-1'></div>
                            <div className={`ms-5 text-[#6C63FF] font-medium ${driverStatus>=1 && driverStatus<=4?'text-[#6C63FF]':'text-[#B7B4B4]'}`}>Driver Arrive at pickup Location</div>
                            {/* <div className='text-gray-400 flex ms-5 text-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                <p>2020/03/21 - 09:10</p>

                            </div> */}
                        </div>
                        <div className='flex items-center my-4'>
                            <span className='z-10'>
                                {
                                    driverStatus>=2 && driverStatus<=4 ? 
                                    <img src="images/2-3.png" className='w-10' />
                                    :
                                    <img src="images/2.png" className='w-10' />

                                }
                            </span>
                            <div className='line-1'></div>
                            <div className={`ms-5 text-[#6C63FF] font-medium  ${driverStatus>=2 && driverStatus<=4?'text-[#6C63FF]':'text-[#B7B4B4]'}`} >Driver Pickup Ride</div>

                        </div>
                        <div className='flex items-center my-4'>
                            <span className='z-10'>
                                {
                                    driverStatus>=3 && driverStatus<=4 ? 
                                    <img src="images/3-4.png" className='w-10' />
                                    :
                                    <img src="images/3.png" className='w-10' />

                                }
                                </span>
                            <div className={`ms-5 font-medium  ${driverStatus>=3 && driverStatus<=4?'text-[#6C63FF]':'text-[#B7B4B4]'}`}>Ride Completed</div>
                        </div>

                    </div>
                </div>

                <Dialog>
                    <DialogTrigger asChild>

                        <div className='flex justify-center mt-5'>
                            <button onClick={()=>{  
                    dispatch(ResetAcceptDriver()); }} className='py-3 px-8 rounded-xl bg-[#6C63FF] text-white'>Done</button>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white">
                        <DialogHeader>
                            <DialogTitle className='flex justify-center text-gray-400'>Order # 30528</DialogTitle>
                        </DialogHeader>

                        <div className='flex gap-3 bg-gray-300 px-2 py-3 w-full'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src="/images/circle.png" className="w-4 h-4 ms-[2px] z-10" />
                                <span className='text-xl my-[-4px]'>|</span>
                                <img src="/images/tracking.png" className='w-5 h-5 z-10	' />
                            </div>
                            <div className='flex flex-col font-semibold'>
                                <span className='ms-2 mb-1'>Origin Location</span>
                                <span className='border-b-[2px] border-black w-[320px] max-sm:w-[400px]'></span>
                                <span className='ms-2 mt-1'>Destination Location</span>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex justify-between'>
                                <span>Sub-Total</span>
                                <span>295 SAR</span>
                            </div>
                            <div className='flex justify-between'>
                                <span>Platform Fee</span>
                                <span>25 SAR</span>
                            </div>
                        </div>

                        <div className='border-b-[2px] border-[#83b2f0]'></div>

                        <div className='flex flex-col'>
                            <div className='flex justify-between font-semibold'>
                                <span>Cash Payable</span>
                                <span>320 SAR</span>
                            </div>
                        </div>

                        
                        <Stars iconSize={50} defaultRating={3.5} />

                        <div className="flex justify-center">
                            <button type="submit" className="py-3 px-4 rounded bg-[#6C63FF] text-white text-sm font-sans font-semibold leading-6">
                                Go Now
                            </button>
                        </div>

                    </DialogContent>
                </Dialog>


            </div>
            <CallUs />
        </div>
    )
}
