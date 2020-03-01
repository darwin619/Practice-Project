import React from "react";
import "./Apod.scss";
import { connect } from "react-redux";
import getApodAsync from "../../Redux/Apod/apod-actions";
import PictureofTheDayContainer from "../../Components/PictureOfTheDay/PictureOfTheDayContainer";

class Apod extends React.Component {
  componentDidMount() {
    const {getApodAsync} = this.props;
    getApodAsync();
  }
  render() {
    return (
      <div className="apod">
        <PictureofTheDayContainer /> 
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getApodAsync: () => dispatch(getApodAsync())
});

export default connect(null, mapDispatchToProps)(Apod);
