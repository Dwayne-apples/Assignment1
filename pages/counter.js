import React, { useState } from 'react';
import Link from 'next/link'; 

const Counter = ({ initialCount }) => {
  const parsedInitialCount = Number(initialCount); //represents props as a number 
  const [count, setCount] = useState((isNaN(parsedInitialCount) ? 0 : parsedInitialCount)); //changes initialCount if it isNan to 0 or
  //number it currently has

  //When loaded, it has the option to add or remove by 1 with two buttons from the current count shown along with navigation to other
  //pages
  return (
    <div className='background'>
        <div className='navigationBar'>
            <ul className='nav-list'>
                <li className='nav-item'><Link href ="/">Home</Link></li>    
                <li className='nav-item'><Link href ="/Greetings">Greeting user</Link></li>
                <li className='nav-item'><Link href ="/Guess">guess the number</Link></li>
        
            </ul>
        </div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;