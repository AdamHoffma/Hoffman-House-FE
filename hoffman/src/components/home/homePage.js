import React, {useState, useEffect} from 'react';
import axios from "axios"
import SlideShow from './slideshow.js'
import "../../App.css";


const Home = props => {
    const [merch, setMerch] = useState([])

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
            <h1 className="main_header">Hoffman House Antiques</h1>
            <input placeholder="Search Now" type="search"></input><br></br>
                <div className="dropcontainer">                
                    {merch.map(cat => {
                        return  <div className='dropdown'> 
                                    <button className="dropbtn">{cat.category}</button>
                                        <div className="dropdown-content">
                                            <a href="#">{cat.description}</a>
                                        </div>
                                    </div>
                    })}
                </div>
            <SlideShow/>
        </div>
    )
}

export default Home