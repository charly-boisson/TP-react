import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Content from './components/Content'
import { DEFAULT_STATE } from './state/initState'
// import ReactNotification from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";

class App extends Component {

  constructor(props){
    super(props);
    this.state = DEFAULT_STATE
  };

  render() {
    return (
      <div className="App">
        <header data={this.state} className="App-header">
          <h1>CMS</h1>
          <Nav />
        </header>
        <Content data={this.state} ></Content>
      </div>
    );

  }
}

export default App;
