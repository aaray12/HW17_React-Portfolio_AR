import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container} from 'react-bootstrap'
import MyNavbar from "./componets/Navbar"
import Footer from "./componets/footer"
import Home from "./componets/pages/Home"
import Portfolio from "./componets/pages/Portfolio"
import AboutMe from "./componets/pages/About"
import Contact from "./componets/pages/Contact"


function App() {
  return (
    <Router>
      <div >
        <MyNavbar/>
        <Container fluid>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/AboutMe" component={AboutMe}/>
        <Route exact path="/Contact" component={Contact}/>
        </Container>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
