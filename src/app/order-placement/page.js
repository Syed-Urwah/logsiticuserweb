"use client";

import React from 'react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CallUs from '@/components/CallUs';
import "../styles/custom.css";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
  import Map from "@/components/Map";
  import { DialogClose } from "@radix-ui/react-dialog";



export default function page() {

    const [orderPlacement, setOrder]= useState({
        type_of_good_id: "",
        temperature: "",
        vehicle_type_id: "",
        // user_pickup_lat: "",
        // user_pickup_lng: "",
        // user_dropoff_lat: "",
        // user_dropoff_lng: "",
        total_km: "",
        origin: "",
        destination: "",
        loading_date_time: "",
        no_of_labours: "",
        volume_of_good_kg: "",
        no_of_vehicles: "",
        amount: "",
        photo: "",
        special_instruction: "",
        customer_id: "1",

    });

    const [origin ,setOrigin] = useState('')
    const [pickupLat, setPickupLat] = useState(0)
    const [pickupLng, setPickupLng] = useState(0)

    const [destination, setDestination] = useState ('')
    const [dropoffLat, setDropoffLat] = useState (0)
    const [dropoffLng, setDropoffLng] = useState (0)

    const [vehicleTypes, setVehicleTypes] = useState({
        data: [],
        loading: true,
      });
    
      const fetchVehicleType = async () => {
        const url =
          process.env.NEXT_PUBLIC_SERVER_BASE_URL +
          "/api/setting/vehicle_type/get_by_transportation_type/2";
        setVehicleTypes((prev) => ({
          ...prev,
          loading: true,
        }));
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              // "Accept": "application/json",
              "Content-Type": "application/json",
              "Api-Token": "N5ORjSS300F4fcZ3eq69rLShvgwnjchQg7Vmt5N753Sy",
            },
          });
    
          const data = await response.json();
    
          setVehicleTypes((prev) => ({
            ...prev,
            data: data.result.vehicle_types,
          }));
    
          console.log(data);
          setVehicleTypes((prev) => ({
            ...prev,
            loading: false,
          }));
        } catch (error) {
          console.log(error);
    
        }
      };

      const [goodsTypes, setGoodsTypes] = useState({
        data: [],
        loading: true,
      });
    
      const fetchGoodsType = async () => {
        const url =
          process.env.NEXT_PUBLIC_SERVER_BASE_URL +
          "/api/setting/type_of_good/get_all";
        setGoodsTypes((prev) => ({
          ...prev,
          loading: true,
        }));
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              // "Accept": "application/json",
              "Content-Type": "application/json",
              "Api-Token": "N5ORjSS300F4fcZ3eq69rLShvgwnjchQg7Vmt5N753Sy",
            },
          });
    
          const data = await response.json();
    
          setGoodsTypes((prev) => ({
            ...prev,
            data: data.result.type_of_goods,
          }));
    
          console.log(data);
          setGoodsTypes((prev) => ({
            ...prev,
            loading: false,
          }));
        } catch (error) {
          console.log(error);
    
        }
      };
    


    const handleOrder = async (e) => {
        e.preventDefault();
        console.log(orderPlacement);

        setOrder((prev)=>({
            ...prev, 
            user_pickup_lat: pickupLat,
            user_pickup_lng: pickupLng
          }))

          setOrder((prev) => ({
            ...prev,
            user_dropoff_lat: dropoffLat,
            user_dropoff_lng: dropoffLng
          }))
      
          const bodyData = orderPlacement;
          bodyData.user_pickup_lat = "34.0363243";
          bodyData.user_pickup_lng = "71.6418583";
          bodyData.user_dropoff_lat = dropoffLat;
          bodyData.user_dropoff_lng = dropoffLng;
    
        const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api/customer/order/search_driver'
    
        try {
          console.log(bodyData);
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    // "X-CSRF-TOKEN": csrfToken,
                    "Api-Token": "N5ORjSS300F4fcZ3eq69rLShvgwnjchQg7Vmt5N753Sy"
                },
                body: JSON.stringify(bodyData)
            });
        
            const data = await response.json();
            console.log(data);
            console.log(bodyData)

        } catch (error) {
            console.log(error);
            
        }

        
    
        
      };
      React.useEffect(() => {
        fetchVehicleType();
      }, []);
      React.useEffect(() => {
        fetchGoodsType();
      }, []);
    return (
        <div>
            <div className='flex min-h-full flex-col justify-center px-6 py-5 lg:px-8 md:max-w-full sm:max-w-full'>
                <div className='mx-auto w-full sm:max-w-sm lg:max-w-full mb-5'>
                    <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Order Placement </h2>
                </div>
            </div>
            <form onSubmit={handleOrder} className='space-y-6 mb-3' action="#" method="POST">
                <div className='w-full mx-auto bg-[#F3F4F9] rounded-xl py-5 shadow-0 lg:max-w-5xl'>
                    <div className='lg:flex ms-6'>
                        <label htmlFor="goodsType" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Types Of Goods</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ms-[0]">
                        <Select onValueChange={(e) => setOrder((prev) => ({
                      ...prev, type_of_good_id: e
                    }))}>
                      <SelectTrigger className="lg:w-[250px] xl:w-[300px] sm:ms-6 border-[1px] rounded border-blue-300 ">
                        <SelectValue
                          placeholder="Select goods type"
                          className="text-gray-400"
                        />
                      </SelectTrigger>

                      <SelectContent className="bg-white">
                        {goodsTypes.loading
                          ? "loading"
                          : goodsTypes.data.map((e) => {
                            return (
                              <SelectItem key={e.id} value={e.id.toString()}>
                                {e.name}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                    </Select>
                        </div>
                        <label htmlFor="temperature" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4 lg:ml-11'> Temperature</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ms-4">
                            <Input id="temperature" 
                            required 
                            className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white  placeholder:text-gray-400' 
                            placeholder="Temperature" 
                            onChange={(e) => {
                                console.log(e.target.value);
                                setOrder((prev) => ({
                                  ...prev,
                                  temperature: e.target.value,
                                }));
                              }}/>
                        </div>
                    </div>
                    <div className='lg:flex ms-6'>
                        <label htmlFor="vehicle_type" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Type of vehicle</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ms-1">
                        <Select onValueChange={(e) => setOrder((prev) => ({
                      ...prev, vehicle_type_id: e
                    }))}>
                      <SelectTrigger className="lg:w-[250px] xl:w-[300px] sm:ms-6 border-[1px] rounded border-blue-300 ">
                        <SelectValue
                          placeholder="Select vehicle type"
                          className="text-black"
                        />
                      </SelectTrigger>

                      <SelectContent className="bg-white">
                        {vehicleTypes.loading
                          ? "loading"
                          : vehicleTypes.data.map((e) => {
                            return (
                              <SelectItem key={e.id} value={e.id.toString()}>
                                {e.name}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                    </Select>
                        </div>
                        <label htmlFor="total_km" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-12'> Total Km</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-10">
                            <Input id="total_km" 
                            type="number"
                            required 
                            className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white  placeholder:text-gray-400' 
                            placeholder="100" 
                            onChange={(e) => {
                                console.log(e.target.value);
                                setOrder((prev) => ({
                                  ...prev,
                                  total_km: e.target.value,
                                }));
                              }}/>
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
                        <Label htmlFor="origin" 
                        className='text-base mt-3 lg:ms-4 font-medium lg:text-sm' >
                        Origin
                        </Label>
                        <Dialog className=" w-[120%]">
                      <DialogTrigger asChild>
                        <Input
                          id="origin"
                          type="text"
                          readOnly
                          required
                          className="  ml-4 lg:ml-16 w-9/12 lg:w-11/12 mt-2 lg:mr-20 border-[1px] rounded border-blue-300 py-1.5 text-gray-900 bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:leading-6 pl-2 "
                          placeholder="Select Origin"
                          value={origin}
                        />
                      </DialogTrigger>
                      <div className="w-[130wv]">
                      <DialogContent className=" w-[90vw] bg-black text-white">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <Input
                            id="input"
                            type="search"
                            className="border-[3px] border-black mb-5 z-10 sm:w-[70%] mt-2 bg-white text-black"
                            placeholder="search origin"
                          />
                        </DialogHeader>
                        <Map setOrigin={setOrigin} lat={pickupLat} setLat={setPickupLat} lng={pickupLng} setLng={setPickupLng} />
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button type="button" className="bg-white text-black hover:text-white hover:border-white border-2">
                              Close
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                      </div>
                    </Dialog>
                    </div>
                    <div className="flex lg:ms-5 mt-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 lg:ms-4 ms-4 mt-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <Label htmlFor="destination" className='text-base mt-3 lg:ms-1 font-medium lg:text-sm' >
                        Destination
                        </Label>
                        <Dialog className=" w-[120%]">
                      <DialogTrigger asChild>
                        <Input
                          id="destination"
                          type="text"
                          readOnly
                          required
                          className="  ml-4 lg:ml-10 w-9/12 lg:w-11/12 mt-2 lg:mr-20 rounded border-[1] border-blue-300 py-1.5 text-gray-900 bg-white ring-inset placeholder:text-gray-400 sm:leading-6 pl-2 "
                          placeholder="Select Destination"
                          value={destination}
                        />
                      </DialogTrigger>
                      <div className="w-[130wv]">
                      <DialogContent className=" w-[90vw] bg-black text-white">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <Input
                            id="input"
                            type="search"
                            className="border-[3px] border-black mb-5 z-10 sm:w-[70%] mt-2 bg-white text-black"
                            placeholder="search destination"
                          />
                        </DialogHeader>
                        <Map setOrigin={setDestination} lat={dropoffLat} setLat={setDropoffLat} lng={dropoffLng} setLng={setDropoffLng} />
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button type="button" className="bg-white text-black hover:text-white hover:border-white border-2">
                              Close
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                      </div>
                    </Dialog>
                    </div>
                    <div className='lg:flex ms-6 mt-2'>
                        <label htmlFor="loading-time" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4'> Loading Time/Date</label>
                        <div className="p-4 w-full lg:w-4/12">
                            <input
                                type="datetime-local"
                                id="loading_date_time"
                                name="loading_time"
                                className="lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white p-2 w-full  placeholder:text-gray-400"
                                placeholder="YYYY-MM-DDTHH:MM"
                                required
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setOrder((prev) => ({
                                      ...prev,
                                      loading_date_time: e.target.value,
                                    }));
                                  }}
                            />
                        </div>
                        <label htmlFor="labours" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-9'>No of Labours</label>
                        <div className="p-4 w-full lg:w-4/12">
                            <Input id="no_of_labours" 
                            type="number"
                            required 
                            className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white  placeholder:text-gray-400' 
                            placeholder="100" 
                            onChange={(e) => {
                                console.log(e.target.value);
                                setOrder((prev) => ({
                                  ...prev,
                                  no_of_labours: e.target.value,
                                }));
                              }}/>
                        </div>
                    </div>
                    <div className='lg:flex ms-6'>
                        <label htmlFor="goods_volume" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-4 lg:ml-4'> Volume of Good</label>
                        <div className="relative p-4 w-full lg:w-4/12 flex lg:ml-5">
                            <span className="flex items-center whitespace-nowrap text-black rounded-s border bg-white border-e-0 border-solid border-blue-300 px-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white">KG</span>
                            <input type="text" id='volume_of_good_kg' className="lg:w-1/2 relative m-0 block flex-auto border rounded-e border-solid border-blue-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary" 
                             onChange={(e) => {
                                console.log(e.target.value);
                                setOrder((prev) => ({
                                  ...prev,
                                  volume_of_good_kg: e.target.value,
                                }));
                              }}/>
                        </div>
                        <label htmlFor="vehicle_no" className='mt-5 block text-sm font-medium leading-6 text-gray-900 ml-5 lg:ml-9'>No of Vehicle</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-1">
                        <Input id="no_of_vehicles"
                        type="number"
                        required 
                        className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white  placeholder:text-gray-400' 
                        placeholder="100" 
                        onChange={(e) => {
                            console.log(e.target.value);
                            setOrder((prev) => ({
                              ...prev,
                              no_of_vehicles: e.target.value,
                            }));
                          }}/>
                        </div>
                    </div>
                    <div className='lg:flex ms-10 lg:ml-12'>
                        <label htmlFor="amount" className='mt-5 block text-sm font-medium leading-6 text-gray-900 lg:-ml-3'>Amount</label>
                        <div className="p-4 w-full lg:w-4/12 lg:ml-20 -ml-4">
                            <Input id="amount" 
                            type="number"
                            required 
                            className='lg:w-[250px] xl:w-[300px] border-[1px] rounded border-blue-300 bg-white  placeholder:text-gray-400' 
                            placeholder="100" 
                            onChange={(e) => {
                                console.log(e.target.value);
                                setOrder((prev) => ({
                                  ...prev,
                                  amount: e.target.value,
                                }));
                              }}/>
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
                                className="lg:ml-1 -ml-4 w-full h-full rounded border-[1px] py-1.5 text-gray-900 shadow-sm bg-white border-blue-300 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 pl-2 opacity-1"
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setOrder((prev) => ({
                                      ...prev,
                                      photo: e.target.value,
                                    }));
                                  }}/>
                        </div>

                    </div>
                    <div className="lg:flex ms-6">
                        <Label htmlFor="instructions" className=' mt-3 lg:ms-4 ms-5 font-medium text-sm' >Instructions</Label>
                        <Input id="special_instruction" 
                        type='text' 
                        required 
                        className='ml-4 lg:ml-16 w-11/12 mt-2 lg:mr-20 rounded border-1 py-1.5 text-gray-900 bg-white ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:leading-6 pl-2' 
                        placeholder="Special Instructions About Goods (If Any)" 
                        onChange={(e) => {
                            console.log(e.target.value);
                            setOrder((prev) => ({
                              ...prev,
                              special_instruction: e.target.value,
                            }));
                          }}/>
                    </div>

                </div>
                <div className="flex justify-center py-6">
                    <button type='submit' className="py-3 px-4 rounded border-[1px] border-blue-300 bg-[#6C63FF] text-white text-sm font-sans font-semibold leading-6 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        View Order
                    </button>
                </div>

            </form>
            <CallUs />
        </div>
    )
}
