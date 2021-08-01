import React from "react";
import "./list.styles.scss";

const List = (props) => (
  <div className="list">
    <div className="list_items">{props.children}</div>
  </div>
);

export default List;
