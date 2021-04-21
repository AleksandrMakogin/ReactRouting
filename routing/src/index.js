import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Films } from './Components/Films';
import { Characters } from './Components/Сharacters';
import { Planets } from './Components/Planets';
import { Spaceships } from './Components/Spaceships';
import { Trancports } from './Components/Trancports';
import { NotFound } from './Components/NotFound'



const routing = (
  <Router>
    <div>
    <nav className="#546e7a #78909c blue-grey lighten-1">
        <div className="nav-wrapper ">
          <a href="#" className="brand-logo badge  "> <Link to="/">Home</Link></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a class="badge  #ffffff white-text #455a64 blue-grey darken-2 " ><Link to="/Films">Films</Link></a></li>
            <li><a class="badge  #ffffff white-text #455a64 blue-grey darken-2 "><Link to="/Characters">Characters</Link></a></li>
            <li><a class="badge  #ffffff white-text #455a64 blue-grey darken-2" > <Link to="/Planets">Planets</Link></a></li>
            <li><a class="badge  #ffffff white-text #455a64 blue-grey darken-2 "><Link to="/Spaceships">Spaceships</Link></a></li>
            <li><a class="badge  #ffffff white-text #455a64 blue-grey darken-2"><Link to="/Trancports">Trancport</Link></a></li>
          </ul>
         
        </div>
       
      </nav>
      <Switch>
         <Route exact path="/" component={App}></Route>
         <Route path="/Films" component={Films}></Route>
         <Route path="/Characters" component={Characters}></Route>
         <Route path="/Planets" component={Planets}></Route>
         <Route path="/Spaceships" component={Spaceships}></Route> 
         <Route path="/Trancports" component={Trancports}></Route> 
         <Route component={NotFound} ></Route>
       </Switch>
       <footer class="page-footer #546e7a #263238 blue-grey darken-4">

<div class="footer-copyright">
  <div class="container">
  © {new Date().getFullYear()} Copyright Text
  <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
  </div>
</div>
</footer>
    </div>
 
    {/* <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Films">Films</Link>
        </li>
        <li>
          <Link to="/Characters">Characters</Link>
        </li>
        <li>
          <Link to="/Planets">Planets</Link>
        </li>
        <li>
          <Link to="/Spaceships">Spaceships</Link>
        </li>
        <li>
          <Link to="/Trancports">Trancport</Link>
        </li>
        
      </ul>
     <Switch>
         <Route exact path="/" component={App}></Route>
         <Route path="/Films" component={Films}></Route>
         <Route path="/Characters" component={Characters}></Route>
         <Route path="/Planets" component={Planets}></Route>
         <Route path="/Spaceships" component={Spaceships}></Route> 
         <Route path="/Trancports" component={Trancports}></Route> 
         <Route component={NotFound} ></Route>
      </Switch>
      
    </div> */}
  </Router>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
