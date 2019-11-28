import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import Dropzone from 'react-dropzone'
import UploadContainer from '../../containers/UploadContainers.js'
import { instanceOf } from "prop-types"


const ItemForm = ({errors, touched, values, handleSubmit}) => {   
    const [item, SetItem] = useState([])

    useEffect(()  => {
        axios
        .get('http://localhost:5000/api/merchandise')
        .then(res => {
            console.log('res', res)
            SetItem(res.data)
        })
    }, [])    
    
    return (
        <div>
            <h1>Post New Items</h1>
            <Form>
                <Field type="text" name="image" placeholder="image"/>
                {/*<Field type="file" name="image" placeholder="image"/>*/}
                <Field type="text" name="category" placeholder="category"/>
                <Field type="text" name="description" placeholder="description"/>
                <Field type="text" name="price" placeholder="price"/>
                <Field type="text" name="weight" placeholder="weight"/>
                <Field type="text" name="quanity" placeholder="quanity"/>
                <button type="submit">Add Item</button>
                <UploadContainer/>
            </Form>
            {item.map(i => {
                return <div>
                    <img src={i.image}/>
                </div>
                
            })}
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({image, category, description, price, weight, quanity}) {
        return {
            image: image || "",
            category: category || "",
            description: description || "",
            price: price || null,
            weight: weight || null,  
            quanity: quanity || null    
        }
    },

    handleSubmit(values) {
        axios
        .post("http://localhost:5000/api/merchandise", values)
    
    .then(res => {
        console.log(res)
    })
}
})(ItemForm)

export default FormikForm

