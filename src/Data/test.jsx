import React from 'react';
import da from './da';
import test from '../assets/test.png';

function TesT() {
  const randomIndex = Math.floor(Math.random() * da.length);
  
  return(
    <div >
      <img src={test} alt="df" style={{height:'100%',width:'100%'}}/>
      <div style={{position:'absolute' ,bottom:'60px',fontSize:'30px',fontFamily:'500',color:'white'}}>{da[randomIndex].name}</div>
    </div>
  )
}

export default TesT;
