import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Login/Login.js";
import Login from "./components/Login/userLogin"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import ReactDOM from 'react-dom';



class App extends Component {
  // constructor() {
  //   super();
  //   var currentUser;
  //    if(localStorage.length !== 0) {
  //      currentUser = localStorage.getItem('User');
  //      this.setState({User: curentUser});
  //    }
  // }

state = { 
  isLoggedIn: false,
  newsChoice: "",
  sportsNewsChoice: ""
}

changeLoginState = () => {
  this.setState({
    isLoggedIn: true
  })
}

GuestGreeting(props) {
return (
  <div>
  <Signup changeLoginState={this.changeLoginState}/>
  <Login changeLoginState={this.changeLoginState}/>
  </div>
);
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

changeSportsNews = news => {
  this.setState({
    sportsNewsChoice: news
  })
}



  render() {
    console.log(this.state)
    return (

      <div>
        <Header changeNews={this.changeNews} changeSportsNews={this.changeSportsNews}/>
        <div id="meat">
          {this.Greeting(this.state.isLoggedIn)}
        </div>
        <Footer />
      </div>
    )
  }

  UserGreeting(props) {
    return <Wrapper newsChoice={this.state.newsChoice} sportsNewsChoice={this.state.sportsNewsChoice}/>;
  };
};


export default App;
