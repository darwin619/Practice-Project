import React from "react";
import "./SearchImageOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSearchData } from "../../Redux/Search/search-selectors";
import { withRouter } from "react-router-dom";
import SearchImagePreview from '../SearchImagePreview/SearchImagePreview';
 
const SearchImageOverview = ({ searchData, history }) => {
  return (
    <div className="searchimageoverview-outer">
      <div className="searchimageoverview-inner">
        {searchData.map((item, index) => (
          <SearchImagePreview item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  searchData: selectSearchData
});

export default connect(mapStateToProps)(withRouter(SearchImageOverview));
