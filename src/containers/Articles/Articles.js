import React, { Component } from "react";
import { DEFAULT_STATE } from '../../state/initState'
import WithLoading from '../../components/WithLoading';
import Table from '../../sub-components/Table';
import axios from 'axios';

const PATH_BASE = 'https://jsonplaceholder.typicode.com';
const PATH_SEARCH = '/posts';

class Articles extends Component {

  constructor(props){
    super(props);
    this.state = DEFAULT_STATE
  };

  componentDidMount() {
    this.getArticles()
  }

  getArticles = () => {
    axios(`${PATH_BASE}${PATH_SEARCH}`)
    .then(result => {
      console.log(result.data)
      this.setState({
        articles: result.data
      })
    })
    .catch(error => this.setState({ error }))
  }

  render() {
    const { articles } = this.state
    const TableWithLoading = WithLoading(Table);
    return (
      <div>
        <TableWithLoading
          articles={articles}
          isLoading ={this.state.isLoading}
        />
      </div>
    );
  }
}



export default Articles;
