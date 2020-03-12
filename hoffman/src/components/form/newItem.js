import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import Dropzone from 'react-dropzone'
import UploadContainer from '../../containers/UploadContainers.js'



const ItemForm = ({errors, touched, values, handleSubmit}) => {   
    const [item, SetItem] = useState([])
    const [image, setImage] = useState([])

    useEffect(()  => {
        axios
        .get('http://localhost:5000/api/merchandise')
        .then(res => {            
            SetItem(res.data)
        })
    }, [])

    console.log("Image", image)

    useEffect(()=> {
        axios
        .get('https://res.cloudinary.com/hoffman-house/image/list/test.json')
        .then(res => {            
            setImage(res.data.resources)
        })
    }, [])

    console.log("Item", item)

    
    const checkUploadResult = (resultEvent) => {
        if (resultEvent.event === "success") {
            console.log(resultEvent.info.secure_url)
        }
    }
    

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "hoffman-house", uploadPreset: "kov2px0a", tags:['test'] }, (error, result) => {checkUploadResult(result)})
        
        const showWidget = (widget) => {
            widget.open()
        }
    
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
                <button onClick={() => showWidget(widget)} id="upload_widget" className="cloudinary-button">Upload files</button>
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

