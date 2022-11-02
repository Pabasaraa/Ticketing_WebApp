import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import styles from "./style_sheets/App.module.css";

//import components from the components folder
import Add from "./components/AddRoutes";
import All from "./components/AllRoutes";
import Edit from "./components/EditRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>

            <Route
              path="/add"
              component={Add} 
            />

            <Route
              path="/all"
              component={All} 
            />

            <Route
              path="/edit/:id"
              component={Edit} 
            />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
