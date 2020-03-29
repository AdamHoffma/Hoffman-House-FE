import React, {useState, useEffect} from 'react';
import axios from "axios"
import SlideShow from './slideshow.js'
import "../../App.css";


const Home = props => {
    console.log("PROPS", props)
    const [merch, setMerch] = useState([])
    const [shows, setShows] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/shows")
        .then(res => {
            setShows(res.data)
            console.log("shows", res.data)
        })
    }, [])

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/merchandise')
        .then(res => {
            setMerch(res.data)
            console.log("res", res.data)
        })
        .catch(error => {
            console.log("error", error)
    })
    
    }, [])

    return (
        <div className="container">            
                <div className="showsandslide">
            <SlideShow/>
            <div className="showscontainer">
                <h1>UpComing Shows</h1>
                {shows.map(show => {
                    return <div className="text_box">
                         <h3>Show: {show.name}</h3>
                        <h3>Location: {show.location}</h3>
                        <h3>Date: {show.date}</h3>
                        </div>
                })}
            </div>
            </div>
        </div>
    )
}

export default Home