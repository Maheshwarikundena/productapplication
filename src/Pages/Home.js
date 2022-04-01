import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    const[items,setItems]=useState([])
    useEffect(()=>{
       // console.log("From Use Effect");
        loadItems();
    },[]);
    const loadItems=async()=>{
        const result= await axios.get("http://localhost:3005/items");
        //console.log(result);
        setItems(result.data.reverse()); }
     const deleteItems=async id=>{
        await axios.delete(`http://localhost:3005/items/${id}`);
        loadItems();}
    return(
        <div className="container">
            <div className="py-4">
                <h2>Product Table Information</h2>
                <table className="table  border shadow">
                    <thead class="table-secondary">
                        <tr>
                        <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">URL</th>
                            <th scope="col">Action</th>
                        </tr></thead> <tbody> {
                    items.map((item,index)=>(
                            <tr>
                             <th scope="row"> {index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.url}</td>
                                <td>
                                    <Link class="btn btn-success mr-2" to={`/items/${item.id}`}> view</Link>
                                    <Link class="btn btn-warning mr-2" to={`/items/edit/${item.id}`}>Edit </Link>
                                    < button class="btn-btn-primary mr-2" onClick={()=> deleteItems(item.id)}> Delete</button>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
                </table>
                </div>
        </div>
    )

                }
                export default Home;
                  