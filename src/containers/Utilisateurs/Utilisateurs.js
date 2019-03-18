import React, { Component } from "react";
import { DEFAULT_STATE } from '../../state/initState';
import axios from 'axios';
import WithLoading from '../../components/WithLoading';
import Table from '../../sub-components/Table';
const PATH_BASE = 'https://jsonplaceholder.typicode.com';
const PATH_SEARCH = '/users';

class Utilisateurs extends Component {

  constructor(props){
    super(props);
    this.state = {DEFAULT_STATE}
  }

  methodAxios = () => {
    axios(`${PATH_BASE}${PATH_SEARCH}`)
      .then(result => {
        this.setState({ utilisateurs: result.data})
      })
      .catch(error => this.setState({ error }))

  }
  showAlbums = (userId) => {
    console.log()
    axios(`${PATH_BASE}/albums?userId=${userId}`)
    .then(result => {
      this.setState({ photos: result.data})
    })
  }

  showPost = (userId) => {
    axios(`${PATH_BASE}/posts?userId=${userId}`)
    .then(result => {
      this.setState({ photos: result.data })
    })
  }
  showTodos = (userId) => {
    axios(`${PATH_BASE}/todos?userId=${userId}`)
    .then(result => {
      this.setState({ photos: result.data})
    })
  }

  componentDidMount(){
    this.methodAxios()
  }

  render() {
    const { utilisateurs } = this.state
    const TableWithLoading = WithLoading(Table);
    return (
      <div>
        <TableWithLoading
          utilisateurs={utilisateurs}
          isLoading ={this.state.isLoading}
          showAlbums={this.showAlbums}
          showTodos={this.showTodos}
          showPost={this.showPost}
        />
      </div>
    );  
  }
}

export default Utilisateurs;
