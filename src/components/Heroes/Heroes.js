import React from 'react';
import './Heroes.css';
import '../../container/Animations.css';

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../../assets/images/Main', false, /\.(png|jpe?g|svg)$/));




const Heroes = (props) => {

    
    let imageClasses = ["col-2", "p-1", "slide-in-elliptic-top-fwd", "img-fluid"].join(' ');
    let nameClasses = ["col-2", "focus-in-expand"].join(' ');

    let inactiveNumber = 0;
    
    let bigImages = (
        <div className="row justify-content-center">
            {props.characters.map((char, index) => {
                if (char.added) {
                    return <img src={images[char.bigImg]} alt={char.name} className={imageClasses} key={char.key}/>
                }
                else{
                    inactiveNumber+=1
                    return null;
                }
            })}
        </div>
    );
    
    let names = (
        <div className="names row justify-content-center">
            {props.characters.map((char) => {
                if (char.added) {
                    return <p className={nameClasses} key={char.key} id={char.key}>{(char.name).split(' ')[0]}</p>
                }
                else {
                    return null;
                }
            })}
        </div>
    );
    if(inactiveNumber === 6){
        bigImages = <h1 className="display-md-1 display-3 no-hero">There aren't any Heroes Left to Show</h1>
    }


    return(
        <div className="Heroes">
            {bigImages}
            {names}
        </div>   
    ); 
}

export default Heroes;