import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Lessons from './pages/Lessons';
import Students from './pages/Students';
import Teaching from './pages/Teaching';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/students" component={Students} />
          <Route path="/teaching" component={Teaching} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
