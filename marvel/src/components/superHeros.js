import React from "react";
import {
    HashRouter,
    NavLink,
    Routes,
    Route
  } from "react-router-dom";
import axios from "axios";

class Get_Super_Heros extends React.Component{

    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount = () => {
        axios.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=53de675ecab7ad6a6185988750bb502a&hash=15599632942a6e2b9dc28bc6626d2c5f")
        .then(response => {
            console.log("Fetched data: ", response.data.data.results);
            this.setState({
                data: response.data.data.results[12].images
            })
            console.log("Fetched data: ", this.state.data);
        })
        .catch(error => console.log(error.message))
    }

    render(){
        let id = 0;
        return (
            <React.Fragment>
                <h1>Here are the super heros.</h1>
                <div>
                    {
                        this.state.data.map(image => {
                            id++;
                            return <img key={image.extension + id} className="hero-images" src={image.path + "." + image.extension}></img>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Get_Super_Heros;