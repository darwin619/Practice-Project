import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsApodLoaded } from "../../Redux/Apod/apod-selectors";

import WithSpinner from '../Withspinner/WithSpinner';
import PictureOfTheDay from "./PictureOfTheDay";

const mapStateToProps = createStructuredSelector({
  isFetching: state => !selectIsApodLoaded(state)
});

const PictureOfTheDayContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PictureOfTheDay);

export default PictureOfTheDayContainer;
