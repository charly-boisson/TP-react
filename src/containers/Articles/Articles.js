import React, { Component } from "react";
import { DEFAULT_STATE } from '../../state/initState'
import axios from 'axios';

const PATH_BASE = 'https://swapi.co/api';

class Articles extends Component {

  constructor(props){
    super(props);
    this.state = DEFAULT_STATE
  };

  getArticles = () => {
    axios(`${PATH_BASE}`)
    .then(result => {
      this.setSearchTopStories(result.data)
      this.setState({
        isLoading: false
      })
    })
    .catch(error => this.setState({ error }))
  }



  render() {
    return (
      <div></div>
    );
  }
}



export default Articles;
