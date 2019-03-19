import React, {Component} from "react";
import Button from '../../sub-components/Button';
import WithLoading from '../../components/WithLoading';

class Table extends Component {

  render() {

    const { articles, albums, utilisateurs, showPhotos, showAlbums, showTodos, showPost, nbrelement, deleteArticle, isSearched, pattern, clickDetail, deleteUser, isLoading } = this.props
    const ButtonWithLoading = WithLoading(Table);

    if(articles) {
      return (
        <table className="redTable">
          <thead>
            <tr>
              <th>id</th>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.filter(isSearched(pattern)).slice(0, nbrelement).map( item =>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td className="pointer"
                  onClick={() => clickDetail(item.id)} >{item.title}
                </td>
                <td>
                  <Button
                  type="button"
                  onClick={() => deleteArticle(item)}
                  >Supprimer
                  </Button>

                </td>
              </tr>
              )
            }
          </tbody>
        </table> )
    } else if(albums) {
        return (
          <div>
            <table className="redTable">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                </tr>
              </thead>
              <tbody>
                {albums.map(item =>
                  <tr key={item.id}>
                      <td>{item.id}</td>
                      <td className="pointer" onClick={() =>showPhotos(item.id)} >{item.title}</td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        )
    } else {
        return (
          <div>
            { utilisateurs ?
            <table className="redTable">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th>options</th>
                  <th>actions</th>
              </tr>
              </thead>
              <tbody>
                {utilisateurs.map(item =>
                  <tr key={item.id}>
                      <td>{item.id}</td>
                      <td className="pointer" >{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>
                        <Button type="button" onClick={() => showAlbums(item.id)} >Voir albums</Button>
                        <Button type="button" onClick={() => showTodos(item.id)} >Voir todos</Button>
                        <Button type="button" onClick={() => showPost(item.id)} >Voir articles</Button>
                      </td>
                      <td>
                        <Button type="button" onClick={() => deleteUser(item)} >Supprimer</Button>
                      </td>

                  </tr>
                )}
              </tbody>
            </table>
            : ''}
          </div>
        )
    }
  }
}

export default Table;
