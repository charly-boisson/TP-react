import React, {Component} from "react";
import Button from '../../sub-components/Button';
import PropTypes from 'prop-types';

class Table extends Component {

  render() {

    const { articles, nbrelement, deleteArticle, isSearched, pattern, clickDetail } = this.props
    return(
      <div>
        <table>
          <tbody>
        {articles ?
          articles.filter(isSearched(pattern)).slice(0, nbrelement).map( item =>
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

          ) : (
            <div></div>
          )
        }
        </tbody>
        </table>
      </div>
    )
  }
}

Table.propTypes = {
  hackers: PropTypes.array,
  evenements: PropTypes.array,
  pattern: PropTypes.string,
  onDismiss: PropTypes.func,
  isSearched: PropTypes.func,
};


export default Table;
