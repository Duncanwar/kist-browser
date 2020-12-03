import React from 'react';
import './App.css';
import {useHistory, Switch, Route, BrowserRouter,} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext'
import Users from './pages/Visitors';
import CreateCourse from './pages/CreateCourse';
import AppShell from './AppShell';

const AdminRoutes = ({children, ...rest}) =>{
return(
   <Route {...rest}>
  {children}

  </Route>
     
)

}

const Routing = () => {
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
