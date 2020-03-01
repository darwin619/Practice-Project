import React from "react";
import "./SearchImage.scss";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {selectImageData} from '../../Redux/Search/search-selectors';

const SearchImage = ({ imageData }) => {
  return (
    <div className="searchimage">
      <span className='searchimage__title'>{imageData.data[0].title}</span>
      <img src={imageData.links[0].href} alt="searchimage" className='searchimage__img' />
      <span className='searchimage__desc'>{imageData.data[0].description}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  imageData: selectImageData(state)
});

export default connect(mapStateToProps)(withRouter(SearchImage));
