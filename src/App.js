import React from "react"
import './App.css';
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import AnimeShow from "./components/AnimeShow";
import ComedyShow from "./components/ComedyShow";

const MENU = "menu"
const DURATION = "duration"
const REPETITION = "repetition"
const ANIME = "anime"
const COMEDY = "comedy"


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

    let watchlist = [
      { tvname: "Attack on Titan", genre: "anime", description: "Humanity is trapped within walled cities to protect them from the Titans. When the Titans breach the wall, will humanity be able to hang on to survival?"  },
      { tvname: "The Big Bang Theory", genre: "comedy", description: "Four brilliant scientists making their way though experimentation, relationships, and shenanigans" },
      { tvname: "Demon Slayer", genre: "anime", description: "Tanjiro's family has been slain by demons, and his sister turned in to one. He must fight off demons to protect his sister Nezuko and find the cure to turn her back to her human form" },
      { tvname: "Friends", genre: "comedy", description: "A group of friends living in NYC try and navigate life with plenty of shenanigans, romance, and fun" }
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
          <h2>Exercise Watch List</h2>
          <p>Some TV shows to watch while you work out!</p>
          <>
              {watchlist.map((show) =>
                show.genre == "anime" ? (
                  <button onClick={() => this.setState({ currentScreen: ANIME, selectedItem: show })}>{show.tvname}</button>
                ) : (
                    <button onClick={() => this.setState({ currentScreen: COMEDY, selectedItem: show})}>{show.tvname}</button>
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
      case ANIME:
        screen = <AnimeShow {...this.state.selectedItem}></AnimeShow>
        break
      case COMEDY:
        screen = <ComedyShow {...this.state.selectedItem}></ComedyShow>
        break
    }
    return screen
  }
}

export default MenuScreen