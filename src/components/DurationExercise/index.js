import React from "react"
//Followed timer guide and adjusted it. Found at https://betterprogramming.pub/building-a-simple-countdown-timer-with-react-4ca32763dda7
class DurationExercise extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            value: this.props.exName
        }
    }
    //This code is from the demo. Originally was componentWillMount but I changed it to attatch to start button onClick
    startTimer() {
        this.myInterval = setInterval(() => {
            this.setState(({ seconds }) => ({
                seconds: seconds + 1
            }))
        }, 1000)

    }
    //This code is also from the demo as componentUnmount, but I changed it to clear the interval, reset the timer, and be attatced to the button rather than unmounting
    stopTimer() {
        clearInterval(this.myInterval);
        this.setState(({ seconds }) => ({
            seconds: seconds - seconds
        }));
    }
    //The <p>Duration: </p> code follows the tutorial in the source linked at the top of the file. I used it to help format my seconds to show double digits
    render() {
        const { minutes, seconds } = this.state
        return (
            <>
                <h2>{this.state.value}</h2>
                <p>Duration: {minutes} : {seconds < 10 ? `0${seconds}` : seconds}</p>
                <button onClick={() => this.startTimer()}>Start</button>
                <button onClick={() => this.stopTimer()}>Reset</button>
            </>
        )
    }

}

export default DurationExercise