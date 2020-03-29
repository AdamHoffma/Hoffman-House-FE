import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ProductPreview.css'
import { Link } from 'react-router-dom'

const ProductPreview = ({history}) => {
    const [product, setProduct] = useState([])
    const [all, setAll] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/merchandise')
        .then(res => {
            setProduct(res.data)
            console.log("RES.DATA", res.data)       
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
            window.alert("You've deleted this product. Forever. It's not coming back. Good job. Get yourself a cookie")
            history.push('/products')            
        })
    }

    const AddMore = () => {
        history.push('/products')
    }
    console.log("HISTORY", history)

    console.log("PRODUCT", product.slice(-1)[0])
    return (
        <div className="image_container">
            <img className="product_image_preview" src={`http://res.cloudinary.com/hoffman-house/image/upload/${all.image}.jpg`} />
            <div className='text_continaer'>
                <p className="preview_text">Name: {all.name}</p>
                <p className="preview_text">Description: {all.description}</p>                
                <p className="preview_text">SKU: {all.SKU}</p>
                <p className="preview_text">Price: ${all.price}</p>
                <p className="preview_text">Quanity: {all.quanity}</p>
                <p className="preview_text">Category: {all.category}</p>
                <p className="preview_text">Weight: {all.weight}</p>                
            </div>
            <button onClick={Delete}>Delete</button>
            <button onClick={AddMore}>Add Another Product</button>
        </div>
    )
}

export default ProductPreview