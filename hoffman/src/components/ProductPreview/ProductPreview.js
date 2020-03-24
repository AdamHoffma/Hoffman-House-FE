import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { setLocale } from 'yup'

const ProductPreview = () => {
    const [product, setProduct] = useState([])
    const [all, setAll] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/merchandise')
        .then(res => {
            setProduct(res.data)           
        })
    }, [])

    console.log(product)
    

    console.log('ALL', all)

    const id = product.slice(-1).map(p => {return p.id})
    console.log("ID", id)
    const newId = id[0] 
    console.log('NEWID', newId)  
   

    

    useEffect(() => {       
       
        axios.get(`http://localhost:5000/api/merchandise/${newId}`)
        .then(res => {
            setAll(res.data)
            console.log("RES", res.data)
        })
    }, [product])

    console.log("PRODUCT", product.slice(-1)[0])
    return (
        <div>
            <img src={`http://res.cloudinary.com/hoffman-house/image/upload/${all.image}.jpg`} />
            {product.slice(-1).map(p => {
                return <div>
                    <img src={`http://res.cloudinary.com/hoffman-house/image/upload/${p.image}.jpg`} />
                    <p>{p.category}</p>
                    <p>{p.description}</p>
                    <p>{p.price}</p>
                    <p>{p.quanity}</p>
                    <p>{p.weight}</p>
                </div>
            })}
        </div>
    )
}

export default ProductPreview