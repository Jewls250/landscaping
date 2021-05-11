import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";
function App() {
    return (
        <Router>
          <div>
            <Navbar />
            <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/deleteReview" component={SearchDeleteReview} />
            </Wrapper>
            <Footer />
          </div>
        </Router>
      );
}
export default App;
