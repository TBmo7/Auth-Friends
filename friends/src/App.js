import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Login from "./Components/Login"
import FriendPage from "./Components/FriendPage"
import PrivateRoute from "./Components/PrivateRoute"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
      <li>
      <Link to ="/login">Login</Link>
      </li>
      <li>
        <Link to = "/protected">Friends Page</Link>
      </li>
      </ul>
      <Switch>
        <PrivateRoute exact path ="/protected" component = {FriendPage} />
        <Route path = "/login" component = {Login} />
        <Redirect to = "/login"/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
