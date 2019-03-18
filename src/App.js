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
    const { notifications } = this.state;
    return (
      <div className="App">
        <div>
          <ul>
            { notifications.map( (notification, index)  =>
              <li key={index} >
                <div>{notification.message}</div>
              </li>
            ) }
          </ul>
        </div>
        <header className="App-header">
          <h1>Gestion des évènements</h1>
          <Nav />
        </header>
        <Content></Content>
      </div>
    );

  }
}

export default App;
