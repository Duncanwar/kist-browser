import React from 'react';
import './App.css';
import {useHistory, Switch, Route, BrowserRouter,} from 'react-router-dom';
import {NavBar, SignUp, Course, LogIn} from '../src/components/index'

const Routing = () => {
  const history = useHistory();

  return(
    <Switch>
      <Route exact path='/course'>
<Course />
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route path="/course">
        <Course/>
      </Route>
      <Route path='/login'>
        <LogIn/>
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routing/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
