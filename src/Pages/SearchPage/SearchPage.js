import React from "react";
import "./SearchPage.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchImageOverviewContainer from "../../Components/SearchImageOverview/SearchImageOverviewContainer";
import queryString from "query-string";
import {fetchSearchDataAsync, setSearchValue} from "../../Redux/Search/search-actions";
import { connect } from "react-redux";
import {selectSearchData} from '../../Redux/Search/search-selectors';

class SearchPage extends React.Component {
  componentDidMount() {
    const { search } = this.props.location;
    const query = queryString.parse(search);
    const value = encodeURI(query.search_query); 
    const value2 = decodeURI(value)
    const { dispatch } = this.props;
    if(value !== 'undefined') {
      dispatch(fetchSearchDataAsync(value));
      dispatch(setSearchValue(value2));
    }
    console.log(value)
  }

  render() {
    return (
      <div className="searchpage">
        <span className="searchpage__title">
          Search For Images In NASA Database
        </span>
        <SearchBar />
        <SearchImageOverviewContainer />
      </div>
    );
  } 
}

const mapStateToProps = state => ({ 
  searchData: selectSearchData(state)
});

export default connect(mapStateToProps)(SearchPage);
