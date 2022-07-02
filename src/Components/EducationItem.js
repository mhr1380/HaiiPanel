import React from "react";
import SandBox from "./assets/images/codesandbox.png";
import FileText from "./assets/images/file-text.svg";
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
          src={FileText}
          alt=""
          onClick={() => {
            props.edit(props.id);
          }}
        />
      </li>
    </React.Fragment>
  );
};

export default EducationItem;
