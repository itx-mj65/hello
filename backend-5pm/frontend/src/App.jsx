import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [allusers, setallusers] = useState()
  const [laoding, setloading] = useState(false)



  useEffect(() => {
    axios.get("http://localhost:3000/allusers").then((response) => {
      setallusers(response.data)

    }).catch(() => {
      console.log("there is an error while fecthing data ")
    })


  }, [laoding])

  const handlechnage = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })

  }

  const hanlesubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:3000/create', formData).then((res) => {
        alert(res.data.message);
        setloading(!laoding)
      }).catch((err) => {
        console.log(err);
      })

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {
        allusers?.map((user) => {
          return <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <p>{user.password}</p>
          </div>

        })
      }



      <form onSubmit={hanlesubmit} >
        <input type="text" name='name' onChange={handlechnage} value={formData.name} />
        <input type="text" name='email' onChange={handlechnage} value={formData.email} />
        <input type="text" name='password' onChange={handlechnage} value={formData.password} />
        <button type='submit' >Submit</button>
      </form>

    </div>
  )
}

export default App