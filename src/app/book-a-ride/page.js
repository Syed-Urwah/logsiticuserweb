"use client";

import * as React from "react"
import "../styles/custom.css";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CallUs from "@/components/CallUs"

export default function page() {
  const [bookaRide, setRide]= useState ({
    user_id:"",
    no_of_person: "",
    vehicle_list: "",
    contact_info: "",
    total_km:"",
    origin:"",
    destination: "",
    amount: "",
  });
  
  const handleRide = async (e) => {
    e.preventDefault();
    console.log(bookaRide)

    const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api/customer/booking_rides/search_driver'

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                // "X-CSRF-TOKEN": csrfToken,
                "Api-Token": "N5ORjSS300F4fcZ3eq69rLShvgwnjchQg7Vmt5N753Sy"
            },
            body: JSON.stringify(bookaRide)
        });
    
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    

    
  }
  return (
    <div>
      <div className="2xl:px-[320px] xl:px-[120px] max-xl:px-[100px] my-7">
        <div className="mx-auto w-full sm:max-w-sm lg:max-w-full mb-5">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">BOOK A RIDE</h2>
        </div>
        <form onSubmit={handleRide} className="pt-3 px-2 text-gray-400">

          <Card className="w-full py-6 bg-gray-50 rounded-xl">
            <CardContent>
              <div className="grid w-full  items-center gap-4">
              <div className="flex max-lg:flex-col md:justify-between">
                  <div className="flex  items-center  max-sm:flex-col text-nowrap space-y-1.5">
                    <Label htmlFor="persons" className='text-base sm:me-8'>User Id</Label>
                    <Input id="user_id"  type="text" required className='lg:w-[250px] xl:w-[300px] max-lg:ms-7 sm:ms-7 max-sm:ms-2 border-[2px] rounded border-blue-300 ' placeholder="Name of your project" 
                     onChange={(e)=> {
                      setRide((prev) => ({
                        prev,
                        user_id: e.target.value,
                      }));
                    }}/>
                  </div>
                </div>

                <div className="flex max-lg:flex-col md:justify-between">
                  <div className="flex  items-center max-sm:flex-col  text-nowrap space-y-1.5">
                    <Label htmlFor="persons" className='text-base'>No of Persons</Label>
                    <Input id="no_of_person"  type="text" required className='lg:w-[250px] xl:w-[300px] sm:ms-4 border-[2px] rounded border-blue-300  ' placeholder="Name of your project" 
                    onChange={(e)=> {
                      console.log(e.target.value)
                      setRide((prev) => ({
                        prev,
                        no_of_person: e.target.value,
                      }));
                    }}
                    />
                  </div>
                  <div className="flex items-center max-sm:flex-col text-nowrap space-y-1.5 max-lg:mt-4">
                    <Label htmlFor="persons" className='text-base'>Vehicle's List</Label>
                    <Input id="vehicle_list"  type="text" required className='lg:w-[250px] xl:w-[300px] sm:ms-6 border-[2px] rounded border-blue-300 ' placeholder="Name of your project" 
                      onChange={(e)=>{
                        console.log(e.target.value)
                        setRide((prev) => ({
                            ...prev,
                            vehicle_list: e.target.value,
                          }));
                      }} 
                    />
                  </div>
                </div>

                <div className="flex max-lg:flex-col md:justify-between">
                  <div className="flex  items-center  max-sm:flex-col text-nowrap space-y-1.5">
                    <Label htmlFor="persons" className='text-base'>Contact Info</Label>
                    <Input id="contact_info"  type="text" required className='lg:w-[250px] xl:w-[300px] max-lg:ms-7 sm:ms-7 max-sm:ms-2 border-[2px] rounded border-blue-300 ' placeholder="Name of your project" 
                     onChange={(e)=> {
                      console.log(e.target.value)
                      setRide((prev) => ({
                        prev,
                        contact_info: e.target.value,
                      }));
                    }}
                    />
                  </div>
                  <div className="flex items-center max-sm:flex-col text-nowrap space-y-1.5 max-lg:mt-4">
                    <Label htmlFor="persons" className='text-base'>Total Km</Label>
                    <Input id="total_km"  type="text" required className='lg:w-[250px] xl:w-[300px] sm:ms-14 max-sm:ms-3 border-[2px] rounded border-blue-300 ' placeholder="Name of your project" 
                     onChange={(e)=> {
                      console.log(e.target.value)
                      setRide((prev) => ({
                        prev,
                        total_km: e.target.value,
                      }));
                    }}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:justify-between">

                  <div className="flex  items-center  max-sm:flex-col text-nowrap space-y-1.5">
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    </span>
                    <Label htmlFor="persons" className='text-base sm:me-6' >Origin</Label>
                    <Input id="origin"  type="text" required className='  max-lg:ms-7 sm:ms-7 max-sm:ms-2 border-[2px] rounded border-blue-300 ' placeholder="Name of your project" 
                     onChange={(e)=> {
                      console.log(e.target.value)
                      setRide((prev) => ({
                        prev,
                       origin: e.target.value,
                      }));
                    }}
                    />
                  </div>
                  <div className="flex  items-center mt-4  max-sm:flex-col text-nowrap space-y-1.5">
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    </span>
                    <Label htmlFor="persons" className='text-base'>Destination</Label>
                    <Input id="destination"  type="text" required className=' max-lg:ms-7 sm:ms-3  max-sm:ms-2 border-[2px] rounded border-blue-300 ' placeholder="Name of your project" 
                     onChange={(e)=> {
                      console.log(e.target.value)
                      setRide((prev) => ({
                        prev,
                        destination: e.target.value,
                      }));
                    }}
                    />

                  </div>

                </div>

                <div className="flex max-lg:flex-col md:justify-between">
                  <div className="flex  items-center  max-sm:flex-col text-nowrap space-y-1.5">
                    <Label htmlFor="persons" className='text-base sm:me-8'>Amount</Label>
                    <Input id="amount"  type="text" required className='lg:w-[250px] xl:w-[300px] max-lg:ms-7 sm:ms-7 max-sm:ms-2 border-[2px] rounded border-blue-300 ' placeholder="Name of your project" 
                     onChange={(e)=> {
                      console.log(e.target.value)
                      setRide((prev) => ({
                        prev,
                        amount: e.target.value,
                      }));
                    }}/>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center my-7">
            <button type="submit" className="py-3 px-4 rounded-xl bg-[#6C63FF] text-white">
              Confirm Ride
            </button>
          </div>


        </form>
      </div>

      <CallUs />
    </div>
  )
}
