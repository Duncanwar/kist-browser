import React,{useEffect, useState} from 'react';
import {Button,Form} from 'react-bootstrap'
import {useHistory} from "react-router-dom"
import axios from 'axios'
const BACKENDURL = "http://localhost:5000"
const options = {
  headers: {'Content-Type': 'application/json',
  "Authorization": `Bearer ${localStorage.getItem('jwt')}`
},
};
const Login = () => {
    const history = useHistory();
    const [password,setPassword] =useState('')
    const [email,setEmail] =useState('')
    const [error,setError] = useState(false)
    useEffect(() =>{
    })
    const login = async (e) => {
      e.preventDefault()
      try {
      let data = await axios.post(`${BACKENDURL}/login`,{password,email},options)
      localStorage.setItem('jwt', data.data.token)
      localStorage.setItem('user', JSON.stringify(data.data.data))
      history.push("/")
      } catch (error) {
        const {data} = error.response
        setError(true)
      }
  }
    return (
<div className="card">
 <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={(e)=>login(e)}>
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Login;