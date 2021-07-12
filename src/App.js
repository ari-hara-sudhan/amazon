import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
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
            <h2>home</h2>
          </Route>
        </Switch>
        </div>
      </Router>
     

  )
}

export default App
