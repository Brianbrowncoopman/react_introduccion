import React, { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>react_introduccion</h1>
        <h2>Contador</h2>
        <h3>El estado actual es: {count}</h3>

        {/*<button onClick={()=> setCount (prevCount => prevCount +1)}>+</button>*/}
        
        <button className='sumar' onClick={()=> {
          if(count < 10) { setCount(prevCount => prevCount +1)}
        }}>suma 1</button>
        
        
        {/*<button onClick={()=> setCount (prevCount => prevCount -1)}>-</button>*/}
        <br />
        <button className='restar' onClick={()=> {
          if(count > 0) {setCount(prevCount => prevCount -1)}
        }}>resta 1</button>
        <br />
        <button className='cero' onClick={()=> setCount (0)}>reset</button>
        
      </header>
    </div>
  );
}

export default App;
