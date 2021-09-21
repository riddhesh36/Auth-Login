import React from 'react';
import image from './image.svg';

const Hero =({handleLogout}) =>{
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className="main">
                <h1>This is the Main Page</h1>
                <p>You are here because you Signed In or Signed Up</p>
                <img src={image} alt="" />
            </div>
        </section>
    );
}

export default Hero;