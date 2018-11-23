import React, { Component } from "react";
import Heading from "./components/Heading";
import Guesser from "./components/Guesser";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    guess: 0
  };

  guessNumber = numberToGuess => {
    console.log(numberToGuess);
    this.setState({
      guess: numberToGuess
    });
  };

  render() {
    return (
      <div>
        <Heading guess={this.state.guess} />
        <Guesser guessNumber={this.guessNumber} />
      </div>
    );
  }
}

export default App;
