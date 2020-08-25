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
import soundWrong from './Assets/Sounds/wrong_sound.mp3';
import soundRight from './Assets/Sounds/right_sound.mp3';

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
  pressedVariants: new Set(),
  isGuessedRight: false,
  addScore: 5,
}

class App extends React.Component {
  currentState = beginningState;

  handleVariants = event => {
    if (event.target.closest(".choice") === null) {
      return;
    }
    const index = event.target.closest(".choice").dataset.index;

    this.setState({
      selectedChoice: +index,
      classDescription: "visible",
      classHint: "hidden"
    });

    const handleTrueVariant = () => {
      if (this.currentState.isGuessedRight === false) {
        this.setState({
          score: this.currentState.score + this.currentState.addScore,
          isGuessedRight: true,
          isButtonNextLevelActive: true,
          animals: {
            name: animalsInfo[this.currentState.currentTabNum][this.currentState.random].name,
            image:
              animalsInfo[this.currentState.currentTabNum][this.currentState.random].image
          }
        });

        if (this.currentState.currentTabNum === 5) {
          this.setState({
            end: "end_wrapper"
          });
        }
      }
    };

    const handleFalseVariant = () => {
      if (
        this.currentState.addScore > 0 &&
        this.currentState.pressedVariants.has(index) === false
      ) {
        this.setState({
          addScore: this.currentState.addScore - 1
        });
      }

      const pressedVariants = this.currentState.pressedVariants;
      pressedVariants.add(index);
      this.setState({ pressedVariants });
    };

    +index === this.currentState.random
      ? handleTrueVariant()
      : handleFalseVariant();
  };

  handleVariant = event => {
    const index = +event.currentTarget.dataset.index;
    const mistakes = this.currentState.mistakes.concat();

    const makeGreen = () => {
      mistakes.splice(index, 1, "grey green");
      this.setState({ mistakes });
      this.audio = new Audio(soundRight);
      this.audio.play();
      this.setState({ toPlay: true });
    };

    const makeRed = () => {
      mistakes.splice(index, 1, "grey red");
      this.setState({ mistakes });
      this.audio = new Audio(soundWrong);
      this.audio.play();
    };

    index === this.currentState.random ? makeGreen() : makeRed();
  };

  buttonNextLevelHandler = () => {
    if (this.currentState.isButtonNextLevelActive) {
      if (this.currentState.currentTabNum === 5) {
        this.setState(beginningState);
        this.setState({
          pressedVariants: new Set()
        });
        return;
      }
      this.setState({
        animals: {
          name: beginningState.animals.name,
          image: beginningState.animals.image,
          description: beginningState.animals.description
        },
        random: random(0, 5),
        addScore: beginningState.addScore,
        isButtonNextLevelActive: beginningState.isButtonNextLevelActive,
        isGuessedRight: beginningState.isGuessedRight,
        pressedVariants: new Set(),
        classDescription: beginningState.classDescription,
        classHint: beginningState.classHint,
        currentTabNum: this.currentState.currentTabNum + 1,
        mistakes: beginningState.mistakes,
        toPlay: beginningState.toPlay
      });
    }
  };

  render() {
    console.log('1= ' + this.currentState.score);
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
