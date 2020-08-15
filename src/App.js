import React from 'react';
import './App.css';
import animalsInfo from './Assets/Data/animalsInfo';
import Header from './Components/Header/Header';
import Quiz from './Components/Quiz/Quiz'
import random from "lodash/random";

const beginningState = {
  score: 0,
  animals: {
    name: "******",
    image: "https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg",
    description:
      "Songbird - викторина распознавания животных по их голосам. Прослушайте запись и выберите животное из списка!"
  },
  toPlay: false,
  currentTabNum: 0,
  random: random(0, 5),
}

class App extends React.Component {
  currentState = beginningState;

  render() {
    console.log(this.currentState);

    return (
      <div className="App">
        <Header Result={this.currentState.score} />
        <Quiz
          toPlay={this.currentState.toPlay}
          name={this.currentState.animals.name}
          image={this.currentState.animals.image}
          audio={animalsInfo[this.currentState.currentTabNum][this.currentState.random].audio}
        />
      </div>
    );
  }
}

export default App;
