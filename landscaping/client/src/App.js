import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login1 from "./pages/Login1";
import Nav from "./components/Nav";
import Reviews from "./pages/Review";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login1" component={Login1} />
        <Route exact path="/Review" component={Reviews} />
        </Wrapper>    
        <Footer />
      </div>
    </Router>
  );
}

export default App;
