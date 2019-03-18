import React, {Component} from "react";
import Button from '../../sub-components/Button';
import PropTypes from 'prop-types';

class Table extends Component {

  render() {

    const { hackers, evenements, pattern, onDismiss, isSearched, onUpperCase } = this.props
    return(
      <div>
        <h2>Liste des évènements (state) : </h2>
          <ul>
          {evenements ?
            (
              evenements.filter(isSearched(pattern)).map( item =>
                <li key={item.idObject}>
                  <Button
                    type="button"
                    onClick={() => onDismiss(item.idObject)}
                  >Cacher</Button>
                  <div>{item.titre}</div>
                  <div><span>{item.lieu}</span> - <span>{item.date}</span></div>
                  <div>{item.description}</div>
                  <div><Button
                    type="button"
                    onClick={() => onUpperCase(item.idObject)}
                  >Mettre en majuscule</Button></div>
                </li>
              )
          ) : (
            hackers.map( (hacker, index) =>
              <li key={index}>
                <div>{hacker.name}</div>
              </li>
            )
          )
          }
        </ul>
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
