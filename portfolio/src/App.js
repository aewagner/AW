import React, { Component }from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Router>
        <div>
          <Nav 
          
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/products" component={Products} />
            <Route exact path="/Cart" component={Cart} />
            <Route component={NoMatch} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}
export default App;

