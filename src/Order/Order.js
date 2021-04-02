import React from 'react';
import {useContext} from 'react';
import {UserContext} from '../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <h1>This is order...</h1>
            <h3>User:{loggedInUser.name}</h3>
        </div>
    );
};

export default Order;