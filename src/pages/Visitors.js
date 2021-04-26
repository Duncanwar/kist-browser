import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Users = () => {
const [users,setUsers] = useState([])
const [d,setD] = useState([]);
    useEffect(()=>{
 //   allUsers();
  }, []);
  const allCars = async () =>{
    const user = await Axios(``);
    setUsers(user.data)
    setD(Object.keys(user.data[0]))
}
const deleteUser = async (userId) => {
  const user = await Axios.delete('https://pvs-backend.herokuapp.com/adrielsoft/visitor')
}
    return (
<div>
<table className="responsive-table striped">
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
{users.map((user,i) => {
     return(
  <tbody  key={i}>
    <tr>
    <th scope="row">{i+1}</th>
     <td>{user.userId}</td>
     <td>{user.firstName}</td>
     <td>{user.lastName}</td>
     <td>{user.phone}</td>
     <td>{user.status}</td>
     <td>{user.type}</td>
     <td>{user.prisonVisitors | "0" }</td>
     <td>{user.requests | "0" }</td>
     <td>{<i className="material-icons">delete</i>}{}</td>
    </tr>
    </tbody>
    )
     })}
     </table>
        </div>
    );
};

export default Users;
