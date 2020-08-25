import React from 'react';
import './App.css';
import {useHistory, Switch, Route, BrowserRouter,} from 'react-router-dom';
import {NavBar, SignUp, Course, LogIn, OneCourse, Footer} from '../src/components/index'
import {AuthProvider} from './context/AuthContext'


const Routing = () => {
  const history = useHistory();

  return(
    <Switch>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route path="/course">
        <Course/>
      </Route>
      <Route path='/login'>
        <LogIn/>
      </Route>
      <Route exact path='/course/:courseName' component={OneCourse}>
        <OneCourse />
      </Route>
      <Route>

      </Route>
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <AuthProvider>
      <NavBar />
      <Routing/>
      <Footer />
      </AuthProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
