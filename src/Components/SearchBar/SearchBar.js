import React from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import {selectSearchValue} from '../../Redux/Search/search-selectors';


class SearchBar extends React.Component {

  handlePress = event => {
    const key = event.key;
    const value = encodeURI(event.target.value)
    console.log(value)
    return key === 'Enter' ? this.props.history.push(`/searchpage/results?search_query=${value}`) : null
  }

  handleChange = event => {
    const {value} = event.target

  }

render() {
  console.log(this.props.searchValue)
  return (
    <div className="container-1">
      <div className="container-2">
        <span className="search-icon">
          <FontAwesomeIcon icon={faSearch} className="fa fa-search" />
        </span>
        <input
          name="value"
          onChange={this.handleChange}
          defaultValue={this.props.searchValue}
          onKeyPress={this.handlePress}
          type="search"
          id="search"
          placeholder="Planets, Asteroids, Stars..."
        />
      </div>
    </div>
  );
}
}

const mapStateToProps = state => ({ 
  searchValue: selectSearchValue(state)
});

export default connect(mapStateToProps)(withRouter(SearchBar));
