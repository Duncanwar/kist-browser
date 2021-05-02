import React, { useEffect, useState }from 'react';
import './App.css';
import {useHistory, Switch, Route, BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext'
import Home from './pages/Home';
import Order from './pages/Order';
import AppShell from './AppShell';
import Login from './pages/Login'

const AdminRoutes = ({children, ...rest}) =>{
return(
   <Route {...rest}>
  {children}

  </Route>
     
)

}

const Routing = () => {
  const history = useHistory();
  useEffect(()=>{
const user = JSON.parse(localStorage.getItem('user'));
if(user){
console.log("nice")
}else
  history.push('/login')
  })
  return(
    <Switch>
      <Route exact path='/'>
        <AppShell>
        <Home />
        </AppShell>
      </Route>
      <Route path='/order'>
        <AppShell>
        <Order />
        </AppShell>
      </Route>
      <Route path='/login'>
       <Login/>
      </Route>
    </Switch>
  )

}
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
