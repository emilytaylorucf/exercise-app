import React from "react"

class ComdeyShow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.tvname,
            genre: this.props.genre,
            description: this.props.description
        }
    }

    render(){
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

        return(
        <>
        <h2 style ={headStyle}>{this.state.name}</h2>
        <h3 style ={headStyle}>Genre: {this.state.genre}</h3>
        <p style={{color: "white", backgroundColor: "#90e0ef"}}>{this.state.description}</p>
        </>)
    }
}
export default ComdeyShow