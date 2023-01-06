//imports used
import React from "react";
import {SoccerItem} from './soccerItem';

//exports 
export class Soccers extends React.Component{
    render(){

        //return values 
        return this.props.soccers.map(
            (soccer)=>{
                return <SoccerItem soccer={soccer} key={soccer._id} ReloadData={this.props.ReloadData}></SoccerItem>
            }
        );
    }
}