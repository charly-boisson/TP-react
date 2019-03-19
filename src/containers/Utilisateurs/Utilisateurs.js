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

  componentDidMount(){
    this.getUsers()
  }

  //Requetes
  getUsers = () => {
    axios(`${PATH_BASE}${PATH_SEARCH}`)
      .then(result => {
        this.setState({ utilisateurs: result.data})
      })
      .catch(error => this.setState({ error }))

  }

  deleteUser = user => {

    var index = this.state.utilisateurs.indexOf(user);
    this.state.utilisateurs.splice(index, 1);
    this.setState({
      utilisateurs: this.state.utilisateurs
    })

  }

  showAlbums = (userId) => {
    axios(`${PATH_BASE}/albums?userId=${userId}`)
    .then(result => {
      this.setState({
        posts_user: [],
        todos_user: [],
        albums_user: result.data
      })
    })
  }

  showPost = (userId) => {
    axios(`${PATH_BASE}/posts?userId=${userId}`)
    .then(result => {
      this.setState({
        todos_user: [],
        albums_user: [],
        posts_user: result.data
      })
    })
  }

  showTodos = (userId) => {
    axios(`${PATH_BASE}/todos?userId=${userId}`)
    .then(result => {
      this.setState({
        posts_user: [],
        albums_user: [],
        todos_user: result.data
      })
    })
  }

  render() {
    const { utilisateurs, albums_user, todos_user, posts_user } = this.state
    const TableWithLoading = WithLoading(Table);
    return (
      <div>
        <div className="row">
          <div className="col">
            <TableWithLoading
              utilisateurs={utilisateurs}
              isLoading ={this.state.isLoading}
              showAlbums={this.showAlbums}
              showTodos={this.showTodos}
              showPost={this.showPost}
              deleteUser={this.deleteUser}
            />
          </div>
          <div className="col">

            {albums_user &&
              albums_user.map( album =>
                <div key={album.id} className="card">
                  <div className="card-body">
                    <h5 className="card-title">Titre de l'album : {album.title}</h5>
                  </div>
                </div>
              )
            }
            {todos_user &&
              todos_user.map( todos =>
                <div key={todos.id} className="card">
                  <div className="card-body">
                    <h5 className="card-title">Titre de la tâche : {todos.title}</h5>
                    {todos.completed ?
                      <span className="badge badge-success">Terminé</span>
                      :
                      <span className="badge badge-danger">A faire</span>
                    }
                  </div>
                </div>
              )
            }
            {posts_user &&
              posts_user.map( post_user =>
                <div key={post_user.id} className="card">
                  <div className="card-body">
                    <h5 className="card-title">Titre de l'article : {post_user.title}</h5>
                    <div className="card-text">{post_user.body}</div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Utilisateurs;
