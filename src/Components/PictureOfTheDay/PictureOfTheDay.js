import React from 'react';
import './PictureofTheDay.scss';
import { createStructuredSelector } from "reselect";
import { selectApodData } from "../../Redux/Apod/apod-selectors";
import { connect } from "react-redux";


const PictureofTheDay = ({apodData}) => {
    const {title, url, explanation} = apodData
    return (
        <div className="pictureoftheday">
          <span className="pictureoftheday__title">Astronomical Picture Of The Day</span>
          <img src={url} alt="pictureoftheday" className="pictureoftheday__image" />
          <span className="pictureoftheday__name">{title}</span>
          <span className="pictureoftheday__description">{explanation}</span>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    apodData: selectApodData
  });

export default connect(mapStateToProps)(PictureofTheDay);
