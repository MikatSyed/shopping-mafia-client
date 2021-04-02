import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import Order from '../Order/Order';
import {DestinationContext} from './DestinationContext';

// import axios from 'axios'

const Destination = () => {
    const {setOrders} = useContext(DestinationContext)
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
        .then(data => {
            setCheckout(data)
            setOrders(data)
        })

        // })
    },[])
    return (
        <div>
           <h2>Checkout</h2>
          
       {
            checkout.map(pb =><table  style={{width:'50%',borderCollapse:'collapse'}}>
            <tr>
              <th style={{border:'1px solid green'}}>Product</th>
              <th style={{border:'1px solid green'}}>Price</th>
             
            </tr>
            <tr>
              <td style={{border:'1px solid green'}}>{pb.name}</td>
              <td style={{border:'1px solid green'}}>{pb.price}</td>
          
            </tr>
           
          </table>
            )}
           <Link to="/order"> <button class="btn btn-success">Checkout</button></Link>
          
        </div>
    );
};

export default Destination;