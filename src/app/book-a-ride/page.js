"use client";

import * as React from "react";
import "../styles/custom.css";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import CallUs from "@/components/CallUs";
import { useToast } from "@/components/ui/use-toast";
import Map from "@/components/Map";
import { DialogClose } from "@radix-ui/react-dialog";

export default function page() {

  const { toast } = useToast()

  const [bookaRide, setRide] = useState({
    user_id: "25",
    // user_dropoff_lat: "34.0363243",
    // user_dropoff_lng: "71.528077",
    no_of_persons: 0,
    vehicle_type_id: "",
    contact_info: "",
    total_km: 0,
    origin: "",
    destination: "",
  });

  const [origin, setOrigin] = useState('')
  const [pickupLat, setPickupLat] = useState(0)
  const [pickupLng, setPickupLng] = useState(0)

  const [destination, setDestination] = useState('')
  const [dropoffLat, setDropoffLat] = useState(0)
  const [dropoffLng, setDropoffLng] = useState(0)

  const [vehicleTypes, setVehicleTypes] = useState({
    data: [],
    loading: true,
  });

  const fetchVehicleType = async () => {
    const url =
      process.env.NEXT_PUBLIC_SERVER_BASE_URL +
      "/api/setting/vehicle_type/get_by_transportation_type/1";
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

  const handleRide = async (e) => {
    e.preventDefault();
    console.log(bookaRide);

    setRide((prev) => ({
      ...prev,
      user_pickup_lat: pickupLat,
      user_pickup_lng: pickupLng
    }))

    setRide((prev) => ({
      ...prev,
      user_dropoff_lat: dropoffLat,
      user_dropoff_lng: dropoffLng
    }))

    const bodyData = bookaRide;
    bodyData.user_pickup_lat = pickupLat;
    bodyData.user_pickup_lng = pickupLng;
    bodyData.user_dropoff_lat = dropoffLat;
    bodyData.user_dropoff_lng = dropoffLng;



    const url =
      process.env.NEXT_PUBLIC_SERVER_BASE_URL +
      "/api/customer/booking_rides/search_driver";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Api-Token": "N5ORjSS300F4fcZ3eq69rLShvgwnjchQg7Vmt5N753Sy",
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();
      console.log(data);
      console.log(bodyData)

      data.response.response_id == 1 ?
        toast({
          title: "Scheduled: Catch up",
          description: data.response.response_desc,
        }) :
        toast({
          title: "Scheduled: Catch up",
          description: data.response.response_desc,
          variant: "success"
        })
    } catch (error) {
      console.log(error);
      toast({
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    }
  };

  React.useEffect(() => {
    fetchVehicleType();
  }, []);

  return (
    <div>
      <div className="2xl:px-[320px] xl:px-[120px] max-xl:px-[100px] my-7">
        <div className="mx-auto w-full sm:max-w-sm lg:max-w-full mb-5">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            BOOK A RIDE
          </h2>
        </div>
        <form onSubmit={handleRide} className="pt-3 px-2 text-gray-400">
          <Card className="w-full py-6 bg-gray-50 rounded-xl">
            <CardContent>
              <div className="grid w-full  items-center gap-4">
                <div className="flex max-lg:flex-col md:justify-between">
                  <div className="flex  items-center max-sm:flex-col  text-nowrap space-y-1.5">
                    <Label htmlFor="persons" className="text-base">
                      No of Persons
                    </Label>
                    <Input
                      id="no_of_person"
                      type="number"
                      required
                      className="lg:w-[250px] xl:w-[300px] sm:ms-4 border-[2px] rounded border-blue-300  "
                      placeholder="Name of your project"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setRide((prev) => ({
                          ...prev,
                          no_of_persons: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="flex items-center max-sm:flex-col text-nowrap space-y-1.5 max-lg:mt-4">
                    <Label htmlFor="persons" className="text-base">
                      Vehicle's List
                    </Label>
                    <Select onValueChange={(e) => setRide((prev) => ({
                      ...prev, vehicle_type_id: e
                    }))}>
                      <SelectTrigger className="lg:w-[250px] xl:w-[300px] sm:ms-6 border-[2px] rounded border-blue-300 ">
                        <SelectValue
                          placeholder="Select a timezone"
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
                </div>

                <div className="flex max-lg:flex-col md:justify-between">
                  <div className="flex  items-center  max-sm:flex-col text-nowrap space-y-1.5">
                    <Label htmlFor="persons" className="text-base">
                      Contact Info
                    </Label>
                    <Input
                      id="contact_info"
                      type="text"
                      required
                      className="lg:w-[250px] xl:w-[300px] max-lg:ms-7 sm:ms-7 max-sm:ms-2 border-[2px] rounded border-blue-300 "
                      placeholder="Name of your project"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setRide((prev) => ({
                          ...prev,
                          contact_info: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="flex items-center max-sm:flex-col text-nowrap space-y-1.5 max-lg:mt-4">
                    <Label htmlFor="persons" className="text-base">
                      Total Km
                    </Label>
                    <Input
                      id="total_km"
                      type="number"
                      required
                      className="lg:w-[250px] xl:w-[300px] sm:ms-14 max-sm:ms-3 border-[2px] rounded border-blue-300 "
                      placeholder="Name of your project"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setRide((prev) => ({
                          ...prev,
                          total_km: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:justify-between">
                  <div className="flex  items-center  max-sm:flex-col text-nowrap space-y-1.5">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </span>
                    <Label htmlFor="persons" className="text-base sm:me-6">
                      Origin
                    </Label>
                    <Dialog className=" w-[120%]">
                      <DialogTrigger asChild>
                        <Input
                          id="origin"
                          type="text"
                          readOnly
                          required
                          className="  max-lg:ms-7 sm:ms-7 max-sm:ms-2 border-[2px] rounded border-blue-300 "
                          placeholder="Name of your project"
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
                  <div className="flex  items-center mt-4  max-sm:flex-col text-nowrap space-y-1.5">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </span>
                    <Label htmlFor="persons" className="text-base">
                      Destination
                    </Label>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Input
                          id="destination"
                          type="text"
                          readOnly
                          required
                          className=" max-lg:ms-7 sm:ms-3  max-sm:ms-2 border-[2px] rounded border-blue-300 "
                          placeholder="Select Destination"
                          value={destination}
                        />
                      </DialogTrigger>
                      <DialogContent className=" w-[90vw] bg-black text-white">
                        <DialogHeader>
                          <DialogTitle>Destination</DialogTitle>
                          <Input
                            id="input"
                            type="search"
                            className="border-[3px] border-black mb-5 z-10 sm:w-[70%] mt-2 bg-white text-black"
                            placeholder="search origin"
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
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center my-7">
            <button
              type="submit"
              className="py-3 px-4 rounded-xl bg-[#6C63FF] text-white"
            >
              Confirm Ride
            </button>
          </div>
        </form>
      </div>

      <CallUs />
    </div>
  );
}
