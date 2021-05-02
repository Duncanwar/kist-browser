import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Button} from "react-bootstrap"
import {Link, useHistory} from 'react-router-dom';

const options = {
  headers: {'Content-Type': 'application/json',
  "Authorization": `Bearer ${localStorage.getItem('jwt')}`
},
};
const Home = () => {
  const history = useHistory();
const [users,setUsers] = useState([])
const [d,setD] = useState([]);
    useEffect(()=>{
   allCars();
  }, []);
  const allCars = async () =>{
    const user = await Axios(`${process.env.REACT_APP_URL}/cars`,options);
    console.log(Object.keys(user.data.cars[0]));
    setUsers(user.data.cars)
    setD(Object.keys(user.data.cars[0]))
   
}
const orderCar = async (carId) => {
  try {
    const {data} = await Axios.post(`${process.env.REACT_APP_URL}/order`,
    {
  carId
    },
    options);
    console.log(data)
    history.push('/order')
  } catch (error) {
    const {data} = error.Response
  console.log(data)

  }

}
    return (
<div>
<table className="">
  <thead>
  {(delete d[4])}
    <tr>
    <th scope="col">#</th>
    {d.map((d,i)=> {    
      return( 
      <th key={i} scope="col">{d}</th>
      )   
    })}
      <th>Manipulate</th>
    </tr>
  </thead>
  {console.log(users)}
{users.map((user,i) => {
     return(
  <tbody  key={i}>
    <tr>
    <th scope="row">{i+1}</th>
     <td>{user.id}</td>
     <td>{user.manufacturerYear}</td>
     <td>{user.description}</td>
     <td>{user.type}</td>
     <td>{user.price}</td>
     <td></td>
     <td></td>
     <td>{<Button className="material-icons" onClick={()=>orderCar(user.id)}>Order</Button>}</td>
    </tr>
    </tbody>
    )
     })}
     </table>
        </div>
    );
};

export default Home;
