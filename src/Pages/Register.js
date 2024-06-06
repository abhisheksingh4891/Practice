import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          await axios.post("http://localhost:1000/api/register", {name, email, password, phone})
          alert("Registeration Succesfull")
          setEmail("");
          setName("");
          setPassword("");
          setPhone("");
        }catch(e){
            alert('Registeration Failed')
          console.log(e);
        }
    }

  return (
    <div className='m-3'>
        <form onSubmit={handleSubmit}>
            <label>Name : </label><br/>
            <input type='text' value={name} onChange={(e)=> {setName(e.target.value)}} name='name' /><hr/>
            <label>email : </label><br/>
            <input type='email' value={email} onChange={(e)=> {setEmail(e.target.value)}} name='email' /><hr/>
            <label>password : </label><br/>
            <input type='password' value={password} onChange={(e)=> {setPassword(e.target.value)}} name='password' /><hr/>
            <label>Phone Number : </label><br/>
            <input type='number' value={phone} onChange={(e)=> {setPhone(e.target.value)}} name='phone' /><hr/>
            <button className='btn btn-danger'>Submit</button>
        </form>
    </div>
  )
}

export default Register;