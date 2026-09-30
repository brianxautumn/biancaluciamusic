import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Lessons from './pages/Lessons';
import Students from './pages/Students';
import Teaching from './pages/Teaching';
import Contact from './pages/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

const TITLES = {
  '/': 'Bianca Lucia Music Studio',
  '/about': 'About',
  '/lessons': 'Lessons',
  '/students': 'Students',
  '/teaching': 'Teaching',
  '/contact': 'Contact',
};

// Sets a per-route document title and moves focus to <main> on client-side navigation
const RouteAnnouncer = ({ mainRef }) => {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    const page = TITLES[pathname.replace(/\/$/, '') || '/'];
    document.title = !page || page === TITLES['/'] ? TITLES['/'] : `${page} | ${TITLES['/']}`;
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo(0, 0);
    if (mainRef.current) mainRef.current.focus({ preventScroll: true });
  }, [pathname, mainRef]);
  return null;
};

function App() {
  const mainRef = useRef(null);
  return (
    <Router>
      <div className="App">
        <a className="skip-link" href="#main">Skip to main content</a>
        <RouteAnnouncer mainRef={mainRef} />
        <div>
          <Header />
        </div>
        <main id="main" tabIndex="-1" ref={mainRef}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/students" component={Students} />
          <Route path="/teaching" component={Teaching} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
