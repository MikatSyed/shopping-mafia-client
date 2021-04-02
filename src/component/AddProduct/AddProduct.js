import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const[imageURL , setImageURL] = useState(null);
    const onSubmit = data => {
        const evenData = {
            name : data.name,
            imageURL: imageURL,
            price : data.price
         
        };
        const url = `https://arcane-atoll-67843.herokuapp.com/addElement`
      
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body : JSON.stringify(evenData)
        })
        .then(res => console.log('server side responsed'))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','624d1380187d45b6ee69de16b51ca873');
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
            <h3>Add My Product</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue="Add Product Name" ref={register} /> <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} /><br/>
      <input name="price" placeholder="price" ref={register}/>
    
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;