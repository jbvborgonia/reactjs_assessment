import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Home = () =>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
     loadUser();

    },[]);

const loadUser = async ()=>{
    const result = await axios.get("http://localhost:3006/users");
    setUsers(result.data);
}


return(
<div className="container">
    <div className="py-4">
  
    <table class="table">
  <thead>
    <tr className="bg-dark text-white">
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {users.map((user,index)=>(
        <tr>
            <th scope="row">{index +1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
            <Link className="btn btn-primary" >View</Link>
            <Link className="btn btn-outline-primary">Edit</Link>
            <Link className="btn btn-danger">Delete</Link>

            </td>
        </tr>
      ))}
  </tbody>
</table>
    </div>
</div>
    );
}

export default Home;