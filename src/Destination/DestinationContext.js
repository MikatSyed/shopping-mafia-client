import React, { createContext, useState } from 'react';
export const DestinationContext = createContext()
export const DestinationProvider = ({children}) => {
    const [orders, setOrders] = useState()
    const value= {orders, setOrders}
    return (
        <DestinationContext.Provider value={value}>
            {children}
        </DestinationContext.Provider>
    );
};

