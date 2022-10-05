import React, { useState, useEffect } from 'react';
import '../App.css';


function Color() {
  const [color, setColor] = useState("blue");

  useEffect(()=> {
    function onMouseMove(event) {
      if(event.clientX < window.innerWidth / 2) {
        setColor("blue");
      }else {
        setColor("grey");
      }
    }
    window.addEventListener("mousemove", onMouseMove);
  });

  return(
    <div style={{height: "150px", background: color, border: "8px solid white" ,cursor: 'pointer'}} />
  );
}

export default Color;