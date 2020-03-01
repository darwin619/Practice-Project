import React from "react";
import "./AddToList.scss";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../Redux/List/list-actions";
import { selectListItems } from "../../Redux/List/list-selectors";

const AddToList = ({ item, listItems, addItem, removeItem }) => {
  const existingItem = listItems.filter(
    listItem => item.data[0].nasa_id === listItem.data[0].nasa_id
  );
  return (
    <div className="addtolist">
      {existingItem.length ? (
        <div className="addtolist__container" onClick={() => removeItem(item)}>
          <FontAwesomeIcon icon={faCheck} className="addtolist__icon" />
          <span>Added To List</span>
        </div>
      ) : (
        <div className="addtolist__container" onClick={() => addItem(item)}>
          <FontAwesomeIcon icon={faPlus} className="addtolist__icon" />
          <span>Add To List</span>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

const mapStateToProps = state => ({
  listItems: selectListItems(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToList);
