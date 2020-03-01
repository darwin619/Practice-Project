import React from "react";
import "./SearchImagePreview.scss";
import { withRouter } from "react-router-dom";
import AddTolist from "../AddToList/AddToList";

const SearchImagePreview = ({ item, index, history }) => {
  return (
    <div className="searchimagepreview-outer">
      <div className="searchimagepreview-container">
        <img
          key={index}
          src={item.links[0].href}
          alt="searchimage"
          className="searchimagepreview-img"
          onClick={() => history.push(`/imagepage/${item.data[0].nasa_id}`)}
        />
      </div>
      <div className="searchimagepreview-addtolist">
        <AddTolist item={item} />
      </div>
    </div>
  );
};

export default withRouter(SearchImagePreview);
