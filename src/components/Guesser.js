import React, { Component } from "react";

class Guesser extends Component {
  numberGuess = React.createRef();

  handleForm = e => {
    e.preventDefault();
    this.props.guessNumber(this.numberGuess.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <input type="number" name="guess" ref={this.numberGuess} />
        <button>Guess!</button>
      </form>
    );
  }
}

export default Guesser;
