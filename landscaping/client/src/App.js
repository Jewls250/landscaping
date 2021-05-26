import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Auth } from "aws-amplify";
import Login1 from "./pages/Login1";
import Nav from "./components/Nav";
import Reviews from "./pages/Review";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.css";
import { AppContext } from "./libs/contextLib";




function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }
  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
  }

  return (
    !isAuthenticating && (<Router>
      <div>
       
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Nav handleLogout={handleLogout}/>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/login1">
                <Login1 />
          </Route>
          {isAuthenticated && <Route exact path="/Review" component={Reviews} />}
        </Wrapper>
</AppContext.Provider>
        
        <Footer />
      </div>
    </Router>
  ));
}

export default App;
