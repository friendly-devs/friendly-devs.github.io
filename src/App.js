import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import NotFound from './component/NotFound';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      <Footer />
    </Router>
  );
}

export default App;