'use client';
import OrderRating from '@/components/OrderRating';
import Stars from '@/components/Rating';
import ReadOnlyMap from '@/components/ReadOnlyMap';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { ResetAcceptOrderDrivers, ResetConfirmOrderDrivers, setOrderTrackingDriver } from '@/redux-toolkit/features/driverSlice';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function page() {
    const confirmDrivers = useSelector((state) => state.root.driverData.confirmOrderDrivers);
    const [rideComplete, setRideComplete] = useState(false);
    const router = useRouter()


    const [trackingDrivers, setTrackingDrivers] = useState([]);


    // const [driverStatus, setDriverStatus] = useState(-1);
    // const [driverLat, setDriverLat] = useState('');
    // const [driverLong, setDriverLong] = useState('');
    // const driverData = useSelector((state) => state.root.driverData.orderTrackingDriver);
    const dispatch = useDispatch();


    let orderId = '';
    useEffect(() => {

        if (confirmDrivers?.length > 0) {
            // orderId = driverData.get_order.id; 
            orderId = confirmDrivers[0].order_id;


            const intervalId = setInterval(() => {
                const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL + `/api/supplier/driver/get_single_order/${orderId}`

                const getTrackingDrivers = async () => {
                    const res = await fetch(url, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "Api-Token": process.env.NEXT_PUBLIC_API_TOKEN,
                        },
                    });

                    const driverRes = await res.json();

                    if (driverRes?.response?.response_desc === "success") {
                        setTrackingDrivers(driverRes?.result.order.get_drivers);
                    }

                    const condition = checkOrderStatus(driverRes?.result?.order.get_drivers);

                    if (condition) {
                        dispatch(ResetConfirmOrderDrivers());
                        router.push('/order-drivers-list')
                        toast({
                            title: "Ride Completed Successfull",
                            variant: "success"
                        })
                        clearInterval(intervalId);
                    }

                    // driverRes?.result?.order.get_drivers.map((driver)=>{
                    //     console.log(driver.status_id, " status_id:")
                    //     if(driver.status_id == 3 || driver.status_id == 4){ 
                    //         setRideComplete(true);
                    //         console.log(rideComplete)
                    //     }else{
                    //         setRideComplete(false);
                    //         return;
                    //     }
                    // })
                }

                getTrackingDrivers();
            }, 4000);
        }
    }, []);


    // check order status
    function checkOrderStatus(array) {
        for (const obj of array) {
            if (obj.status_id < 3) {
                return false;
            }
        }
        return true;
    }



    // just for testing purpose
    const handleOrderTracking = (driver) => {
        // dispatch(setOrderTrackingDriver(driver));
        // router.push('/order-tracking');
    }


    return (
        <div className='min-h-[80vh] '>
            <div className='w-1/3 mx-auto'>
                {
                    trackingDrivers?.length !== 0 && <div>
                        <h1 className='text-2xl ml-10 my-5 font-semibold'>Drivers Lists</h1>
                    </div>
                }
                {trackingDrivers?.length > 0 ? trackingDrivers.map((driver) => (
                    <>
                        <Dialog className="bg-white text-black rounded-xl  ">
                            <DialogTrigger key={driver?.id}>
                                <div className='flex min-h-full flex-col w-full justify-center items-center lg:px-8 md:max-w-full sm:max-w-full'>
                                    <div className='flex justify-center items-center my-3'>
                                        <div className='flex justify-around border rounded px-5 py-7 shadow-lg'>
                                            <div className='bg-[#6C63FF] p-3 rounded-full px-4'>
                                                <img src='images/location.png' />
                                            </div>
                                            <div className='px-6'>
                                                <h1 className='font-semibold'>Order #{driver?.get_driver?.id}</h1>
                                                <p className='text-gray-500'>Get Track your order.</p>
                                            </div>
                                            <div className='pl-5'>
                                                <span className='bg-[#6C63FF] text-white px-3 py-[6px] rounded-xl'>
                                                    {
                                                        driver?.status_id >= 0 && driver?.status_id < 3 && 'On going'
                                                    }
                                                    {
                                                        driver?.status_id === 3 && driver?.status_id === 4 && 'Completed'
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="bg-white sm:w-[80%]  scroll md:w-[70%] lg:w-[60%] xl:w-[80%] h-[98vh] overflow-y-auto !rounded-xl">
                                <div>
                                    <h1 className='text-center text-xl font-bold mb-5'>Track Shipment</h1>
                                </div>
                                <div className='bg-gray-100 px-5 rounded-xl'>
                                    <ReadOnlyMap driverLat={driver?.get_driver?.driver_location?.latitude} driverLong={driver?.get_driver?.driver_location?.longitude} />

                                    <div className='flex flex-col md:px-7 ' >
                                        <div className='flex items-center my-4 relative'>
                                            <span className='z-10'>
                                                {
                                                    driver?.status_id >= 0 && driver?.status_id <= 4 ?
                                                        <img src="images/0-1.png" className='w-10' />
                                                        :
                                                        <img src="images/0.png" className='w-10' />
                                                }
                                            </span>
                                            <div className='line-1'></div>
                                            <div className={`ms-5 text-[#6C63FF] font-medium ${driver?.status_id >= 0 && driver?.status_id <= 4 ? 'text-[#6C63FF]' : 'text-[#B7B4B4]'}`}>Driver Start Ride</div>
                                            <div className='!absolute top-[95%] left-[17px] bg-blue-300 w-1 h-10' />
                                        </div>
                                        <div className='flex items-center my-4 relative'>
                                            <span className='z-10'>
                                                {
                                                    driver?.status_id >= 1 && driver?.status_id <= 4 ?
                                                        <img src="images/1-2.png" className='w-10' />
                                                        :
                                                        <img src="images/1.png" className='w-10' />
                                                }
                                            </span>
                                            {/* <div className='line-1'></div> */}
                                            <div className={`ms-5 text-[#6C63FF] font-medium ${driver?.status_id >= 1 && driver?.status_id <= 4 ? 'text-[#6C63FF]' : 'text-[#B7B4B4]'}`}>Driver Arrive at pickup Location</div>

                                            <div className='!absolute top-[95%] left-[17px] bg-blue-300 w-1 h-10' />

                                        </div>
                                        <div className='flex items-center my-4 relative'>
                                            <span className='z-10'>
                                                {
                                                    driver?.status_id >= 2 && driver?.status_id <= 4 ?
                                                        <img src="images/2-3.png" className='w-10' />
                                                        :
                                                        <img src="images/2.png" className='w-10' />

                                                }
                                            </span>
                                            <div className='line-1'></div>
                                            <div className={`ms-5 text-[#6C63FF] font-medium  ${driver?.status_id >= 2 && driver?.status_id <= 4 ? 'text-[#6C63FF]' : 'text-[#B7B4B4]'}`} >Driver Pickup Ride</div>
                                            <div className='!absolute top-[95%] left-[17px] bg-blue-300 w-1 h-10' />

                                        </div>
                                        <div className='flex items-center my-4'>
                                            <span className='z-10'>
                                                {
                                                    driver?.status_id >= 3 && driver?.status_id <= 4 ?
                                                        <img src="images/3-4.png" className='w-10' />
                                                        :
                                                        <img src="images/3.png" className='w-10' />

                                                }
                                            </span>
                                            <div className={`ms-5 font-medium  ${driver?.status_id >= 3 && driver?.status_id <= 4 ? 'text-[#6C63FF]' : 'text-[#B7B4B4]'}`}>Ride Completed</div>
                                        </div>
                                    </div>
                                </div>

                                <OrderRating driver={driver} statusId={driver?.status_id} />

                            </DialogContent>
                        </Dialog>
                    </>
                )) : (
                    <h2 className='font-semibold text-2xl text-gray-400 w-full mx-auto my-5'>No Driver Selected</h2>
                )}

            </div>
        </div>
        // <div className='min-h-[80vh]'>
        //     {confirmDrivers && confirmDrivers.map((driver) => (
        //         <div key={driver?.id} onClick={()=>handleOrderTracking(driver)} className='flex min-h-full flex-col justify-center items-center px-6 py-6 lg:px-8 md:max-w-full sm:max-w-full'>
        //             <div>
        //                 <h1 className='text-center text-xl font-bold mt-5'>Order Lists</h1>
        //             </div>
        //             <div className='flex justify-center items-center mt-5 mb-5'>
        //                 <div className='flex justify-around border rounded px-5 py-7 shadow-lg'>
        //                     <div className='bg-[#6C63FF] p-3 rounded-full px-4'>
        //                         <img src='images/location.png' />
        //                     </div>
        //                     <div className='px-6'>
        //                         <h1 className='font-semibold'>Order #{driver?.order_id}</h1>
        //                         <p className='text-gray-500'>Get Track your order.</p>
        //                     </div>
        //                     <div className='pl-5'>
        //                         <span className='bg-[#6C63FF] text-white px-3 py-[6px] rounded-xl'>
        //                             {
        //                                 driver?.get_order.status_id >= 0 && driver?.get_order.status_id < 4 && 'On going'
        //                             }
        //                             {
        //                                 driver?.get_order.status_id >= 3 && driver?.get_order.status_id <= 4 && 'Completed'

        //                             }
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     ))
        //     }
        // </div>
    )
}























































// const getDriverData = async () => {

//     if (confirmDrivers) {
//         const res = await fetch(url, {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 "Api-Token": process.env.NEXT_PUBLIC_API_TOKEN,
//             },
//         });

//         const driverRes = await res.json();


//         if(driverRes?.get_order?.status_id == 3 || driverRes?.get_order?.status_id == 4){
//             clearInterval(intervalId)
//         }


//         if (driverRes?.result?.ride?.status_id == 3 || driverRes?.result?.ride?.status_id == 4) {
//             clearInterval(intervalId);
//             dispatch(ResetAcceptOrderDrivers());
//             driverRes?.get_order?.status_id == 4 && router.push("/");
//             driverRes?.get_order?.status_id == 4 && toast({
//                 title: "Ride completed Successfully",
//                 variant: "success"
//             })

//         }

//         if (driverRes?.response?.response_desc === "success" && driverData) {
//             // setDriverLat(driverRes.result.ride.get_driver.driver_location?.latitude);
//             // setDriverLong(driverRes.result.ride.get_driver.driver_location?.longitude);
//             setDriverLat(driverRes?.result.order)
//             setDriverStatus(driverRes?.get_order?.status_id);
//         }
//     }
// }
// getDriverData();
