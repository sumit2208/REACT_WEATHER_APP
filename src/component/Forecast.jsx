import React from 'react'

export default function Forecast(props) {
  return (
    <div>
      <ul className="list-group my-4 mx-5 ">
  <li style={{backgroundColor:"#191626",color:"white"}}className="list-group-item">DAY - {props.day}</li>
  <li style={{backgroundColor:"#191626",color:"white"}}className="list-group-item">DEGREE - {props.degree}</li>
  <li style={{backgroundColor:"#191626",color:"white"}}className="list-group-item">CONDITION - {props.condition}</li>
  
   
    </ul>
    </div>
  )
}
