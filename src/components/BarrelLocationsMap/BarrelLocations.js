import React, { useState, useEffect } from 'react';
import './BarrelLocations.css';

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const BarrelLocationsMap = ({ barrelLocations }) => {
  const [selected, setSelected] = useState({});
  const [pinLocations, setPins] = useState([]);

  useEffect(() => {    
    try {
      let locationsWithGeocode = barrelLocations.map(async (location) => {
        function getGeocode() {
          let addressUrl =
            location.street.split(' ').join('+') +
            '+' +
            location.city.split(' ').join('+') +
            ',+Minnesota';
  
          return fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${apiKey}`
          ).then((res) => {
            return res.json();
          });
        }
  
        let res = await getGeocode();
  
        location.latLong = res.results[0].geometry.location;
        location.fullAddress = res.results[0].formatted_address;
  
        return location;
      });
  
      const results = Promise.all(locationsWithGeocode).then(
        (locationsWithGeocode) => {
          setPins(locationsWithGeocode);
        }
      );
    } catch (e) {
      console.log('ERROR! ', e);
      setPins([]);
    }
  }, []);

  const onSelect = (item) => {
    setSelected(item);
  };

  let apiKey =
    process.env.REACT_APP_GOOGLE_MAPS_NOT_STATIC_API_KEY;

  const mapStyles = {
    height: '50vh',
    width: '75%',
  };

  const defaultCenter = {
    lat: 44.9351,
    lng: -93.234,
  };

  return (
    <div className='barrels-map'>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
        >
          {pinLocations &&
            pinLocations.map((item) => {
              return (
                <Marker
                  onClick={() => onSelect(item)}
                  key={item.hosts}
                  position={item.latLong}
                />
              );
            })}
          {selected.latLong && (
            <InfoWindow
              position={selected.latLong}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <>
                <p>{selected.hosts}</p>
                <p>{selected.fullAddress}</p>
              </>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default BarrelLocationsMap;