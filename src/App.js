import React from 'react';
import './App.css';
import animalsInfo from './Assets/Data/animalsInfo';
import Header from './Components/Header/Header';
import Quiz from './Components/Quiz/Quiz'
import random from 'lodash/random';
import Tabs from './Components/Tabs/Tabs';
import Choices from './Components/Choices/Choices';
import Information from './Components/Information/Information'
import ButtonNextLevel from './Components/ButtonNextLevel/ButtonNextLevel';

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
  selectedChoice: 0,
  mistakes: new Array(6).fill("grey"),
  classHint: "visible",
  classDescription: "hidden",
  isButtonNextLevelActive: false,
}

class App extends React.Component {
  currentState = beginningState;

  render() {
    console.log(this.currentState);

    return (
      <div className="App">
        <Header Result={this.currentState.score} />
        <Tabs currentTabNum={this.currentState.currentTabNum} />
        <Quiz
          toPlay={this.currentState.toPlay}
          name={this.currentState.animals.name}
          image={this.currentState.animals.image}
          audio={animalsInfo[this.currentState.currentTabNum][this.currentState.random].audio}
        />
        <div className="selection_wrapper">
          <Choices
            currentTabNum={this.currentState.currentTabNum}
            onTap={event => this.handleVariants(event)}
            onClick={event => this.handleVariant(event)}
            random={this.currentState.random}
            mistakes={this.currentState.mistakes}
          />
          <Information
            hint={this.currentState.animals.description}
            classHint={this.currentState.classHint}
            classDescription={this.currentState.classDescription}
            image={animalsInfo[this.currentState.currentTabNum][this.currentState.selectedChoice].image}
            name={animalsInfo[this.currentState.currentTabNum][this.currentState.selectedChoice].name}
            latin={animalsInfo[this.currentState.currentTabNum][this.currentState.selectedChoice].species}
            audio={animalsInfo[this.currentState.currentTabNum][this.currentState.selectedChoice].audio}
            description={animalsInfo[this.currentState.currentTabNum][this.currentState.selectedChoice].description}
          />
        </div>
        <ButtonNextLevel
          name="Next Level"
          active={this.currentState.isButtonNextLevelActive}
          onClick={() => this.buttonNextLevelHandler()}
        />
      </div>
    );
  }
}

export default App;
