"use client"

import React, { useEffect, useRef } from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import vanImg from '../../public/images/van.png'



export default function ReadOnlyMapOrder({ driverLat, driverLong }) {

    const mapRef = useRef(null);

    useEffect(() => {
        const mapInit = async () => {
          const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
            version: "weekly",
          });
    
        //   const { Map } = await loader.load("maps");
        //   const { Marker } = await loader.load('marker');
    
            const { Map } = await loader.importLibrary("maps");
            const {Marker} = await loader.importLibrary('marker')
    
          let map = new Map(mapRef.current, {
            center: { lat: driverLat || 24.928973407134215, lng: driverLong || 67.05344430109362 },
            zoom: 20,
          });
    
          // The marker, positioned at the initial position
          const marker = new Marker({
            map: map,
            position: { lat: driverLat || 24.928973407134215, lng: driverLong || 67.05344430109362 },
            icon: {
                url: vanImg,
               // scaledSize: new google.maps.Size(40, 40), // Adjust the size of the custom icon
              },
          });
        };
    
        const updateMap = () => {
          mapInit();
        };
    
        // Update map after 4 seconds
        const updateInterval = setInterval(updateMap, 4000);
    
        return () => clearInterval(updateInterval);
      }, [driverLat, driverLong]);
    return (
        <div ref={mapRef} className='h-96 py-4'>Map</div>
    )
}
