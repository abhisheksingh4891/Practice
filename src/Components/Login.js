import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [name, setName] = useState('');
    const [ age, setAge] = useState('');
    const [address, setAddress] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        try{
          axios.post("http://localhost:1000/api/data", {name, age, address})
        }catch(e){
          console.log(e);
        }
    }

  return (
    <div className='m-3'>
        <form onSubmit={handleSubmit}>
            <label>Name : </label><br/>
            <input type='text' value={name} onChange={(e)=> {setName(e.target.value)}} name='name' /><hr/>
            <label>Age : </label><br/>
            <input type='number' value={age} onChange={(e)=> {setAge(e.target.value)}} name='age' /><hr/>
            <label>Address : </label><br/>
            <input type='text' value={address} onChange={(e)=> {setAddress(e.target.value)}} name='address' /><hr/>
            <button className='btn btn-danger'>Submit</button>
        </form>
    </div>
  )
}

export default Login