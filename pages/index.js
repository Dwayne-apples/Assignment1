import React from 'react';
import Link from 'next/link'; //used to switch to different js files
import HomePage from './home'; //calls function from another file to be loaded in

export default function Home() {  
  //div class "naviagationBar" is used to redirect to another file in this prohject displaying
  // a number with three buttons that redirects it into another file
  //calls function homePage from file Homepage to be loaded in this page
  return (
    <div className='background'>
      <div className='navigationBar'>
        <ul className='nav-list'>
          <li className='nav-item'><Link href ="/Greetings">Greeting user</Link></li>
          <li className='nav-item'><Link href ="/Guess">Guess the number</Link></li>
          <li className='nav-item'><Link href ="/counter">Counter</Link></li>
        </ul>
      </div>
      <HomePage />
      
    </div>
  )
};