import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Login/Login.js";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import ReactDOM from 'react-dom';



class App extends Component {

state = { 
  isLoggedIn: false,
  newsChoice: ""
}

changeLoginState = () => {
  this.setState({
    isLoggedIn: true
  })
}

GuestGreeting(props) {
  return <Signup changeLoginState={this.changeLoginState}/>;
};

Greeting(props) {
  if (props) {
  return this.UserGreeting()
  }
  else {
  return this.GuestGreeting()
  }
};

changeNews = news => {
  this.setState({
    newsChoice: news
  })
}

  render() {
    console.log(this.state)
    return (
      <div>
        <Header changeNews={this.changeNews}/>
        <div id="meat">
          {this.Greeting(this.state.isLoggedIn)}
        </div>
        <Footer />
      </div>
    )
  }
  UserGreeting(props) {
    return <Wrapper newsChoice={this.state.newsChoice}/>;
  };
};


export default App;
