import React, {useState, useEffect} from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react'
import axios from "axios"

const ImgUpload = props => {
    const [image, setImage] = useState([])
    const [merch, setMerch] = useState([])
    const [test, setTest] = useState([])

    useEffect(()=> {
        axios
        .get('https://res.cloudinary.com/hoffman-house/image/list/test.json')
        .then(res => {
            console.log("Response from cloudinar", res)
            setImage(res.data.resources)
        })
    }, [])

    
    useEffect(()  => {
        axios
        .get('http://localhost:5000/api/merchandise')
        .then(res => {
            console.log("response from BE", res)
            setMerch(res.data)
        })
    }, [])  
    
    useEffect(() => {
        axios 
        .get(`http://res.cloudinary.com/hoffman-house/image/upload/`)
        .then(res => {
            setTest(res)
        })
    }, [])
    console.log("Test", test)

    const checkUploadResult = (resultEvent) => {
        if (resultEvent.event === "success") {
            console.log("cloudinary upload result", resultEvent.info.secure_url)
        }
    }
    
    

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "hoffman-house", uploadPreset: "kov2px0a", tags:['test'] }, (error, result) => {checkUploadResult(result)})
        
        const showWidget = (widget) => {
            widget.open()
        }

        // how to get my DBs connected.... Images with despcriptions
   /* useEffect(() => {
        axios
            .get("http://localhost:5000/api/merchandise")
            .then(res => {
                const merch = res.data.map(y => y)
                console.log("y", merch)
                axios
                    .get("https://res.cloudinary.com/hoffman-house/image/list/test.json")
                    .then(res => {
                        const imageContainer = res.data.resources.map(x => x)
                        const both = {merch, imageContainer}
                        const two = imageContainer.map(c => {
                            merch.map(r => { return {
                                image: r[0].category,
                                format: c[0].version
                            }
                            })
                        })
                        console.log('both', both)
                            console.log("two", two)
                        console.log("imageContainer", imageContainer)
                    })
            })
    }, [])*/    
    
    return (
        <div>
            <CloudinaryContext cloudName="hoffman-house">
                
            {image.map ((data, index) => (
                <div key={index}>
                    
                    <img height="300" width="300" src={`http://res.cloudinary.com/hoffman-house/image/upload/${data.public_id}.jpg`}/>
                </div>
            ))}   
            </CloudinaryContext>
           
            <button onClick={() => showWidget(widget)} id="upload_widget" className="cloudinary-button">Upload files</button>
        </div>
    )
}

export default ImgUpload