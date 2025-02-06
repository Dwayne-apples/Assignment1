import { useState } from 'react';
import Link from 'next/link';   //used to switch to different js files


function Guess() {
    const [randomNumber1, changeNum1] = useState(Math.floor(Math.random() * 100) + 1);  //Randomized number shown 
    const [randomNumber2, changeNum2] = useState(Math.floor(Math.random() * 100) + 1);  //Randomized number hidden
    const [guess, setGuess] = useState(true); 
    const [message, setMessage] = useState(''); //empty variable that is filled in based on setMessage
    let [Color, setColor] = useState("");


    function highNumber() { //guess is already set to true and calls handleGuess() 
        setGuess(true);
        handleGuess();
    }

    function lowNumber() { //set guess to false and calls handleGuess()
        setGuess(false);
        handleGuess();
    }

    const refreshPage = () => { //when button is pressed, calls refreshPage() to reset both variables and message shown
        changeNum1(Math.floor(Math.random() * 100) + 1);
        changeNum2(Math.floor(Math.random() * 100) + 1);
        setMessage("");

    };
    
    //Compares if randomNumber1 is higher or lower than randomnNumber2 and compares guess with a boolean statement to change 
    //setMessage and change the color of the text
    function handleGuess() {
    
        if (randomNumber1 < randomNumber2) {
            if (guess == true) {
                setMessage(`Your guess is correct! ${randomNumber1} is lower than ${randomNumber2}`);
                setColor("lightgreen");
            }
            else {
                setMessage(`Your guess is incorrect! ${randomNumber2} is higher than ${randomNumber1}`);
                setColor("red");
            }

        }  else{
            if (guess == false) {
                setMessage(`Your guess is correct! ${randomNumber1} is higher than ${randomNumber2}`);
                setColor("lightgreen");
            }
            else {
                setMessage(`Your guess is incorrect! ${randomNumber2} is not higher than ${randomNumber1}`);
                setColor("red");
            }
        }

    };

    return(
        //when loaded, gives user the option to press two buttons to guess if the hidden number is higher or lower than
        //current number showing that will display a colored text along with refresh buttton to change both numbers and hide text
        //along with navigation to other pages
        <div className='background'>
            <div className='navigationBar'>
                <ul className='nav-list'>
                <li className='nav-item'><Link href ="/">Home</Link></li>    
                <li className='nav-item'><Link href ="/Greetings">Greeting user</Link></li>
                <li className='nav-item'><Link href ="/counter">Counter</Link></li>
                
                </ul>
            </div>
            <h3>Guess if number hidden is higher or lower than the number shown: {randomNumber1}</h3>
            <button onClick={highNumber} style={{fontSize:"16px"}}>higher</button>
            <button onClick={lowNumber} style={{fontSize:"16px"}}>lower</button>
            <button onClick={refreshPage}>refresh</button>
            <div>
                <p style={{color: Color, 
                            display:"flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "50px",
                            height: "100vh"}}>
                                {message}
                        </p>
                
            </div>
        </div>
    );
}

export default Guess;