// imports i have used 
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//export functions
export function Edit(){
    let {id} = useParams();
    const [title, setTitle] = useState('');
    const [position, setPosition] = useState('');
    const [player, setPlayer] = useState('');

    //effects and link to my localhost
    useEffect(()=>{
        axios.get('http://localhost:4000/api/soccer/'+id)
        .then((response)=>{
            setTitle(response.data.title);
            setPosition(response.data.position);
            setPlayer(response.data.player);
        })
        .catch()
    },[]);

    // handeling the submited data
    const handleSubmit = (e)=>{
        e.preventDefault();

        const editSoccer = {
            title:title,
            position:position,
            player:player
        }

        //link to localhost 
        axios.put('http://localhost:4000/api/soccer/'+id,editSoccer)
        .then()
        .catch();
    }
 //what is to be returned 
    return(
        <div>
            <br></br>
            <h2>Here you can edit your inputed record below</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit Soccer Team: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit predicted Position: </label>
                        <input type="text"
                            className="form-control"
                            value={position}
                            onChange={(e)=>{setPosition(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit your favourite Player: </label>
                        <input type="text"
                            className="form-control"
                            value={player}
                            onChange={(e)=>{setPlayer(e.target.value)}}
                            
                        />
                        <br></br>
                    </div>
                <input type="submit" value="Save Your Changes"></input>
            </form>
        </div>
    );
}