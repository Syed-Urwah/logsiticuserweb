import React from 'react'
import { useSelector } from 'react-redux'

const AcceptedDriver = ({ acceptedDrivers, acceptDriverRide }) => {
  const acceptedDriversList = useSelector((state)=>state.root.driverData.acceptedDrivers);

  
  return (
    <div className=''>
      <div className="flex items-center gap-2 flex-col w-1/3 mx-auto p-2 ">
        {
          acceptedDriversList && acceptedDriversList.map((driver) =>  (
              <div key={driver.id} className="shadow-md w-full rounded-xl flex items-center justify-between p-2 border">
                <div className="">
                  <img src={driver?.get_driver?.profile_image} alt='driver' className='w-16 h-16 rounded-full' />
                </div>
                <div className="">
                  <h2>{driver.get_driver.username}</h2>
                  <h3>{driver.get_driver?.get_vehicle?.get_vehicle_type?.name? driver.get_driver.get_vehicle.get_vehicle_type.name: 'no vehicle'}</h3>
                  <h3>Rating</h3>
                  <h3>SR 290</h3>
                </div>
                <div className="flex flex-col gap-2 w-[27%]">
                  <button onClick={()=>acceptDriverRide(driver)} className="py-2 px-5 w-full mx-auto block rounded-xl  hover:bg-[#4942cb] bg-[#6C63FF] text-white font-sans ">
                    Accept
                  </button>
                  <button className="py-2 px-5 w-full mx-auto block rounded-xl hover:bg-[#4942cb] bg-[#6C63FF] text-white font-sans font-medium">
                    Decline
                  </button>
                </div>
              </div>
            )
          )
        }

      </div>
    </div>
  )
}

export default AcceptedDriver