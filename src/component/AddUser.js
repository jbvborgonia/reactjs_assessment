import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",  
    phone: ""
  });

  const { name,  email, phone,  } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3006/users", user);
    history.push("/");
  };
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

export default AddUser;