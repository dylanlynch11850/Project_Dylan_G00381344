//my imports i have used 
import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

export class Create extends React.Component {

    // important bind events from each onChange attributes
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTeamTitle = this.onChangeTeamTitle.bind(this);
        this.onChangeTeamPosition = this.onChangeTeamPosition.bind(this);
        this.onChangeNameOfPlayer = this.onChangeNameOfPlayer.bind(this);
        this.state = {
           title:'',
           position:'',
           player:'',

        }
    }

    // taking event when click the submit button in the form
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.position},
        ${this.state.player}`);

        //constraints
        const soccer = {
          title:this.state.title,
            position:this.state.position,
            player:this.state.player
        }
//link to localhost
        axios.post('http://localhost:4000/api/soccers',soccer)
        .then()
        .catch();

        //setting the state 
        this.setState({
            title:'',
            position:'',
            player:''
        })
    }

    // when the value in the field changes, this event will triger.
    onChangeTeamTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeTeamPosition(e) {
        this.setState({
            position: e.target.value
        })
    }

    onChangeNameOfPlayer(e) {
        this.setState({
            player: e.target.value
        })
    }
//where rendering happens
    render() {
        return (

            // Insert HTML code in the div element
            //card and card styling
            <div >
                <br></br>
                <h2>Here you can add records by following the steps below</h2>
                <br></br>
                <h5>You can fill the below form by simply clicking in the input box and typing your
                     answer then move on to the next box and do the same, then move on to the final box
                      and input your data and select the green "Add" button below and proceed to inputed records</h5>
                      <br></br>
                <center>
                <form onSubmit={this.handleSubmit}>

                
                    <Card style={{ width: '18rem' }}>
                    <div className="form-group">
                        <label>Add The Name Of the Soccer Team: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTeamTitle}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Add Where you Predict The Soccer Team Will Finish In The League: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.position}
                            onChange={this.onChangeTeamPosition}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Add The Name Of Your Favourite Player On This Team: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.player}
                            onChange={this.onChangeNameOfPlayer}
                        />
                    </div>

                    </Card>
                    <br></br>
                    <input type="submit" value="Add" className="btn btn-success" />
                </form>
                </center>
            </div>
            


        )
    }
}