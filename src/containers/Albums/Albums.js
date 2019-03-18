import React, { Component } from "react";
import { DEFAULT_STATE } from '../../state/initState';
import WithLoading from '../../components/WithLoading';
import axios from 'axios';
import Table from '../../sub-components/Table';

const PATH_BASE = 'https://jsonplaceholder.typicode.com';
const PATH_SEARCH = '/albums';

class Albums extends Component {

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

      this.setState({ albums: datas})
  }

  componentDidMount(){
    this.methodAxios()
  }

  render() {
    const { albums } = this.state
    const TableWithLoading = WithLoading(Table);
    return (
      <div>
        <TableWithLoading
          albums={albums}
          isLoading ={this.state.isLoading}
        />
      </div>
    );  
    }
}

export default Albums;
