import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ProductPreview.css'
import { Link } from 'react-router-dom'

const ProductPreview = () => {
    const [product, setProduct] = useState([])
    const [all, setAll] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/merchandise')
        .then(res => {
            setProduct(res.data)       
        })
    }, [])    
    
    const id = product.slice(-1).map(p => {return p.id})
    const newId = id[0]        

    useEffect(() => {       
        axios.get(`http://localhost:5000/api/merchandise/${newId}`)
        .then(res => {
            setAll(res.data)
            console.log("RES", res.data)
        })
    }, [product])

    const Delete = () => {
        axios.delete(`http://localhost:5000/api/merchandise/${newId}`)
        .then(res => {
            console.log(res)
            console.log(window)
            window.alert("You've deleted this product. Forever. It's not coming back. Good job. Get yourself a cookie")            
        })
    }

    console.log("PRODUCT", product.slice(-1)[0])
    return (
        <div className="image_container">
            <img className="product_image_preview" src={`http://res.cloudinary.com/hoffman-house/image/upload/${all.image}.jpg`} />
            <div className='text_continaer'>
            <p>Description: {all.description}</p>
            <p>Price: ${all.price}</p>
            </div>
            <button onClick={Delete}><Link to="/products">Delete</Link></button>
        </div>
    )
}

export default ProductPreview