import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UploadContainer from '../../containers/UploadContainers.js'
import { CloudinaryContext } from 'cloudinary-react'

const Products = () => {
    const [product, setProduct] = useState({})
    const [image, setImage] = useState([])
    const [merch, setMerch] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/merchandise')
        .then(res => {
            setMerch(res.data)
        })
    }, [])

    console.log("MERCH", merch)

    useEffect(() => {
        axios
        .get('https://res.cloudinary.com/hoffman-house/image/list/test.json')
        .then(res => {            
            setImage(res.data.resources[0].public_id)            
        })
    }, [])
    console.log("IMAGE", image)

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


    const Submit = (e) => {
        axios.post('http://localhost:5000/api/merchandise', product)
        .then(res => {

        })
        .catch(error => {
            console.log("ERROR", error)
        })
    }

    const ChangeHandler = e => {
        e.preventDefault()
        setProduct({...product, [e.target.name]: e.target.value})
    }
    console.log("PRODUCT", product)
    return (
        <div>
            <form type="submit">
                <input onChange={ChangeHandler} placeholder="image" name="image" value={image} type='text'/>
                <input onChange={ChangeHandler} placeholder="category" name="category" type='text'/>
                <input onChange={ChangeHandler} placeholder="description" name="description" type='text'/>
                <input onChange={ChangeHandler} placeholder="price" name="price" type='text'/>
                <input onChange={ChangeHandler} placeholder="weight" name="weight" type='text'/>
                <input onChange={ChangeHandler} placeholder="quanity" name="quanity" type='text'/>
                <button onClick={Submit}>Add</button>
            </form>
            <button onClick={() => showWidget(widget)} id="upload_widget" className="cloudinary-button">Upload files</button>
            <CloudinaryContext cloudName="hoffman-house">
            {merch.map(image => {
                return <img src={`http://res.cloudinary.com/hoffman-house/image/upload/${image.image}.jpg`}/>
            })}
            </CloudinaryContext>
        </div>
    )
}

export default Products