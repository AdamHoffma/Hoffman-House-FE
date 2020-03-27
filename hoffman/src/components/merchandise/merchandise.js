import React, {useState, useEffect} from 'react'
import {CloudinaryContext} from 'cloudinary-react'
import axios from 'axios'
import Nav from '../nav/nav.js'
import './merchandise.css'

const Merchandise = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/merchandise')
        .then(res => {
            console.log("Merchandise", res)
            setImage(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
        <Nav />
        <CloudinaryContext>
            {image.map((data, index) => (
                <div className="image_container_merchandise" key={index}>
                    <img className="merchandise" height="300" width="300" 
                    src ={`http://res.cloudinary.com/hoffman-house/image/upload/${data.image}.jpg`}/>
                    <p className='merchandise_description'>{data.description}</p>
                    <p className='merchandise_price'>{data.price}</p>
                </div>
            ))}
        </CloudinaryContext>
        </div>
    )
}

export default Merchandise