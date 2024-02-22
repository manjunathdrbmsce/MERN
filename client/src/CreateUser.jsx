import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateUser () {

    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [age, setAge]= useState()
    const navigate = useNavigate()
    
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createuser", {name,email,age})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        navigate('/')
    }
    return(
        <div className= "d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2> Add User</h2>
                    <div className="mb-2">
                        <lable htmlFor="">Name</lable>
                        <input type="text" placeholder="Enter Name" className="form-control" 
                        onChange={(e) => setName(e.target.value)}/>
                   
                    </div>
                    <div className="mb-2">
                        <lable htmlFor="">Email</lable>
                        <input type="text" placeholder="Enter Email" className="form-control" 
                        onChange={(e) => setEmail(e.target.value)}/>
                   
                    </div>
                    <div className="mb-2">
                        <lable htmlFor="">Age</lable>
                        <input type="text" placeholder="Enter Age" className="form-control" 
                        onChange={(e) => setAge(e.target.value)}/>
                   
                    </div>
                    <button  className="btn btn-success">Submit</button>
                </form>
        </div>    
        </div>
    )
}

export default CreateUser;