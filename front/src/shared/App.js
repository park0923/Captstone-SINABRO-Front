import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import SignIn from 'pages/SignIn';
import resetPassword from 'pages/resetPassword';
import SignUp from 'pages/SignUp';
import MemberVolunteer from 'pages/MemberVolunteer';
import Member_Home_Inspection from 'pages/Member_Home_Inspection';

class App extends Component {
  render() {
    return (
      <div className="APP">
        <Route exact path="/" component={Home}/>
        <Route path="/user/signin" component={SignIn} />
        <Route path="/user/signup" component={SignUp} />
        <Route path="/resetPassword" component={resetPassword} />
        <Route path="/about" component={About} />        
        <Route path="/MemberVolunteer" component={MemberVolunteer} />
        <Route path="/Member_Home_Inspection" component={Member_Home_Inspection} />
      </div>
    );
  }
}

export default App;
