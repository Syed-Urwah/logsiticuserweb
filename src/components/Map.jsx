"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Input } from "@/components/ui/input";

export default function Map(props) {
  const { setOrigin, setLat, setLng } = props;
  console.log();

  const mapRef = useRef(null);

  const [markerPosition, setMarkerPosition] = useState({
    lat: 24.928973407134215,
    lng: 67.05344430109362,
  });
  const [placeName, setPlaceName] = useState("");

  const mapInit = async () => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
      version: "weekly",
    });

    const position = {
      lat: 24.928973407134215,
      lng: 67.05344430109362,
    };

    const { Map } = await loader.importLibrary("maps");
    const { Marker } = await loader.importLibrary("marker");
    const { Geocoder } = await loader.importLibrary("geocoding");

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
    map.addListener("click", (event) => {
      console.log(event);
      const newPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      setMarkerPosition(newPosition);
      setLat(newPosition.lat);
      setLng(newPosition.lng);
      marker.setPosition(newPosition);
      console.log("New Marker Position:", newPosition);

      // Perform reverse geocoding to get the place name
      geocoder.geocode({ location: newPosition }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            setPlaceName(results[0].formatted_address);
            setOrigin(results[0].formatted_address);
            console.log("Place Name:", results[0].formatted_address);
          } else {
            console.log("No results found");
          }
        } else {
          console.log("Geocoder failed due to:", status);
        }
      });
    });

    // Create the search box and link it to the UI element.
    const input = document.getElementById("input");
    const { SearchBox } = await loader.importLibrary("places");
    var searchBox = new SearchBox(input);

    console.log(searchBox);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();

      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  };

  useEffect(() => {
    mapInit();
  }, []);

  return (
    <>
      <div>
        
      </div>
      <div ref={mapRef} className="h-96 py-4">
        Map
      </div>
    </>
  );
}
