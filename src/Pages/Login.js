import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit= async(e) => {
        e.preventDefault();
        try{
          const response = await axios.post("http://localhost:1000/api/login", {email, password})
          alert(response.data.message)
          navigate('/')
        }catch(error){
          alert("Login failed")
          console.log("Error logging in:", error.response ? error.response.data : error.message);
        }
    }

  return (
    <div className='m-3'>
        <form onSubmit={handleSubmit}>
            <label>email : </label><br/>
            <input type='email' value={email} onChange={(e)=> {setEmail(e.target.value)}} name='email' /><hr/>
            <label>password : </label><br/>
            <input type='password' value={password} onChange={(e)=> {setPassword(e.target.value)}} name='password' /><hr/>
            <button className='btn btn-danger'>Submit</button>
        </form>
    </div>
  )
}

export default Login