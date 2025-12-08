import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });


  const handlechnage = (e)=>{
    const {name, value}= e.target;
    setFormData({
      ...formData,
      [name]: value
    })

  }

  const hanlesubmit = async (e)=>{
    e.preventDefault();
    try{
      axios.post('http://localhost:3000/create', formData).then((res)=>{
       alert(res.data.message);
      }).catch((err)=>{
        console.log(err);
      })
      
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>



      <form onSubmit={hanlesubmit} >
        <input type="text"  name='name'  onChange={handlechnage}  value={formData.name}  />
        <input type="text"  name='email'  onChange={handlechnage}  value={formData.email} />
        <input type="text"  name='password'  onChange={handlechnage}  value={formData.password}  />
        <button type='submit' >Submit</button>
      </form>

    </div>
  )
}

export default App