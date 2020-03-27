import React, {useState, useEffect} from 'react'
import {CloudinaryContext} from 'cloudinary-react'
import axios from 'axios'

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
        <CloudinaryContext>
            {image.map((data, index) => (
                <div key={index}>
                    <img className="merchandise" height="300" width="300" 
                    src ={`http://res.cloudinary.com/hoffman-house/image/upload/${data.image}.jpg`}/>
                </div>
            ))}
        </CloudinaryContext>
        </div>
    )
}

export default Merchandise