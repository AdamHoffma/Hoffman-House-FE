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
        <div className="image_container_merchandise">
            {image.map((data, index) => {
                if (data.category == "Vintage") {                                
                 return <div className="inner_container_merchandise" key={index}>
                    <img className="merchandise" height="300" width="300" 
                    src ={`http://res.cloudinary.com/hoffman-house/image/upload/${data.image}.jpg`}/>
                    <p className='merchandise_description_text'>Description: {data.description}</p>
                    <p className='merchandise_description_text'>Price: ${data.price}</p>
                </div> }
                else if (data.category == "Decor") {
                    return <div className="inner_container_merchandise" key={index}>
                    <img className="merchandise" height="300" width="300" 
                    src ={`http://res.cloudinary.com/hoffman-house/image/upload/${data.image}.jpg`}/>
                    <p className='merchandise_description_text'>Description: {data.description}</p>
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