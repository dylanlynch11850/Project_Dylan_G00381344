//imports used 
import React from "react";
import { Soccers } from "./soccer";
import axios from "axios";

//exports used here 
export class Read extends React.Component{

    //valid constructor
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   //The componentDidMount () method allows us to execute the React code when the component is already placed in the DOM
    componentDidMount() {
        axios.get('http://localhost:4000/api/soccers')
            .then((response) => {
                this.setState({ soccers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        soccers: []
    }

    //rendering happening here 
    render() {

        //what has to be returned 
        return (
            <div>
                <br></br>
                <h2>Here is where you can find your recorded inputs</h2>
                <Soccers soccers={this.state.soccers} Reload={this.componentDidMount}></Soccers>
                <br></br>
            </div>
        );
    }}