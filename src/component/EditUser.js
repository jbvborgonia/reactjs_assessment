import{useHistory,useParams} from "react-router-dom";
import React, {useState,useEffect} from "react";
import axios from "axios";


const EditUser =()=>{
    let history = useHistory();
    const {id} = useParams();

    const[user,setUser] =useState({
        name:"",
        email:"",
        phone:"",
    });

    const{name,email,phone} = user;
    const onInputChange = e =>{
    setUser({...user,[e.target.name]:e.target.value});
};

    useEffect(()=>{
    loadUser();

   },[]);

    const onSubmit = async e =>{
    e.preventDefault();
    await axios.put(`http://localhost:3006/users/${id}`,user);
    history.push("/");
}
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3006/users/${id}`)
    }
    return(
        <div className="container">
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input type="text" 
          className="form-control" 
          id="formGroupExampleInput" 
          placeholder="text input"
          name="name"
          value={name} 
          onChange={e=>onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Email</label>
          <input type="text" 
          className="form-control" 
          id="formGroupExampleInput" 
          placeholder="text input"
          name="email"
          value={email} 
          onChange={e=>onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Contact</label>
          <input type="text" 
          className="form-control" 
          id="formGroupExampleInput" 
          placeholder="text input"
          name="phone"
          value={phone} 
          onChange={e=>onInputChange(e)}
          />
        </div>
      </form>
      <br></br>
      <button className="btn btn-primary btn-block">Add/Update</button>
        </div>
    );
}

export default EditUser;