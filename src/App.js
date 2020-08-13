import React from 'react';
import './App.css';
import animalsInfo from "./Assets/Data/animalsInfo";
import Header from "./Components/Header/Header";

const beginningState = {
  score: 0,
}

class App extends React.Component {
  currentState = beginningState;

  render() {
    return (
      <div className="App">
        <Header Result={this.currentState.score} />
      </div>
    );
  }
}

export default App;
