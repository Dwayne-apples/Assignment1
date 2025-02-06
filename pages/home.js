import React from 'react';


const HomePage = () => {
    //HomePage() first page when entering, and change styles 
    // (unsure why when using id or className to change style in css doesnt work)
    return (
        
        <div id={'Homepage'} >
            <h1 style={{color:"lightgreen", 
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"}}>
                Welcome! to my page!</h1>
            
        </div>
    )
  }

export default HomePage;