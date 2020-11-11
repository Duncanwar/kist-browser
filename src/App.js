import React from 'react';
import './App.css';
import {useHistory, Switch, Route, BrowserRouter,} from 'react-router-dom';
import {NavBar, SignUp, Course, LogIn, OneCourse, Footer,AdminNav} from '../src/components/index'
import {AuthProvider} from './context/AuthContext'
import Admin from './Admin'
import Users from './pages/Users';
import CreateCourse from './pages/CreateCourse';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';

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

<Route exact path='/home'>
        <Home/>
      </Route>

      <Route path="/signup">
        
        <SignUp/>
      </Route>
      <Route path='/course'>
      
        <Course />
        
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/admin'>
      <AdminRoutes>
        <Admin/>
      </AdminRoutes>
      </Route>
      <Route path='/login'>
      <LogIn/>
      </Route>
      <Route path='/allUsers'>
        <Users />
      </Route>
      <Route exact path='/course/:courseName' component={OneCourse}>
        <OneCourse />
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
      <NavBar/>
      <Routing/>
      <Footer />
      </AuthProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
