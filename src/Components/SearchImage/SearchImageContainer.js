import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsImageDataLoaded } from "../../Redux/Search/search-selectors";

import WithSpinner from '../Withspinner/WithSpinner';
import SearchImage from "./SearchImage";

const mapStateToProps = createStructuredSelector({
  isFetching: state => !selectIsImageDataLoaded(state)
});

const SearchImageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SearchImage);

export default SearchImageContainer;
