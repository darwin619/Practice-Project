import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsSearchDataFetching } from "../../Redux/Search/search-selectors";

import WithSpinner from '../Withspinner/WithSpinner';
import SearchImageOverview from "./SearchImageOverview";

const mapStateToProps = createStructuredSelector({
  isFetching: state => selectIsSearchDataFetching(state)
});

const PictureOfTheDayContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SearchImageOverview);

export default PictureOfTheDayContainer;
