import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { setLocale } from 'yup'

const ProductPreview = () => {
    const [product, setProduct] = useState([])
    const [all, setAll] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/api/merchandise')
        .then(res => {
            setProduct(res.data)           
        })
    }, [])

    console.log(product)

    

    console.log('ALL', all)

    const last = product.slice(-1).map(p => {return p.id})

    console.log(last[0])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/merchandise/:${last[0]}`)
        .then(res => {
            setAll(res)
        })
    }, [])

    console.log("PRODUCT", product.slice(-1))
    return (
        <div>
            {product.map(p => {
                return <img src={`http://res.cloudinary.com/hoffman-house/image/upload/${p.image}.jpg`} />
            })}
        </div>
    )
}

export default ProductPreview