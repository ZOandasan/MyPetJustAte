import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './Emergency.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

const MAPBOX_TOKEN = "pk.eyJ1IjoicmVpYnAiLCJhIjoiY2twbjRkNmtrMDUzaDJubGZpd2V2czlmdyJ9.CbflU85ZELStxRiiE_bW-A"

export default function EmergencyPage() {
  const [viewport, setViewport] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
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
        <p>If you believe that your beloved furbaby has ate something toxic, please go to nearest animal hospital near you.</p>
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
          limit={7}
          inputValue='animal hospital'
        />
      </MapGL>
    </div>
  );
};

