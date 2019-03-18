import React, {Component} from "react";
import Button from '../../sub-components/Button';
import PropTypes from 'prop-types';

class Table extends Component {

  render() {

    const { articles } = this.props
    return(
      <div>
        <table>
        {articles ?
          articles.map( item =>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>

          ) : (
            <div></div>
          )
        }
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
