import { getQueriesForElement } from '@testing-library/dom';
import React from 'react';
import { Link } from 'react-router-dom';



const Product = ({element}) => {
    return (
        <div style={{marginLeft:"80px"}}>
           

<div class="card" style={{width: '18rem'}}>
  <img src={element.imageURL} class="card-img-top" alt="" height="180px"/>


  
  <div class="card-body">

    <h3 class="card-text">{element.name}</h3>
    <h4 style={{marginLeft:"90px",color:"green"}}>${element.price}</h4>
   
    <Link to={`/destination/${element._id}`}> <a href="#" class="btn btn-success" style={{marginLeft : 80}}>Buy Now</a></Link>
  </div>
</div>

        </div>
    );
};

export default Product;