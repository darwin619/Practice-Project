import React from "react";
import "./ListPage.scss";
import { selectListItems } from "../../Redux/List/list-selectors";
import { connect } from "react-redux";
import SearchImagePreview from "../../Components/SearchImagePreview/SearchImagePreview";

const ListPage = ({ listItems }) => {
  console.log(listItems);
  return (
    <div className="listpage">
      <div className="listpage__title">My List</div>
      {listItems.length ? null : <div>Your list is empty bro!</div>}
      <div className="listpage__outer">
        <div className="listpage__inner">
          {listItems.map((item, index) => (
            <SearchImagePreview item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  listItems: selectListItems(state)
});

export default connect(mapStateToProps)(ListPage);
