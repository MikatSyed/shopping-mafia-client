import React from 'react';
import {useContext} from 'react';
import {UserContext} from '../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  
   
    return (
        <div>
            <h1>Order</h1>
            
            <h3>User:{loggedInUser.email}</h3>
            <h3>Name:{loggedInUser.name}</h3>

          
        </div>
    );
};

export default Order;