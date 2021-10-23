
import React , {useEffect} from "react"; 
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import './App.css';
import  Home  from "./Home";
import Checkout from "./Checkout";
import Login from './Login';
import {useStateValue} from './StateProvider';
import {auth} from './firebase'

function App() {
const [{user},dispatch]=useStateValue();  

// useEffect
// We need a piece of code which runs based on given condition

useEffect(() => {
const unsubscribe=auth.onAuthStateChanged((authUser)=>{
  if(authUser){
//  if user logged in
dispatch({
  type:"SET_USER",
  user:authUser
})
  }else{
    // if user is not logged in
    dispatch({
      type:"SET_USER",
      user:null
    })
  }
});
return() => {
  unsubscribe();
}

}, [])
 console.log("USER IS",user);
return (
   <Router>
     <div className = "app">
       <Switch>
         <Route path="/checkout">
         <Header/>
           <Checkout/>
         </Route>
         <Route path="/login">
          <Login/>
         </Route>
         <Route path="/">
           <Header/>
           <Home/>
           
         </Route>
       </Switch>
     </div>
   </Router>
  )}
export default App;
