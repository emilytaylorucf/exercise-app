import React from "react"

class AnimeShow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.tvname,
            genre: this.props.genre,
            description: this.props.description
        }
    }

    render(){
        return(
        <>
        <h2>{this.state.name}</h2>
        <h3>Genre: {this.state.genre}</h3>
        <p>{this.state.description}</p>

        </>)
    }

}
export default AnimeShow