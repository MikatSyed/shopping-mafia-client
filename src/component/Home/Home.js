import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'


const Home = () => {
    const[elements,setElements] = useState([]);
    useEffect(()=>{
        fetch('https://arcane-atoll-67843.herokuapp.com/events')
        .then(res=> res.json())
        .then(data => setElements(data))

    },[])
    return (
        <div style={{display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'.8rem'
       }}>
            {
                elements.map(element => <Product element={element}></Product>)
            }
          
        </div>
    );
};

export default Home;