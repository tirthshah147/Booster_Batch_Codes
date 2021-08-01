import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ItemList from "./components/ItemsList/ItemList";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Login from "./components/Login/Login";
import PrivateRoute from "./PrivateRoute";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        {/* <Route path="/error" exact component={Error} /> */}
        <Route path="/courses" exact component={ItemList} />
        
        <Route path="/home" exact component={Home} />
        <Route path="/courses/:id" exact component={ItemDetails} />
        <Route path="/login" exact component={Login} />
        {/* <Route path="/courses/:id" exact render={(props) => <ItemDetails name="tirth"/>} /> */}
        <PrivateRoute path="/about" exact component={About} />

        <Redirect from="/" exact to="/home" />
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;
