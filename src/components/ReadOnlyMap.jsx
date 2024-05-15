"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import vanImg from '../../public/images/van.png'
import { toast } from './ui/use-toast'

export default function ReadOnlyMap({ driverLat, driverLong }) {
    const [driverPosition, setDriverPosition] = useState({
        lat: driverLat ? driverLat : 24.928973407134215,
        lng: driverLong ? driverLong : 67.05344430109362,
    })

    useEffect(() => {
        setDriverPosition({
            lat: driverLat ? driverLat : 24.928973407134215,
            lng: driverLong ? driverLong : 67.05344430109362,
        });

    }, [driverLat, driverLong]);

    const mapRef = useRef(null);


    const mapInit = async () => {
        try {


            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
                version: "weekly",
            });

            const position = {
                lat:driverPosition.lat,
                lng: driverPosition.lng 
            }

            const { Map } = await loader.importLibrary("maps");
            const { Marker } = await loader.importLibrary('marker')

            let map = new Map(mapRef.current, {
                center: driverPosition,
                zoom: 20,
                animation: google.maps.Animation.NONE,
            });

            const customIcon = {
                url: vanImg, // Replace with the URL of your icon image
                scaledSize: new window.google.maps.Size(30, 30), // Set the icon size
            };

            // The marker, positioned at Uluru
            let marker = new Marker({
                map: map,
                position: driverPosition,
                icon: customIcon
            });

        } catch (error) {
            console.log(error)
        }
    }

    useMemo(() => {
        mapInit()
    }, [driverLat, driverLong])

    return (
        <div ref={mapRef} className='h-96 py-4'>Map</div>
    )
}
