import React, { useState } from 'react'
import Stars from './Rating';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Textarea } from "@/components/ui/textarea"
import { ResetAcceptOrderDrivers } from '@/redux-toolkit/features/driverSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'; 
import { useToast } from './ui/use-toast';

const RideRating = ({ driver, statusId }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {toast} = useToast();
    const [commRating, setCommRating] = useState(0);
    const [deliveryRating, setDeliveryRating] = useState(0);
    const [allRating, setAllRating] = useState(0);
    const [comment, setComment] = useState("");

    console.log("driver in ride: ",driver)


    const handleDriverRating = async () => {
        const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api/customer/booking_rides/add_review";
        let bodyData = {
            ride_id: driver?.id,
            // driver_id: driver?.driver_id,
            delivery_rating: deliveryRating,
            communication_rating: commRating,
            overall_rating: allRating,
            comment,
        }



        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Api-Token": process.env.NEXT_PUBLIC_API_TOKEN
            },
            body: JSON.stringify(bodyData)
        });

        const data = await res.json();

        if(res.ok){
            router.push('/');
            toast({
                title: "Ride Completed",
                variant: "success"
            })
        }
    }

    return (
        <div>
            <Dialog className='border-2 border-red-500'>
                <DialogTrigger asChild>
                    <div className='flex justify-center mt-5'>
                        {
                            statusId >= 3  ?
                                <button onClick={() => {
                                    dispatch(ResetAcceptOrderDrivers());
                                }} className='py-3 px-8 rounded-xl bg-[#6C63FF] text-white'>Done</button>
                                :
                                <button
                                disabled
                                //  onClick={() => {
                                //     dispatch(ResetAcceptOrderDrivers());

                                // }} 
                                className='py-3 px-8 cursor-not-allowed rounded-xl bg-[#a5a1f7] text-white'>Done</button>
                        }
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white !rounded-[8px]">
                    <DialogHeader>
                        <DialogTitle className='flex justify-center'>Order #{driver?.get_driver?.id}</DialogTitle>
                    </DialogHeader>
                    <div className="border-b-2 border-blue-300 " />

                    {/* <div className='flex gap-3 bg-gray-300 px-2 py-3 w-full'>
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
                    </div> */}

                    <div className="flex flex-col ">
                        <div className="text-center">
                            <h3 className='text-gray-600'>Communication Rating</h3>
                            <Stars iconSize={50} defaultRating={0} setRat={setCommRating} />
                        </div>
                        <div className="text-center">
                            <h3 className='text-gray-600'>Delivery Rating</h3>
                            <Stars iconSize={50} defaultRating={0} setRat={setDeliveryRating} />
                        </div>
                        <div className="text-center">
                            <h3 className='text-gray-600'>Overall Rating</h3>
                            <Stars iconSize={50} defaultRating={0} setRat={setAllRating} />
                        </div>
                        <div className="">


                            <div className="grid w-full gap-2 border-none">
                                <Textarea placeholder="Type your message here." onChange={(e) => setComment(e.target.value)} className="rounded-mid border-indigo-400 resize-none" />
                            </div>


                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button onClick={handleDriverRating} type="submit" className="py-2 w-full px-3 rounded bg-[#6C63FF] hover:bg-[#574eff] text-white">
                            Submit
                        </button>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default RideRating;