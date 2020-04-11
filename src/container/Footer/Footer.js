import React from 'react';
import './Footer.css';


const Footer = (props) => {
    return (
        <div className="Footer mx-md-5 mx-3">
            <h3 className="from">This content if from the Movie : </h3>
            <h1 className="movie mx-auto">BIG HERO 6</h1>
            <br/>
            <h5 className="content-by ml-auto">Made with FUN by Arjun <span role="img" aria-label="Wink"> 😉 </span></h5>
        </div>
    )
}

export default Footer;