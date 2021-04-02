import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../App';

// import axios from 'axios'

const Destination = () => {
    const{id}= useParams();
    const [loggedInUser,setLoggedInUser]= useContext(UserContext)
    const[checkout,setCheckout] = useState([]);
    const {productId} = useParams()
     useEffect(()=>{
        // axios.get(`https://arcane-atoll-67843.herokuapp.com/events/${productId}`).then(res => {
        //     setCheckout(res.data)
        //     console.log(checkout)
        fetch(`https://arcane-atoll-67843.herokuapp.com/events/${productId}`)
        .then(res=> res.json())
        .then(data => setCheckout(data))
        // })
    },[])
    return (
        <div>
           <h2>This is destination...</h2>
       {
            checkout.map(pb => <li>{pb.name}</li>)
       }
        </div>
    );
};

export default Destination;