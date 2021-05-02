import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Button,Table} from "react-bootstrap"
import {Link, useHistory} from 'react-router-dom';
import cogoToast from "cogo-toast"

const options = {
  headers: {'Content-Type': 'application/json',
  "Authorization": `Bearer ${localStorage.getItem('jwt')}`
},
};
const Order = () => {
  const history = useHistory();
const [users,setUsers] = useState([])
const [d,setD] = useState([]);
const [update,setUpdate] = useState(false);
    useEffect(()=>{
      setUpdate(false)
   allOrders();
  }, [update]);
  const allOrders = async () =>{
    const user = await Axios(`${process.env.REACT_APP_URL}/order`,options);
    console.log(user.data)
    console.log(Object.keys(user.data.order[0]));
    setUsers(user.data.order)
    setD(Object.keys(user.data.order[0]))
}
const cancelOrder = async (orderId) =>{
  try {
    const {data} = await Axios.put(`${process.env.REACT_APP_URL}/order/cancel`,
    {
  orderId
    },
    options);
    console.log(data)
  setUpdate(true)
  } catch (error) {
    const {data} = error.response
    cogoToast.info(data.error)
  }
}
const receiveOrder = async (orderId) =>{
  try {
    const {data} = await Axios.put(`${process.env.REACT_APP_URL}/order/accept`,
    {
  orderId
    },
    options);
    console.log(data)
  setUpdate(true);
  } catch (error) {
    const {data} = error.response
    cogoToast.info(data.error)
  }
}
    return (
<div>
<Table className="">
  <thead>
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
{users.map((user,i) => {
     return(
  <tbody  key={i}>
    <tr>
    <th scope="row">{i+1}</th>
    <td>{user.id}</td>
     <td>{user.userId}</td>
     <td>{user.carId}</td>
     <td>{user.status}</td>
     <td>{user.amount}</td>
     <td>{user.price}</td>
     <td>{user.createdAt}</td>
     <td></td>
     <td>
     {<Button className="material-icons" onClick={()=>cancelOrder(user.id)}>Cancel</Button>}
     {<Button className="material-icons" onClick={()=>receiveOrder(user.id)}>Receive</Button>}
     </td>
    </tr>
    </tbody>
    )
     })}
     </Table>
        </div>
    );
};

export default Order;
