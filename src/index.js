import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation'
import Slider from './components/Slider'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import Batteries from './components/Batteries';
import Scooters from './components/Scooters';

ReactDOM.render(
  <React.StrictMode>
     <Router >
       


        <Switch>

          
          <Route exact path="/">
            <App />
          </Route>
          {/* <Route path="/service" component={Service} /> */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path='/batteries'>
            <Batteries />
          </Route>
          <Route exact path='/scooters'>
            <Scooters />
            </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>

      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
