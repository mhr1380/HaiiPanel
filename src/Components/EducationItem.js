import React from "react";
import SandBox from "./assets/images/codesandbox.png";
import receipt_edit from "./assets/images/receipt-edit.png";

const EducationItem = (props) => {
  return (
    <React.Fragment>
      <li>
        <img src={SandBox} alt="" />
        <div>
          <h3>{props.title}</h3>
          <p>{props.degree}</p>
        </div>
        <img
          src={receipt_edit}
          alt=""
          className="receipt-edit-item"
          onClick={() => {
            props.edit(props.id);
          }}
        />
      </li>
    </React.Fragment>
  );
};

export default EducationItem;
