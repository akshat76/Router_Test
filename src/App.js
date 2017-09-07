import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import Home from "./Home";
import Topics from "./Topics";
import About from "./About";
import {Switch} from 'react-router';
import AddAddressComponent from "./AddAddressComponent";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}
const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}
const NavPage = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/AddAddressComponent">Add Address Component</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Switch>
      <PropsRoute path="/addaddresscomponent" component={AddAddressComponent} stateList = "Tamil Nadu" />
      </Switch>
    </div>
  </Router>
)
export default NavPage