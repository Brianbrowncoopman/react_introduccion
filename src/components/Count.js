import React, { useState, useEffect } from 'react';
import '../App.css';


function Count() {

  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title =`Has clickeado ${count} veces`;
  });

  return(
    <div>
      
      <h2>Contador-Componentes!!!</h2>
      <h3>El estado actual es: {count}</h3>
      <button className='sumar' onClick={()=> {
        if(count < 10) { setCount(prevCount => prevCount +1)}
      }}>suma 1</button>
    
      <br />
      <button className='restar' onClick={()=> {
        if(count > 0) {setCount(prevCount => prevCount -1)}
      }}>resta 1</button>
      <br />
      <button className='cero' onClick={()=> setCount (0)}>reset</button>
  </div>    



  );
}

export default Count;