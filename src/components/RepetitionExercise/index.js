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
        return (
            <>
                <h2>{this.state.value}</h2>
                <p>Reps: {this.state.counter}</p>
                <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>Add Rep</button>
                <button onClick={() => { this.setState({ counter: 0 }) }}>Reset</button>

            </>
        )
    }

}

export default RepetitionExercise