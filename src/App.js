import React, { useEffect } from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from "./Header"
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function App() {
  const [{user},dispatch]=useStateValue();
  useEffect(()=>{

  const unsubcribe=   auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        })

      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        })

      }
    });

    return ()=>{
      unsubcribe();
    }
  },[])

  return (
 
 
    <Router>
    <Header/>
 <div className="app">
    <Switch>
      <Route path="/checkout">
        <Checkout/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
      <Home/>
      </Route>
    </Switch>
    </div>
  </Router>

  )
}

export default App
