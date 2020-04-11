import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './container/Base/Base';
import Heroes from './components/Heroes/Heroes';
import Footer from './container/Footer/Footer';
import Aux from './hoc/Auxn';

class App extends Component { 

  state = {
    characters : [
      { name: "Hiro Hamada", added: true, bigImg: 3, charImg: 7, heroImg: 6, key: "hero1", 
      major: "Computers, Robotics", 
      about: "Has a Brain of a Genius. Creator of All Super Suits. Out of the Box thinker!!" },

      { name: "Baymax", added: true, bigImg: 0, charImg: 0, heroImg: 1, key: "hero2",
      major: "Personal Healthcare Companion", 
      about: "Robot made for Personal Care. Knows Karate. Can shoot his Fist and even Fly!!" },

      { name: "Gogo Tomago", added: true, bigImg: 2, charImg: 4, heroImg: 5, key: "hero3", 
      major: "Speed, Stunts", 
        about: "Made Electromagnetic Discs used for Riding or Attacking. Natural Leader. Loves Bubble Gum!!" },

      { name: "Fred", added: true, bigImg: 1, charImg: 3, heroImg: 2, key: "hero4", 
      major: "Fiction Science, Imagination", 
      about: "Comic Book Enthusiast. Eccentric and a good Imaginator. Throws Fire & can Jump High!!." },

      { name: "Honey Lemon", added: true, bigImg: 4, charImg: 9, heroImg: 8, key: "hero5", 
      major: "Chemistry, Reactions", 
        about: "Has a Special Purse with encoding of Periodic Table. Makes Palm-sized Chemical Balls to attack. Most Intelligent!!" },

      { name: "Wasabi", added: true, bigImg: 5, charImg: 11, heroImg: 10, key: "hero6", 
      major: "Lasers, Physics", 
        about: "A Place for everything, Everything in it's Place. Super Smart and Neurotic. Laser Indused Plasma Blades in his Forearms!!" }
    ]
  }

  findChar = (id) => {
    for(let i=0; i<=5; i++){
      if(this.state.characters[i].key === id){
        return i;
      } 
    }
  }

  nameChange = (event) => {
    const index = this.findChar(event.target.id);
    const character = this.state.characters[index];
    const copiedChar = [...this.state.characters]; 

    character.name = event.target.value;
    copiedChar[index] = character;
    this.setState({characters: copiedChar})
  }

  deleteHero = (event) => {
    window.scrollTo(0,0);
    const index = this.findChar(event.target.id);
    console.log(event.target);
    const character = this.state.characters[index];
    const copiedChar = [...this.state.characters];
    character.added=false;
    copiedChar[index] = character;
    this.setState({characters: copiedChar})
  }

  addHero = (event) => {
    window.scrollTo(0,0);
    const index = this.findChar(event.target.id);
    const character = this.state.characters[index];
    const copiedChar = [...this.state.characters];
    character.added=true;
    copiedChar[index] = character;
    this.setState({characters: copiedChar})
  }
  


  render() {
    return (
      <Aux>
        <div className="App  pb-md-3  pb-3">
          <div className="mx-md-5 mx-3 main">
            <h1 className="title slide-in-top">Heroes' Corner</h1>
            <Heroes characters={this.state.characters}/>
          </div>
          <div className="back pt-4 px-md-5 px-3 pb-3">
            <Base characters={this.state.characters} changed={this.nameChange} deleted={this.deleteHero} added={this.addHero}></Base>
          </div>
            <Footer/>
        </div>
      </Aux>
    );
  }
}

export default App;
