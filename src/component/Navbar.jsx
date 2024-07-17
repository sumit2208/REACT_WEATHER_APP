import React, { useState } from 'react';

export default function Navbar(props) {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    if (city.trim() === '') return;
    
    const data = `https://api.weatherapi.com/v1/forecast.json?key=${props.apikey}&days=3&aqi=no&alerts=no&q=${city}`;
   
    

    try {
      let value = await fetch(data);
      if (!value.ok) {
        throw new Error('City not found');
      }
      const final = await value.json(); 
      console.log(final);
      props.onDataChange(final);
    } catch (error) {
      alert('City not found. Please enter a valid city name.');
      // console.error(error);
    }



  };

  const handleKeyPress = (event) => {
     
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <nav className="navbar" style={{ backgroundColor: "#191626", padding: "22px", borderBottom: "1px solid white" }}>
      <div className="container-fluid d-flex justify-content-space-around">
        <form className="d-flex" role="search">
          <div>
            <input
              className="form-control me-2 search ps-3"
              type="search"
              placeholder="Enter The City Name"
              aria-label="Search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </form>
        <div>
          <button className="btn btn-secondary" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
