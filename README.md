# Odd or Even Guessing App - Using React.js

App will guess if the number inputted is Odd or Even

**Goal:**

- Understand how to pass state and props
- Understand how to pass functions with props

**Features:**

- Guess the number if divisible by 2 or not

**Techs:**

- React.js
- CSS
- HTML

**Assets:**

- Font -

**Live links:**

- Codepen -
- Hosted with Netlify -

# Notes

Prerequisites:

- Must install Nodejs on your unit
- Must install NPM on your unit
- Install create-react-app installed to your node module ( check out [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app) for how to install the framework)
- Have a basic understanding of Javascript (ES6)
- Have a basic knowledge about React.js framework

## 1. Initialize State and create our Components

## App.js

Let's create are states to our App.js file.
```javascript
    import React, { Component } from "react";
    import Heading from "./components/Heading";
    import Guesser from "./components/Guesser";

    class App extends Component {
      state = {
        guess: 0
      };

      render() {
        return (
          <div>
            <Heading />
            <Guesser />
          </div>
        );
      }
    }

    export default App;
```
## Header.js

here we will display the result of the app.
```javascript
    import React from "react";

    const Heading = props => {

      return (
        <div>
          <h1>Odd or Even Guessing App</h1>
          <h2>{/* result of the guess here */}</h2>
        </div>
      );
    };

    export default Heading;
```
## Guesser.js

this component is for the input field and buttons of the app.
```javascript
    import React, { Component } from "react";

    class Guesser extends Component {
    	render() {
        return (
          <form>
            <input type="number" name="guess" />
            <button>Guess!</button>
          </form>
        );
      }
    }

    export default Guesser;
```
## 2. Lets start with passing the value from the input / form

In our Guesser.js we initialize our input to have a ref property for easy passing of value to the state.
```javascript
    class Guesser extends Component {
      numberGuess = React.createRef();
      render() {
        return (
          <form>
            <input type="number" name="guess" ref={this.numberGuess} />
            <button>Guess!</button>
          </form>
        );
      }
    }
```
In our App.js lets create a function to handle our setState
```javascript
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
            <Heading/>
            <Guesser guessNumber={this.guessNumber} />
          </div>
        );
      }
    }
```
We create a function to handle the submit form and apply the guessNumber fn from the App.js so that the new value can be update our state.
```javascript
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
```
## 3. Now we have our state updated, we can now identify if the state new value is odd or even.

Let's first pass the state value into our Heading.js as props.
```javascript
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
```
In our Heading.js let's create a function that validates our state value if odd or even. If the value is even return "Even-steven" and if the value is odd return 'Odd-Todd'
```javascript
    const Heading = props => {
      const changeHeader = number => {
        if (number % 2 === 0) {
          return "Even-Steven!!";
        }
        return "Odd-Todd!!";
      };

      return (
        <div>
          <h1>Odd or Even Guessing App</h1>
    			{/* the code below this line: verify if the initial or value of state is equals to 0. If so do not display any result.*/}
          <h2>{props.guess === 0 ? "" : changeHeader(props.guess)}</h2>
        </div>
      );
    };
```