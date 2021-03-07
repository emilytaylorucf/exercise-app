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
    const headStyle = {
      color: "white",
      borderStyle: "solid",
      borderWidth: "5px",
      borderColor: "#90e0ef",
      padding: "5px",
      backgroundColor: "#fec5bb"
    }

    const buttonStyle ={
      backgroundColor: "#90e0ef",
      color: "white",
      borderColor: "#fec5bb"
    }

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
          <h1 style={headStyle}>Emily's Exercise App</h1>
          <br></br>
          <p style={{color: "#fec5bb"}}>Welcome to Emily's Exercise App! 
          Here we are focused on fitness while having fun. Below is a specialized plan with an enjoyable watch list. 
          We hope you enjoy!</p>
          <br></br>
          <h2 style={headStyle}>Workout Routine</h2>
          <p style={{color: "#fec5bb"}}>Your workout routine!</p>
          <>
            {exercises.map((exercise) =>
              exercise.exType == "repetition" ? (
                <button style={buttonStyle} onClick={() => this.setState({ currentScreen: REPETITION, selectedItem: exercise })}>{exercise.exName}</button>
              ) : (
                  <button style={buttonStyle} onClick={() => this.setState({ currentScreen: DURATION, selectedItem: exercise })}>{exercise.exName}</button>
                ) 

            )}
          </>
          <h2 style={headStyle}>Exercise Watch List</h2>
          <p style={{color: "#fec5bb"}}>Some TV shows to watch while you work out!</p>
          <>
              {watchlist.map((show) =>
                show.genre == "anime" ? (
                  <button style={buttonStyle} onClick={() => this.setState({ currentScreen: ANIME, selectedItem: show })}>{show.tvname}</button>
                ) : (
                    <button style={buttonStyle} onClick={() => this.setState({ currentScreen: COMEDY, selectedItem: show})}>{show.tvname}</button>
                )
                )}
          </>
        </>)
        break
      case DURATION:
        screen = 
        <>
        <DurationExercise {...this.state.selectedItem}></DurationExercise>
        <button style={buttonStyle} onClick={() => this.setState({currentScreen: MENU})}>Home</button>
        </>
        break
      case REPETITION:
        screen = 
        <>
        <RepetitionExercise {...this.state.selectedItem}></RepetitionExercise>
        <button style={buttonStyle} onClick={() => this.setState({currentScreen: MENU})}>Home</button>
        </>
        break
      case ANIME:
        screen = 
        <>
        <AnimeShow {...this.state.selectedItem}></AnimeShow>
        <button style={buttonStyle} onClick={() => this.setState({currentScreen: MENU})}>Home</button>
        </>
        break
      case COMEDY:
        screen = 
        <>
        <ComedyShow {...this.state.selectedItem}></ComedyShow>
        <button style={buttonStyle} onClick={() => this.setState({currentScreen: MENU})}>Home</button>
        </>
        break
    }
    return screen
  }
}

export default MenuScreen