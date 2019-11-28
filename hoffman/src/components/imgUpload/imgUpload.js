import React, {useState, useEffect} from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react'
import axios from "axios"

const ImgUpload = props => {
    const [image, setImage] = useState([])

    useEffect(()=> {
        axios
        .get('https://res.cloudinary.com/hoffman-house/image/list/test.json')
        .then(res => {
            console.log(res)
            setImage(res.data.resources)
        })
    }, [])

    console.log(image)

    const checkUploadResult = (resultEvent) => {
        if (resultEvent.event === "success") {
            console.log(resultEvent.info.secure_url)
        }
    }
    

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "hoffman-house", uploadPreset: "kov2px0a", tags:['test'] }, (error, result) => {checkUploadResult(result)})
        
        const showWidget = (widget) => {
            widget.open()
        }
    
   
    
    
   

    
    
    return (
        <div>
            <CloudinaryContext cloudName="hoffman-house">
                
            {image.map ((data, index) => (
                <div key={index}>
                    
                    <img width="300" src={`http://res.cloudinary.com/hoffman-house/image/upload/${data.public_id}.jpg`}/>
                </div>
            ))}   
            </CloudinaryContext>
           
            <button onClick={() => showWidget(widget)} id="upload_widget" className="cloudinary-button">Upload files</button>
        </div>
    )
}

export default ImgUpload