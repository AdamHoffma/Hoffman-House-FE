import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import Dropzone from 'react-dropzone'


const ItemForm = ({errors, touched, values, handleSubmit}) => {   
    
    return (
        <div>
            <h1>Post New Items</h1>
            <Form>
                <Field type="file" name="image" placeholder="image"/>
                <Field type="text" name="category" placeholder="category"/>
                <Field type="text" name="description" placeholder="description"/>
                <Field type="text" name="price" placeholder="price"/>
            </Form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({image, category, description, price}) {
        return {
            image: image || "",
            category: category || "",
            description: description || "",
            price: price || null        
        }
    },

    handleSubmit(props) {
        axios
        .post("http://localhost/5000/api/merchandise", props)
    }
})(ItemForm)

export default FormikForm

