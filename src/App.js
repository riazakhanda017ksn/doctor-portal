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
import SecondDashBoard from './Components/Dashboard/SecondDashBoard/SecondDashBoard';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
 export  const UserContext=createContext()
function App(){
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
  <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    
   <Router>
     <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/logIn">
           <LogIn></LogIn>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
          <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/secondDashBoard/appointment">
          <SecondDashBoard></SecondDashBoard>
          </Route>
          <Route path="/addDoctor">
         <AddDoctor></AddDoctor>
          </Route>
          
          
        </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
