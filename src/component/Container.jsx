import React, { useEffect, useRef } from 'react';
import './Container.css';
import ContainerTwo from './ContainerTwo';
// import Forecast from './Forecast'



export default function Container({ data }) {
  const imgRef = useRef(null);

  useEffect(() => {
    if (data && imgRef.current) {
      imgRef.current.setAttribute('src', 'https:' + data.current.condition.icon);
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className="box_one" style={{  background: "#191626", width: "90vw", margin:"0px 20px 20px 20px", color: "white" }}>
        <div className="boxx">
          <p>{data.location.name}</p>
          <p>{data.current.condition.text}</p>
          <p>
            <img ref={imgRef} alt="" className='mx-2 my-1.5 box' />
          </p>
          <p style={{ fontSize: "2.5rem" }}>{data.current.temp_c + "°C"}</p>
        </div>
        <ContainerTwo
          one="HUMIDITY"
          oneValue={data.current.humidity + '%'}
          two="WIND SPEED"
          twoValue={data.current.wind_kph + ' km/h'}
          three="PRESSURE"
          threeValue={data.current.pressure_mb + ' MB'}
          four="UV INDEX"
          fourValue={data.current.uv}
        />
        <ContainerTwo
          one="WIND DEGREE"
          oneValue={data.current.wind_degree + '°'}
          two="GUST MPH"
          twoValue={data.current.gust_mph + ' mph'}
          three="LOCAL TIME"
          threeValue={data.location.localtime}
          four="COUNTRY"
          fourValue={data.location.country}
        />

      </div>
      
    </div>
  );
}
