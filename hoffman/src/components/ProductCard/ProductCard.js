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
    console.log("PRODUCT", product.image)
    return (
        <div>
            <img src={`http://res.cloudinary.com/hoffman-house/image/upload/${product.image}.jpg`} />
            <p>{product.description}</p>
        </div>
    )
}

export default ProductCard