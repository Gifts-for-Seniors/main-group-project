import React, { useState, useEffect } from 'react';
import './ZipcodeFilter.css';

const ZipcodeFilter = ({ barrelLocations }) => {
  const [filteredZipcodes, setFilteredZipcodes] = useState([]);
  const [zipcodeSearch, setZipcodeSearch] = useState(null);

  const filterLocations = (zipcodeInput) => {
    const filteredZips = barrelLocations.filter((location) => {
      const zipReg = new RegExp('^' + zipcodeInput + '$');

      return String(location.zipcode).match(zipReg);
    });

    setFilteredZipcodes(filteredZips);
  };

  return (
    <div className="zip-filtered-container">
      <label className="zip-label" htmlFor="zipcode">Search By Zipcode</label>
      <input
        name="zipcode"
        id="zipcode"
        className='filtered-zip-input'
        type='text'
        onChange={(e) => {
          filterLocations(e.target.value);
        }}
      />
      { filteredZipcodes[0] && <h3 className="results-header">{'Donation barrel locations matching zipcode: '}</h3>}

      <ul className='filtered-locations-by-zip'>
        {filteredZipcodes.map((location) => {
          return (
            <li key={location.hosts} className='filtered-list-item'>
              {location.hosts + ': ' + location.street + ', ' + location.city + ' ' + location.zipcode }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ZipcodeFilter;