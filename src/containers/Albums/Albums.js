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
    axios(`${PATH_BASE}${PATH_SEARCH}`)
      .then(result => {
        this.setState({ albums: result.data})
      })
      .catch(error => this.setState({ error }))

  }

  showPhotos = (albumId) => {
    console.log(`${PATH_BASE}/photos?albumId=${albumId}`)
    axios(`${PATH_BASE}/photos?albumId=${albumId}`)
    .then(result => {
      this.setState({ photos: result.data})
    })
  }

  componentDidMount(){
    this.methodAxios()
  }

  render() {
    const { albums, photos } = this.state
    const TableWithLoading = WithLoading(Table);
    return (
      <div>
        <TableWithLoading
          albums={albums}
          photos={photos}
          showPhotos={this.showPhotos}
          isLoading ={this.state.isLoading}
        />
      </div>
    );  
    }
}

export default Albums;
