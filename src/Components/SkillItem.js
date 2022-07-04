import React from "react";
import receipt_edit from "./assets/images/receipt-edit.png";
const SkillItem = (props) => {
  return (
    <React.Fragment>
      <li>
        <p>{props.title}</p>
        <img
          className="receipt-edit-item"
          onClick={() => {
            props.edit(props.id);
          }}
          src={receipt_edit}
          alt=""
        />
      </li>
    </React.Fragment>
  );
};

export default SkillItem;
