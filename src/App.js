import './App.css';
import Navbar from './componenets/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import {Switch,Route,Redirect} from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
    return (
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Home" component={Home}/>  
      <Redirect exact path="/" />
    </Switch>
    </div>
  );
}


export default App;
