import './App.css';
import Navbar from './component/Navbar/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Projects from './component/Projects/Projects';
import Blog from './component/Blog/Blog';
import Pages from './component/Pages/Pages';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (

    <div>
      <Router>
        <Navbar></Navbar>
        <div className="App">
          {/* <Navbar></Navbar> */}
          {/* <Home></Home> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/pages">
              <Pages />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
