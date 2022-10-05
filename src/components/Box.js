import React, { useState, useEffect } from 'react';
import '../App.css';
import Color from './Color';


function Box(){

  const [show, setShow] = useState(true);

  return(
    <div>
      <button className='grey' onClick={()=> setShow(false)}>dejar de mostrar</button>
      <p>Mover el mousse  </p>
      
      {show ? <Color /> : null}
      
      
      <button className='grey' onClick={()=> setShow(true)}>mostrar otra vez</button>
    </div>
  );
}
export default Box;

