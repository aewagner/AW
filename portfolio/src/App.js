import React, { Component }from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/Cart" component={Cart} />
            <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

