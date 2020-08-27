import React from 'react';
import './App.css';
import {useHistory, Switch, Route, BrowserRouter,} from 'react-router-dom';
import {NavBar, SignUp, Course, LogIn, OneCourse, Footer,AdminNav} from '../src/components/index'
import {AuthProvider} from './context/AuthContext'
import Admin from './Admin'

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
      
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route path='/course'>
        <Course />
      </Route>
      <Route path='/admin'>
      <AdminRoutes>
        <Admin/>
      </AdminRoutes>
      </Route>
      <Route path='/login'>
        <LogIn/>
      </Route>
      <Route exact path='/course/:courseName' component={OneCourse}>
        <OneCourse />
      </Route>

    </Switch>
  )
}

function App() {
  return (
    <div className="App container">
    
      <BrowserRouter>
      <AuthProvider>
      <AdminRoutes/>
      <NavBar />
      <Routing/>
      <Footer />
      </AuthProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
