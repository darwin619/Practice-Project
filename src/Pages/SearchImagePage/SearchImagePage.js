import React from "react";
import "./SearchImagePage.scss";
import SearchImageContainer from "../../Components/SearchImage/SearchImageContainer";
import { connect } from "react-redux";
import { fetchImageDataAsync } from "../../Redux/Search/search-actions";

class SearchImagePage extends React.Component {
  componentDidMount() {
    const { fetchImageDataAsync } = this.props;
    const { searchId } = this.props.match.params;
    fetchImageDataAsync(searchId);
  }

  render() {
    return (
      <div className="searchimagepage">
        <SearchImageContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchImageDataAsync: id => dispatch(fetchImageDataAsync(id))
});

export default connect(null,mapDispatchToProps)(SearchImagePage);
