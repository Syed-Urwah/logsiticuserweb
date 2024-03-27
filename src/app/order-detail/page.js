import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CallUs from '@/components/CallUs'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



export default function page() {
    return (
        <div>
            <div className='flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 md:max-w-full sm:max-w-full'>
                <div className='mx-auto w-full sm:max-w-sm lg:max-w-full mb-5'>
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Order Detail </h2>
                </div>
            </div>
            <form className='space-y-6 mb-3' action="#" method="POST">
                <div className='w-full mx-auto bg-[#F3F4F9] rounded-xl py-5 shadow-0 lg:max-w-5xl'>
                    <div className="lg:flex ms-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:ms-4 ms-4 mt-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <Label htmlFor="origin" className='text-base mt-3 lg:ms-4 ms-5 font-medium text-sm' >Origin</Label>
                        <Input id="name" required className='ml-6 lg:ml-16 w-11/12 mt-2 lg:mr-20 rounded border-1 py-1.5 text-black-900 bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:leading-6 pl-2' placeholder="Xyz Road, Riyadh, Saudia Arabia" />
                    </div>
                    <div className="lg:flex ms-5 mt-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:ms-4 ms-4 mt-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <Label htmlFor="destination" className='text-base mt-3 lg:ms-1 ms-6 font-medium text-sm' >Destination</Label>
                        <Input id="name" required className='ml-5 lg:ml-10 w-11/12 mt-2 lg:mr-20 rounded border-1 py-1.5 text-gray-900 bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:leading-6 pl-2' placeholder="Abc Road, Riyadh, Saudia Arabia" />
                    </div>
                    <div className='lg:flex ms-6'>
                        <label htmlFor="vehicle_type" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Type of vehicle</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-6">
                            <Input id="vehicle_type" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white ' placeholder="" />
                        </div>
                        <label htmlFor="total_km" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-9'> Total Km</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-8">
                            <Input id="total_km" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white ' placeholder="" />
                        </div>
                    </div>
                    <div className='lg:flex ms-6'>
                        <label htmlFor="goods_type" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Types Of Goods</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-5">
                            <Input id="goods_type" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white ' placeholder="" />
                        </div>
                        <label htmlFor="temp" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4 lg:ml-8'> Temperature</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-2">
                            <Input id="temp" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white ' placeholder="" />
                        </div>
                    </div>
                    <div className='lg:flex ms-6 mt-2'>
                        <label htmlFor="time_date" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Loading Time/Date</label>
                        <div className="p-4 w-full lg:w-4/12">
                            <Input id="time_date" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white ' placeholder="" />
                        </div>
                        <label htmlFor="no_of_labours" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-9'>No of Labours</label>
                        <div className="p-4 w-full lg:w-4/12 lg:-ml-1">
                            <Input id="no_of_labours" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white ' placeholder="" />
                        </div>
                    </div>
                    <div className='lg:flex ms-6 lg:pl-3'>
                        <label htmlFor="goods" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-2'>Goods</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-20 -ml-2">
                            <Input id="goods" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white' placeholder="" />
                        </div>
                        <label htmlFor="vehicle_no" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-10'>No of Vehicle</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-0 -ml-2">
                            <Input id="goods" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white' placeholder="" />
                        </div>
                    </div>
                    <div className='lg:flex ms-10'>
                        <label htmlFor="goods_volume" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4 lg:ml-1'> Volume of Good</label>
                        <div class="relative p-4 w-full lg:w-4/12 flex w-full lg:ml-4">
                            <span class="flex items-center whitespace-nowrap text-gray-400 rounded-s border bg-white border-e-0 border-solid border-blue-300 px-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white">KG</span>
                            <input type="text" class="lg:w-1/2 relative m-0 block flex-auto border rounded-e border-solid border-blue-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary" />
                        </div>
                        <label htmlFor="amount" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-3 lg:ml-10'>Amount</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-9 -ml-2">
                            <Input id="amounts" for="" required className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white' placeholder="" />
                        </div>
                    </div>
                    <div className="lg:flex ms-6">
                        <Label htmlFor="instructions" className='text-base mt-3 lg:ms-5 ms-5 font-medium text-sm' >Instructions</Label>
                        <Input id="instructions" required className='ml-6 lg:ml-14 w-11/12 mt-2 lg:mr-20 rounded border-1 py-1.5 text-gray-900 bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:leading-6 pl-2' placeholder="Special Instructions About Goods (If Any)" />
                    </div>

                </div>
                {/* <div className="flex justify-center py-7">
                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="py-3 px-4 rounded bg-[#6C63FF] text-white text-sm font-sans font-semibold leading-6">
                        Confirm Order
                    </button>
                </div> */}

                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex justify-center py-7">
                            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="py-3 px-4 rounded bg-[#6C63FF] text-white text-sm font-sans font-semibold leading-6">
                                Confirm Order
                            </button>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    defaultValue="@peduarte"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </form>



            <CallUs />
        </div>

    )
}
