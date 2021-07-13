import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from "./Header"
function App() {
  return (
 
      <Router>
     <div className="app">
        <Switch>
          <Route path="/checkout">
            <h2>checkout</h2>
          </Route>
          <Route path="/login">
            <h2>login</h2>
          </Route>
          <Route path="/">
          <Header/>
          </Route>
        </Switch>
        </div>
      </Router>
     

  )
}

export default App
