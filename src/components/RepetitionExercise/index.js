import React from "react"

class RepetitionExercise extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            value: this.props.exName
        }
    }

    render() {
        const headStyle = {
            color: "white",
            borderStyle: "solid",
            borderWidth: "5px",
            borderColor: "#90e0ef",
            width: "fit-content",
            padding: "5px",
            backgroundColor: "#fec5bb"
          }
      
          const buttonStyle ={
            backgroundColor: "#90e0ef",
            color: "white",
            borderColor: "#fec5bb"
          }

        return (
            <>
                <h2 style={headStyle}>{this.state.value}</h2>
                <p style={buttonStyle}>Reps: {this.state.counter}</p>
                <button style={buttonStyle} onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>Add Rep</button>
                <button style={buttonStyle} onClick={() => { this.setState({ counter: 0 }) }}>Reset</button>

            </>
        )
    }

}

export default RepetitionExercise