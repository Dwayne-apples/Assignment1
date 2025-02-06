import { useState } from 'react';
import Link from 'next/link'; 


function Greetings() {

    const [inputMessage, FinalMessage] = useState(''); 
    const [message, setMessage] = useState('');
      
    //handleInputChange() allows typing into input type text
    function handleInputChange(event) { 
        setMessage(event.target.value); 
    }
    
    //handleSubmit() compares message submitted, changing the message based if its empty 
    function handleSubmit(event) {
        event.preventDefault();
    
        if (message.trim() === '') 
        {
          FinalMessage('Form submit is empty');
        } else {
            FinalMessage('Hello there ', message);
        };
    
    };
    
      //invalidMessage() if message submitted is invalid
      const invalidMessage = (event) => {
        event.preventDefault();
        FinalMessage('Form submit is invalid');
      }
    
    //when loaded, gives user to type in a text box and submit it to display a text depending if invalid or empty
    // along with navigation to other pagess
    return(
        <div className='background'>
            <div className='navigationBar'>
                <ul className='nav-list'>
                <li className='nav-item'><Link href ="/">Home</Link></li>    
                <li className='nav-item'><Link href ="/Guess">guess the number</Link></li>
                <li className='nav-item'><Link href ="/counter">Counter</Link></li>
                
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
            <h3>Enter your name</h3>
            <label>
                <input type = "text" value={message} onChange={handleInputChange}/>
            </label>
                <button type="submit" onInvalid={invalidMessage}>Submit</button>
            </form>
            <div>
                {inputMessage  && <p style={{color:"yellow", 
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            height: "100vh"}}>{inputMessage} {message}</p>}
            </div>
        </div>
    );
}

export default Greetings;