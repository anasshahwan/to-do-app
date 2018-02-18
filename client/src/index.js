import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import Profile from './components/profile';


ReactDOM.render(
  <BrowserRouter>
<Switch>


{ /*  All Front End Routes Here  */}

    <Route exact path='/' component={App} />
    <Route path='/homepage' component={HomePage} />
    <Route path='/login' component={LoginPage} />
    <Route path='/signup' component={SignUpPage} />
    <Route path='/profile' component={Profile} />
    <Route path='/profile/tasks' component= {Profile}/>
</Switch>

  </BrowserRouter>,

   document.getElementById('root')
 );
