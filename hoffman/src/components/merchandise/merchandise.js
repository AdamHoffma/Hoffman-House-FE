import React, {useState, useEffect} from 'react'
import {CloudinaryContext} from 'cloudinary-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../nav/nav.js'
import './merchandise.css'

const Merchandise = props => {
    const [image, setImage] = useState([])
    const [merch, setMerch] = useState([])
    console.log('HISTORY', props)
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
    
    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/merchandise/merch/${props.match.params.id}`)
        .then(res => {
            console.log("Merchandise", res)
            setImage(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [props.match.params.id])
    console.log(props)

    return (
        <div>
        <Nav history={props.history} />        
        <CloudinaryContext>
        <div className="image_container_merchandise">
            {image.map((data, index) => {
                 if (data.category == "Decor" || "Vintage" || "Jewelry") {
                    return <div className="inner_container_merchandise" key={index}>
                    <Link to={`/productcard/${data.id}`}><img className="merchandise" height="300" width="300" 
                    src ={`http://res.cloudinary.com/hoffman-house/image/upload/${data.image}.jpg`}/></Link>
                    <p className='merchandise_description_text'> {data.name}</p>
                    <p className='merchandise_description_text'>Price: ${data.price}</p>
                </div>
                }
            })}
        </div>
        </CloudinaryContext>
        
        </div>
    )
}

export default Merchandise