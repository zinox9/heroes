import React from 'react';
import './Base.css';
import Aux from '../../hoc/Auxn';
import '../../container/Animations.css';


function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../../assets/images/base', false, /\.(png|jpe?g|svg)$/));



const Base = (props) => {

    let information = (
        <Aux>
            {props.characters.map((char, index) => {
                return (
                    <div className="Base pb-md-3 pb-2 m-0 card mb-3" key={char.key}>
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <img src={images[char.charImg]} alt={char.name + " character"} className="char" />
                            </div>
                            <div className="col-6 col-lg-3 align-self-center">
                                <h1>{char.name}</h1>
                                <p className={"major "+char.key}>Major : "{char.major}"</p>
                            </div>
                            <div className="col-12 col-lg-3 align-self-center data">
                                <p className="about">{char.about}</p>
                            </div>
                            <div className="col-12 col-lg-3">
                                <img src={images[char.heroImg]} alt={char.name + "Super Suit"} className="hero img-fluid" />
                            </div>
                        </div>
                        <div className="input-group form-inline">
                            <input type="text" placeholder="Give this Hero name you Wish" className="namer mx-1 mx-md-3 mt-2 text-center form-control" onChange={props.changed} id={char.key}/>
                            {(char.added) ? 
                                <button id={char.key} className="delete mx-md-3 mx-1 mt-2 text-center" onClick={props.deleted}>X</button> : 
                                <button id={char.key} className="add mx-md-3 mx-1 mt-2 text-center" onClick={props.added}>+</button> 
                            }
                            
                        </div>   
                    </div>
                )
            })}
        </Aux>
    );

    return(
        <Aux>
            {information}
        </Aux>
           
    )
}


export default Base;