import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectToken } from "./redux/user/user.selectors";

import HomePage from "./pages/home-page/home-page.component";
import Authenticaton from "./pages/authentication/authentication.component";

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid w-90 p-0">
        <Switch>
          <Route exact path="/" render={() => this.props.token === "" ? (<Authenticaton />) : (<Redirect to="/dashboard" />)} />
          <Route path="/dashboard" component={HomePage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  token: selectToken
})

export default connect(mapStateToProps)(App);
