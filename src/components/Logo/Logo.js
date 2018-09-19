import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './img/brain.png';

const Logo = () => {
  return (
  	<div>
	    <div className='ma4 mt0'>
	      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
	        <div className="Tilt-inner pa3 "> 
	        	<img src= {brain} alt ='logo' style={{ paddingTop: '5px',paddingLeft:'3px'}}/> 
	        </div>
	      </Tilt>
	    </div>
    </div>
  );
}


export default Logo;
