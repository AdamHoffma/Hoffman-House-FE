import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UploadContainer from '../../containers/UploadContainers.js'
import { CloudinaryContext } from 'cloudinary-react'
import { Link } from "react-router-dom"
import "./ProductForm.css"

const ProductForm = ({history, location}) => {
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
    

    const checkUploadResult = (resultEvent) => {
        if (resultEvent.event === "success") {            
            axios
        .get('https://res.cloudinary.com/hoffman-house/image/list/test.json')
        .then(res => {            
            setImage(res.data.resources[0].public_id)            
        })
            console.log("cloudinary upload result", resultEvent.info.secure_url)
        }
    }   
    console.log("IMAGE", image)

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "hoffman-house", uploadPreset: "kov2px0a", tags:['test'] }, (error, result) => {checkUploadResult(result)})
        
        const showWidget = (widget) => {
            widget.open()
        }   

    const Submit = (e) => {
        const postImage = {
            image: image
        }
        console.log(postImage)
        axios.post('http://localhost:5000/api/merchandise', product, postImage)
        .then(res => {
            
        })
        .catch(error => {
            console.log("ERROR", error)
        })
        history.push('preview')
    }

    const ChangeHandler = e => {
        e.preventDefault()
        setProduct({...product, [e.target.name]: e.target.value, image})
    }
    console.log("PRODUCT", product)
    
    return (          
        <div>  
        
                <h3 className="product_header">Add New Products</h3>
                <div className="outer_product_container">
                    <form className="product_form" type="submit">                
                        <input className="input" onChange={ChangeHandler} placeholder="category" name="category" type='text'/>
                        <input className="input" onChange={ChangeHandler} placeholder="name" name="name" type='text' />
                        <textarea className="description_field" onChange={ChangeHandler} placeholder="description" name="description" type='text'/>
                        <input className="input" onChange={ChangeHandler} placeholder="SKU" name="SKU" type='text' />
                        <input className="input" onChange={ChangeHandler} placeholder="price" name="price" type='text'/>
                        <input className="input" onChange={ChangeHandler} placeholder="weight" name="weight" type='text'/>
                        <input className="input" onChange={ChangeHandler} placeholder="quanity" name="quanity" type='text'/>
                        <button className="button_add_product" onClick={Submit}>Add Product</button>
                    </form>
                    <div className="image_button_container">
                    <img className="product_image" src={`http://res.cloudinary.com/hoffman-house/image/upload/${image}.jpg`} alt="preview of upload product" />
                    <button className="upload_widget" onClick={() => showWidget(widget)} id="upload_widget" className="cloudinary-button">Upload image</button>      
                    </div>              
            {/* <CloudinaryContext cloudName="hoffman-house">
            {merch.map(( data, index ) => (
                <div key={index}>
                 <img width="400px" height="300px" src={`http://res.cloudinary.com/hoffman-house/image/upload/${data.image}.jpg`}/>
                    <p style={{color: "silver", fontSize: "26px", textShadow: "2px 2px black"}}>{data.category}</p>
                    <p style={{color: "white", fontSize: "26px", textShadow: "2px 2px black"}}>{data.description}</p>
                    <p style={{color: "white", fontSize: "26px", textShadow: "2px 2px black"}}>${data.price}</p>
                    <p style={{color: "white", fontSize: "26px", textShadow: "2px 2px black"}}>{data.weight}OZ</p>
                    <p style={{color: "white", fontSize: "26px", textShadow: "2px 2px black"}}>{data.quanity}LEFT!</p> 
                 </div>
            ))}
            </CloudinaryContext> */}
        </div>   
        </div>     
    )
}

export default ProductForm