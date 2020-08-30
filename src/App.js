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
    name: '******',
    image: 'https://img-fotki.yandex.ru/get/893904/86441892.e54/0_146606_a78f9aac_orig.jpg',
    description:
      'AnimalSong - викторина распознавания животных по их голосам. Прослушайте запись и выберите животное из списка!'
  },
  toPause: false,
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
  end: "end_wrapper-hidden",
  endImage: "end_image-hidden"
}

class App extends React.Component {
  state = beginningState;

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
      if (this.state.isGuessedRight === false) {
        this.setState({
          score: this.state.score + this.state.addScore,
          isGuessedRight: true,
          isButtonNextLevelActive: true,
          animals: {
            name: animalsInfo[this.state.currentTabNum][this.state.random].name,
            image:
              animalsInfo[this.state.currentTabNum][this.state.random].image
          }
        });

        if (this.state.currentTabNum === 5) {
          this.setState({
            end: "end_wrapper"
          });
        }
      }
    };

    const handleFalseVariant = () => {
      if (
        this.state.addScore > 0 &&
        this.state.pressedVariants.has(index) === false
      ) {
        this.setState({
          addScore: this.state.addScore - 1
        });
      }

      const pressedVariants = this.state.pressedVariants;
      pressedVariants.add(index);
      this.setState({ pressedVariants });
    };

    +index === this.state.random
      ? handleTrueVariant()
      : handleFalseVariant();
  };

  handleVariant = event => {
    const index = +event.currentTarget.dataset.index;
    const mistakes = this.state.mistakes.concat();

    const makeGreen = () => {
      mistakes.splice(index, 1, "grey green");
      this.setState({ mistakes });
      this.audio = new Audio(soundRight);
      this.audio.play();
      this.setState({ toPause: true });
    };

    const makeRed = () => {
      mistakes.splice(index, 1, "grey red");
      this.setState({ mistakes });
      this.audio = new Audio(soundWrong);
      this.audio.play();
    };

    index === this.state.random ? makeGreen() : makeRed();
  };

  buttonNextLevelHandler = () => {
    if (this.state.isButtonNextLevelActive) {
      if (this.state.currentTabNum === 5) {
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
        currentTabNum: this.state.currentTabNum + 1,
        mistakes: beginningState.mistakes,
        toPause: beginningState.toPause
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} />
        <Tabs currentTabNum={this.state.currentTabNum} />
        <Quiz
          toPause={this.state.toPause}
          name={this.state.animals.name}
          image={this.state.animals.image}
          audio={animalsInfo[this.state.currentTabNum][this.state.random].audio}
        />
        <div className="selection_wrapper">
          <Choices
            currentTabNum={this.state.currentTabNum}
            onTap={event => this.handleVariants(event)}
            onClick={event => this.handleVariant(event)}
            random={this.state.random}
            mistakes={this.state.mistakes}
          />
          <Information
            hint={this.state.animals.description}
            classHint={this.state.classHint}
            classDescription={this.state.classDescription}
            image={animalsInfo[this.state.currentTabNum][this.state.selectedChoice].image}
            name={animalsInfo[this.state.currentTabNum][this.state.selectedChoice].name}
            latin={animalsInfo[this.state.currentTabNum][this.state.selectedChoice].species}
            audio={animalsInfo[this.state.currentTabNum][this.state.selectedChoice].audio}
            description={animalsInfo[this.state.currentTabNum][this.state.selectedChoice].description}
          />
        </div>
        <ButtonNextLevel
          name="Next Level"
          active={this.state.isButtonNextLevelActive}
          onClick={() => this.buttonNextLevelHandler()}
        />
        <div className={this.state.end}>
          <h1 className="score-end">Score:<span className="score-end-number">{this.state.score}</span></h1>
          <h2 className={this.state.score === 30 ? "" : beginningState.endImage}>
            Done. You are an absolute winner!
          </h2>
          <img
            style={{ width: "50%" }}
            src="https://i.gifer.com/YARz.gif"
            className={this.state.score === 30 ? "" : beginningState.endImage}
            alt="winner"
          />
          <ButtonNextLevel
            name="Try again!"
            active={this.state.isButtonNextLevelActive}
            onClick={() => this.buttonNextLevelHandler()}
          />
        </div>
      </div>
    );
  }
}

export default App;
