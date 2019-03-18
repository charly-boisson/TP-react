import React, {Component} from "react";
import Button from '../../sub-components/Button';

class Table extends Component {

  render() {

    const { articles, albums, utilisateurs, showPhotos, showAlbums, showTodos, showPost, photos, nbrelement, deleteArticle, isSearched, pattern, clickDetail } = this.props

    if(articles) {
        return (<table>
          <tbody>
          {articles.filter(isSearched(pattern)).slice(0, nbrelement).map( item =>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td><a href="#" onClick={() => clickDetail(item.id)} >{item.title}</a></td>
            <td>
              <Button
              type="button"
              onClick={() => deleteArticle(item.id)}
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
            <table>
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
                      <td  onClick={() =>showPhotos(item.id)} >{item.title}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div>
                { photos ?
                  photos.map(photo =>
                    <img key={photo.id} src={photo.thumbnailUrl}></img>
                  )
                :  ''
                }
            </div>
          </div>
        )
    } else {
        return (
          <div>
            { utilisateurs ?
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th>options</th>
                </tr>
              </thead>
              <tbody>
                {utilisateurs.map(item =>
                  <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>
                        <button  onClick={() => showAlbums(item.id)} >albums</button>
                        <button onClick={() => showTodos(item.id)} >todos</button>
                        <button  onClick={() => showPost(item.id)}>post</button>
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
