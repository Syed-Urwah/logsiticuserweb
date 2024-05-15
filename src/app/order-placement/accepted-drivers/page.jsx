'use client';
import { ResetAcceptOrderDrivers, ResetConfirmDriver, ResetConfirmOrderDrivers, setConfirmOrderDrivers } from '@/redux-toolkit/features/driverSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const AcceptedDriversList = () => {
    const acceptedDrivers = useSelector((state) => state.root.driverData.acceptedOrderDrivers);
    const noOfVehicles = useSelector((state) => state.root.driverData.noOfOrderVehicles);
    const confirmDriversList = useSelector((state) => state.root.driverData.confirmOrderDrivers);
    let confirmLength = confirmDriversList?.length;
    
    
    // const [noOfVehicles, setNoOfVehicles] = useState(0);
    const dispatch = useDispatch();
    const router = useRouter();

    // const queryString = new URLSearchParams(window.location.search);
    // const id = queryString.get("id");


    // useEffect(() => {
    //     if (id) {
        //         setNoOfVehicles(+id)
    //     }
    // }, [id]);
    
    
    // let ordersLength = 0;
    //     useEffect(()=>{
        //         if(confirmDriversList?.length > 0){
            //             ordersLength = confirmDriversList.length;
            //         }
            //     },[confirmDriversList]);
            
            const handleConfirmDriver = async (driver) => {
                
                const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api/customer/order/accept_ride";
                
                const res = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Api-Token": process.env.NEXT_PUBLIC_API_TOKEN,
            },
            body: JSON.stringify({
                order_id: driver?.order_id,
                driver_id: driver?.driver_id,
                customer_id: driver?.get_order.customer_id
            }),
        });

        let acceptOrder = await res.json();

        if (acceptOrder.response.response_desc === 'Success') {

            // set confirm driver state
            let tempConfirmDrivers = [];
            if (confirmDriversList?.length > 0) {
                tempConfirmDrivers = [...confirmDriversList, driver];
            } else {
                tempConfirmDrivers = [driver];
            }
            dispatch(setConfirmOrderDrivers(tempConfirmDrivers));
            confirmLength = confirmLength + 1;
        }

 
        // console.log(noOfVehicles, " == ", confirmLength)
        // console.log("updated: ");
        // console.log(noOfVehicles, " == ", confirmLength + 1)

        if (noOfVehicles == confirmLength) {
            router.push('/order-drivers-list');
            dispatch(ResetAcceptOrderDrivers());
        }
    }


    return (
        <div className='min-h-[60vh] py-5'>
            {
                !!noOfVehicles && acceptedDrivers?.length > 0 && (
                    <h2 className="w-1/3 mx-auto text-2xl font-semibold py-2">Accepted Drivers List </h2>
                )
            }
            <div className='w-1/3 h-full mx-auto flex flex-col gap-3'>
                {
                    !!noOfVehicles && acceptedDrivers && acceptedDrivers?.length > 0 ? acceptedDrivers.map((driver) => (
                        <div key={driver.id} className="shadow-md w-full rounded-xl flex items-center justify-between p-2 border">
                            <div className="">
                                <img src={driver?.get_driver?.profile_image} alt='driver' className='w-16 h-16 rounded-full' />
                            </div>
                            <div className="">
                                <h2>{driver.get_driver.username}</h2>
                                <h3>{driver.get_driver?.get_vehicle?.get_vehicle_type?.name ? driver.get_driver.get_vehicle.get_vehicle_type.name : 'no vehicle'}</h3>
                                <h3>Rating</h3>
                                <h3>SR 290</h3>
                            </div>
                            <div className="flex flex-col gap-2 w-[27%]">
                                <button onClick={() => handleConfirmDriver(driver)} className="py-2 px-5 w-full mx-auto block rounded-xl  hover:bg-[#4942cb] bg-[#6C63FF] text-white font-sans ">
                                    Accept
                                </button>
                                <button className="py-2 px-5 w-full mx-auto block rounded-xl hover:bg-[#4942cb] bg-[#6C63FF] text-white font-sans font-medium">
                                    Decline
                                </button>
                            </div>
                        </div>
                    )) : (
                        <h2 className='font-bold text-3xl text-gray-300 mt-4 '>Proccessing</h2>
                    )
                }
            </div>

        </div>
    )
}

export default AcceptedDriversList