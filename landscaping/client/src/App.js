import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    return (
        <Router>
          <div>
            <Nav/>
            <Wrapper>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/login" component={Login} /> */}
              {/* <Route exact path="/deleteReview" component={SearchDeleteReview} /> */}
            </Wrapper>
            <Footer />
          </div>
        </Router>
      );
}
export default App;
