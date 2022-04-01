import axios from "axios";
import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
const ItemAdd=()=>{
    let navigate =useNavigate();
    const [item,setItem]=useState({
        name:"",
        price:"",
        category:"",
        url:"",
    });
    const{name,price,category,url}=item;
    const onInputChange=e=>{
        console.log(e.target.value);
        setItem({...item,[e.target.name]:e.target.value})
    }
const onSubmit=async e=>{
    e.preventDefault();
    await axios.post("http://localhost:3005/items",item);
    navigate.push("/")
}
return(
    <div className="container">
        <form class="row g-3" onSubmit={e=>onSubmit(e)}>
            <div class="col-mb-6">
            <label for="Inputname" class="form-label">Name</label>
            <input  type="name" class="form-control" name="name" value={name} onChange={e=>onInputChange(e)} />
            </div>
            <div class="col-mb-6">
            <label for="Inputprice" class="form-label">price</label>
            <input  type="name" class="form-control" name="price" value={price} onChange={e=>onInputChange(e)} />
            </div>
            <div class="col-mb-6">
            <label for="Inputcategory" class="form-label">category</label>
            <input  type="name" class="form-control" name="category" value={category} onChange={e=>onInputChange(e)} />
            </div>
            <div class="col-mb-6">
            <label for="Inputurl"  class="form-label">url</label>
            <input  type="name" class="form-control" name="url" value={url} onChange={e=>onInputChange(e)} />
            </div>
            <div class="col-12">
            <button className="btn-btn-primary">Add Item</button>
            </div>

        </form>
    </div>
)
}
export default ItemAdd;