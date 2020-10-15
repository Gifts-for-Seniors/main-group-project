import React, { useState, useEffect } from 'react';
import InsetGoogleMap from '../GoogleMap/BarrelInsetGoogleMap';
import './ZipcodeFilter.css';

const ZipcodeFilter = ({ barrelLocations, state, setBarrelMap }) => {
  const [filteredZipcodes, setFilteredZipcodes] = useState([]);
  const [zipcodeSearch, setZipcodeSearch] = useState(null);

  const filterLocations = async (zipcodeInput) => {
    const nearestMatches = [];
    
    const filteredZips = barrelLocations.filter((location) => {
      const zipReg = new RegExp('^' + zipcodeInput + '$');

      return String(location.zipcode).match(zipReg);
    });

    if (filteredZips.length === 0) {
      try {
        let { postalCodes } = await fetch(
          `http://api.geonames.org/findNearbyPostalCodesJSON?postalcode=${zipcodeInput}&country=US&radius=10&username=Jasonn318`
        ).then((res) => res.json());
  
        while (postalCodes.length > 0) {
          let currentZip = postalCodes.shift().postalCode;
          let filteredResults = barrelLocations.filter((location) => {
            const zipReg = new RegExp('^' + currentZip + '$');
  
            return String(location.zipcode).match(zipReg);
          });
  
          if(filteredResults.length > 0) {
            setFilteredZipcodes(filteredResults)
            return;
          }
        }
        setFilteredZipcodes([]);
      } catch {
        setFilteredZipcodes([]);
      }
    } else {
      setFilteredZipcodes(filteredZips);
    }

  };

  return (
    <div className='zip-filtered-container'>
      <label className='zip-label' htmlFor='zipcode'>
        Search By Zipcode
      </label>
      <input
        name='zipcode'
        id='zipcode'
        className='filtered-zip-input'
        type='text'
        onChange={(e) => {
          if (e.target.value.length === 5) {
            filterLocations(e.target.value);
          }
        }}
      />
      {filteredZipcodes[0] && (
        <h3 className='results-header'>
          {'Donation barrel locations closest to zipcode'}
        </h3>
      )}

      <ul className='filtered-locations-by-zip'>
        {filteredZipcodes.map((location) => {
          return (
            <li key={location.hosts} className='filtered-list-item'>
              <p className='location-host'>{location.hosts}</p>
              <p className='location-street'>{location.street}</p>
              <p className='location-street'>
                {location.city + ' ' + location.zipcode}
              </p>
              <a
                style={{ cursor: 'pointer', fontSize: '.80em' }}
                onClick={() => setBarrelMap(location)}
              >
                SHOW ON MAP BELOW
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ZipcodeFilter;
