import React, { useState, useEffect} from 'react'
import './ProductCard.css'
import axios from 'axios'

const ProductCard = props => { 
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/merchandise/${props.match.params.id}`)
        .then(res => {
            setProduct(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    console.log("PRODUCT", product)
    return (
        <div className="container_card">
            <h1>{product.name}</h1>
            <div className="inner_container_card">
            <img className="image_card" src={`http://res.cloudinary.com/hoffman-house/image/upload/${product.image}.jpg`} />
            <p className="card_text">Description: {product.description}</p>
            <p className="card_text card_price">Price: ${product.price}</p>
            <p className="card_text card_sku">SKU: {product.SKU}</p>
            </div>
        </div>
    )
}

export default ProductCard