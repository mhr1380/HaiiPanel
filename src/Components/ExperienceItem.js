import React from "react";
import FileText from "./assets/images/file-text.svg";
import SandBox from "./assets/images/codesandbox.png";
import receipt_edit from "./assets/images/receipt-edit.png";

import "./ExperienceItem.css";
const ExperienceItem = (props) => {
  return (
    <React.Fragment>
      <li>
        <img src={SandBox} alt="" />
        <div>
          <h3>{props.title}</h3>
          <p>{props.company}</p>
        </div>
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

export default ExperienceItem;
