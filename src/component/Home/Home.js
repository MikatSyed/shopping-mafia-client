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
        <div>

<div class="textcenter">
<nav class="navbar navbar-light ">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-success my-2 my-sm-0 " type="submit">Search Product </button>
  </form>
</nav>
</div>



        <div style={{display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'.8rem'
       }}>
            {
                elements.map(element => <Product element={element}></Product>)
            }
          
        </div>
        </div>
    );
};

export default Home;