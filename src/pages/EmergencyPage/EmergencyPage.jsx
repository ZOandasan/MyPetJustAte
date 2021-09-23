import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './Emergency.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import mapboxgl from 'mapbox-gl'


const MAPBOX_TOKEN = "pk.eyJ1IjoicmVpYnAiLCJhIjoiY2twbjRkNmtrMDUzaDJubGZpd2V2czlmdyJ9.CbflU85ZELStxRiiE_bW-A"
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


export default function EmergencyPage() {
  const [viewport, setViewport] = useState({
    latitude: 34.024750,
    longitude: -118.412130,
    zoom: 8
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );

  return (
    <div className='map-container'>
      <MapGL
        ref={mapRef}
        {...viewport}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
          limit={4}
          inputValue='Overland Veterinary Clinic, 3465 Overland Ave, Los Angeles, CA 90034'
        />
      </MapGL>
      <div className='call-title'>ASPCA Animal Poison Control Center hotline available 24 hours, 365 days a year.</div>
      <a href="tel:8884264435"><button className='call-button'>Call Animal Poison Control Center Hotline</button></a>
    </div>
  );
};

