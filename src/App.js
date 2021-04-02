
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import PrivateRoute from './component/Private Route/PrivateRoute'
import NoMatch from  './component/Nomatch/NoMatch'
import { createContext, useState } from 'react';
import AddProduct from './component/AddProduct/AddProduct';
import Login from './component/Login/Login';
import Destination from './Destination/Destination';
import Order from './Order/Order';



export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
 
  return (
  
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     
     
    <Router>
    <Header/>
      <Switch>

      <Route   path="/home">
          <Home/>
           </Route>

        <Route  path="/login">
         <Login/>
           </Route>

           <PrivateRoute  path="/addproduct">
             <AddProduct/>
         
           </PrivateRoute>
 
        <PrivateRoute path="/order">
        <Order/>
        </PrivateRoute>

        
          

        <PrivateRoute exact path="/destination/:productId">
          <Destination/>
           </PrivateRoute>

           <Route exact path="/">
          <Home/>
           </Route>


           <Route path="*">
          <NoMatch/>
           </Route>


      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
