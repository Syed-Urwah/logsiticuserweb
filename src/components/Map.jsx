"use client"

import React, { useEffect, useRef } from 'react'
import { Loader } from "@googlemaps/js-api-loader"


export default function Map() {

    const mapRef = useRef(null);

    const mapInit = async () => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
            version: "weekly",
        });

        const position = {
            lat: 24.928973407134215,
            lng: 67.05344430109362
        }

        const { Map } = await loader.importLibrary("maps");
        const {Marker} = await loader.importLibrary('marker')

        let map = new Map(mapRef.current, {
            center: position,
            zoom: 20,
        });

        // The marker, positioned at Uluru
        const marker = new Marker({
            map: map,
            position: position,
        });

    }

    useEffect(() => {
        mapInit()
    }, [])

    return (
        <div ref={mapRef} className='h-96 py-4'>Map</div>
    )
}
