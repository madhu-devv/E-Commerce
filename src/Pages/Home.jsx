// import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import image from '../assets/Images/Hero.jpg';

function Home() {

    
    return (
        <>
        
        <div className='Hero' style={{
          backgroundImage: `url(${image})`,
          height: "calc(100vh - 60px)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          // border: "5px solid red" // 👈 debug
        }}>
          <div className='center'>
            <h1>Welcome to Nova</h1>
            <p>Discover amazing products</p>
            <Link to="/products">
              <button>Shop</button>
            </Link>
          </div>
        </div>
        
        </>
    )

}

export default Home