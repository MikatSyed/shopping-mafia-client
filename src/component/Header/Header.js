import React from 'react';
import { Link } from 'react-router-dom';

import'./Header.css';

const Header = () => {
 
    return (
        
            
     <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Shoping Monster</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="navLink"><Link to="/home" class="text-dark">Home</Link>  <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <Link to="/addproduct"class="text-dark">Admin</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" ><Link to="/order" class="text-dark">Order</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" ><Link to="/home" class="text-dark ">Deals</Link></a>
      </li>
 <button class="btn btn-success "><Link to="/login" class="text-light">Login</Link></button>
    </ul>
   
  </div>
</nav>

<br></br>

     </div>

        
    );
};

export default Header;