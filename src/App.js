import React from "react"
import './App.css';
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";

const MENU = "menu"
const DURATION = "duration"
const REPETITION = "repetition"

class MenuScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentScreen: MENU, selectedItem: undefined }
  }
  render() {
    let exercises = [
      { exName: "Sprint", exType: "duration" },
      { exName: "Jog", exType: "duration" },
      { exName: "Jumping Jacks", exType: "repetition" },
      { exName: "Sit Ups", exType: "repetition" }
    ]

    let screen
    switch (this.state.currentScreen) {
      case MENU:
        screen = (<>
          <h2>Exercise Time!</h2>
          <>
            {exercises.map((exercise) =>
              exercise.exType == "repetition" ? (
                <button onClick={() => this.setState({ currentScreen: REPETITION, selectedItem: exercise })}>{exercise.exName}</button>
              ) : (
                  <button onClick={() => this.setState({ currentScreen: DURATION, selectedItem: exercise })}>{exercise.exName}</button>
                )

            )}
          </>
        </>)
        break
      case DURATION:
        screen = <DurationExercise {...this.state.selectedItem}></DurationExercise>
        break
      case REPETITION:
        screen = <RepetitionExercise {...this.state.selectedItem}></RepetitionExercise>
        break
    }
    return screen
  }
}

export default MenuScreen