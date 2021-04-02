import React from 'react';
import {useContext} from 'react';
import {UserContext} from '../App';
import {DestinationContext} from '../Destination/DestinationContext'
const Order = () => {
    const {orders} = useContext(DestinationContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(orders[0].name)
    return (
        <div>
            <h1>Order</h1>
            <h3>User:{loggedInUser.email}</h3>
            <h3>Name:{loggedInUser.name}</h3>
            <h2>{orders[0].name}</h2>
            <h4>{orders[0].price}</h4>
         
           
        </div>
    );
};

export default Order;