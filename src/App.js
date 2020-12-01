import React from 'react';
import './App.css';
import {useHistory, Switch, Route, BrowserRouter,} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext'
import Users from './pages/Visitors';
import CreateCourse from './pages/CreateCourse';


const AdminRoutes = ({children, ...rest}) =>{
return(
   <Route {...rest}>
  {children}

  </Route>
     
)

}

const Routing = () => {
  const history = useHistory();

  return(
    <Switch>
      <Route path='/visitors'>
        <Users />
      </Route>
      <Route>
        <CreateCourse />
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <div className="">
    
      <BrowserRouter>
      <AuthProvider>
      <AdminRoutes/>
      <Routing/>
      </AuthProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
