import React, { useEffect, useState }from 'react';
import './App.css';
import {useHistory, Switch, Route, BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext'
import Users from './pages/Visitors';
import CreateCourse from './pages/CreateCourse';
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
if(user == null){
  history.push('/login')
}
  })
  return(
    <Switch>
      <Route path='/visitors'>
        <AppShell>
        <Users />
        </AppShell>
      </Route>
      <Route path='/api'>
        <AppShell>
        <CreateCourse />
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
      <AuthProvider>
      <Routing/>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
