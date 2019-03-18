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
    const datas = axios(`${PATH_BASE}${PATH_SEARCH}`)
      .then(result => {
        console.log(result)
        return result.data
      })
      .catch(error => this.setState({ error }))

      this.setState({ utilisateurs: datas})
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
        />
      </div>
    );  
  }
}

export default Utilisateurs;
