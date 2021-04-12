import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import LogIn from './Components/LogIn/LogIn';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
 export  const UserContext=createContext()
function App(){
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
  <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <p>{loggedInUser.name}</p>
   <Router>
     <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
          <Appointment></Appointment>
          </Route>
          <Route path="/dashboard/appointment">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/logIn">
           <LogIn></LogIn>
          </Route>
        </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
