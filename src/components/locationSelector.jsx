import React, { useRef, useEffect, useState } from 'react';
import { Map, useMapsLibrary } from "@vis.gl/react-google-maps";
import { MapPin } from "lucide-react";
import { TextField, FormControl } from "@mui/material";

const LocationSelector = ({ formData, setFormData }) => {
  const [addressLat, setAddressLat] = useState();
  const [addressLng, setAddressLng] = useState();
  
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!inputRef.current || !places || autocompleteRef.current) return;
    
    autocompleteRef.current = new places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "IN" },
      fields: ["address_components", "formatted_address", "geometry"],
    });

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace();
      if (!place?.geometry?.location) return;

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setAddressLat(lat);
      setAddressLng(lng);

      // Extract only city and area from address components
      const addressComponents = place.address_components;
      let city = '';
      let area = '';

      addressComponents?.forEach(component => {
        if (component.types.includes('locality')) {
          city = component.long_name;
        }
        if (component.types.includes('sublocality_level_1')) {
          area = component.long_name;
        }
      });

      setFormData(prev => ({
        ...prev,
        city,
        area
      }));
    });

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
  }, [places, setFormData]);

  const handleMapChange = (ev) => {
    const center = ev.map.getCenter();
    if (!center) return;
    
    const lat = center.lat();
    const lng = center.lng();
    setAddressLat(lat);
    setAddressLng(lng);

    // Reverse geocode to get only city and area
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { location: { lat, lng } },
      (results, status) => {
        if (status === "OK" && results?.[0]) {
          const place = results[0];
          const addressComponents = place.address_components;
          let city = '';
          let area = '';

          addressComponents?.forEach(component => {
            if (component.types.includes('locality')) {
              city = component.long_name;
            }
            if (component.types.includes('sublocality_level_1')) {
              area = component.long_name;
            }
          });

          setFormData(prev => ({
            ...prev,
            city,
            area
          }));
        }
      }
    );
  };

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "0.5rem",
    position: "relative",
  };

  const markerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -100%)",
    zIndex: 1,
    pointerEvents: "none",
  };

  return (
    <div className="space-y-4">
      <FormControl fullWidth>
        <TextField
          inputRef={inputRef}
          placeholder="Search for your location"
          fullWidth
          variant="outlined"
          InputProps={{
            style: { fontFamily: "Bricolage Grotesque" }
          }}
        />
      </FormControl>

      {/* {addressLat && addressLng && (
        <div className="relative w-full overflow-hidden rounded-lg border border-gray-200">
          <Map
            defaultZoom={17}
            defaultCenter={{ lat: addressLat, lng: addressLng }}
            center={{ lat: addressLat, lng: addressLng }}
            gestureHandling="greedy"
            disableDefaultUI={false}
            style={mapContainerStyle}
            onCameraChanged={handleMapChange}
            onDragend={handleMapChange}
          >
            <div style={markerStyle}>
              <MapPin className="h-8 w-8 text-black" strokeWidth={1} fill="#00CE84" />
            </div>
          </Map>
        </div>
      )} */}

      <div className="grid grid-cols-2 gap-4">
        <TextField
          fullWidth
          variant="outlined"
          label="City"
          value={formData.city || ''}
          disabled
          InputProps={{
            style: { fontFamily: "Bricolage Grotesque" }
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Area"
          value={formData.area || ''}
          disabled
          InputProps={{
            style: { fontFamily: "Bricolage Grotesque" }
          }}
        />
      </div>
    </div>
  );
};

export default LocationSelector;