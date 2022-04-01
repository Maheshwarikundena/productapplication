import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand">Products</a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/contact">Contact</Link>
        </li>
       {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action </a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
    </li*/}
    </ul>
      <Link className='btn btn-warning' to="/Items/add">  Add Product </Link>
       </div>
    </div>
 </nav>
    )
}
export default Navbar;