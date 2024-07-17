import React from 'react';
import './ContainerTwo.css';
 

export default function ContainerTwo({ one, oneValue, two, twoValue, three, threeValue, four, fourValue }) {
  return (
    <div className='bbb' style={{ borderRadius: '30px', height: '33%',  marginTop: "12px",  color: "white" , border: "2px solid white", backgroundColor:"#23212e"}}>
      <div className='box_Two'>
        <div className='item'>{one} - {oneValue}</div>
        <div className='item'>{two} - {twoValue}</div>
        <div className='item'>{three} - {threeValue}</div>
        <div className='item'>{four} - {fourValue}</div>
      </div>
      
    </div>
  );
}
