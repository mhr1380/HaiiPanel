import React from "react";
import FileText from "./assets/images/file-text.svg";

const SkillItem = (props) => {
  return (
    <React.Fragment>
      <li>
        <p>{props.title}</p>
        <img
          onClick={() => {
            props.edit(props.id);
          }}
          src={FileText}
          alt=""
        />
      </li>
    </React.Fragment>
  );
};

export default SkillItem;
