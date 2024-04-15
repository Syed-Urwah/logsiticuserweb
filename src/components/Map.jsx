"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Loader } from "@googlemaps/js-api-loader"


export default function Map(props) {

    const {setOrigin, setLat, setLng} = props;
    console.log()

    const mapRef = useRef(null);

    const [markerPosition, setMarkerPosition] = useState({ lat: 24.928973407134215, lng: 67.05344430109362 });
    const [placeName, setPlaceName] = useState('');

    


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
        const {Geocoder} = await loader.importLibrary("geocoding")

        const geocoder = new Geocoder();

        let map = new Map(mapRef.current, {
            center: markerPosition,
            zoom: 20,
        });

        // The marker, positioned at Uluru
        const marker = new Marker({
            map: map,
            position: markerPosition,
        });

        // Update marker position on map click
        map.addListener('click', (event) => {
            console.log(event)
            const newPosition = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            };
            setMarkerPosition(newPosition);
            setLat(newPosition.lat)
            setLng(newPosition.lng)
            marker.setPosition(newPosition);
            console.log("New Marker Position:", newPosition);

            // Perform reverse geocoding to get the place name
            geocoder.geocode({ location: newPosition }, (results, status) => {
                if (status === 'OK') {
                    if (results[0]) {
                        setPlaceName(results[0].formatted_address);
                        setOrigin(results[0].formatted_address);
                        console.log("Place Name:", results[0].formatted_address);
                    } else {
                        console.log('No results found');
                    }
                } else {
                    console.log('Geocoder failed due to:', status);
                }
            });

        });

    }

    useEffect(() => {
        mapInit()
    }, [])

    return (
        <div ref={mapRef} className='h-96 py-4'>Map</div>
    )
}
