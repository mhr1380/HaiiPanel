import React, { useState } from "react";
import "./EditSkill.css";
const EditSkill = (props) => {
  const [title, settitle] = useState(props.skillInfo.title);
  const onSaveHandler = () => {
    const index = props.skills.findIndex((skill) => {
      return skill.id === props.skillInfo.id;
    });
    const newskills = [...props.skills];
    newskills[index] = { title, id: props.skillInfo.id };
    props.setSkills(newskills);
    props.cancel(false);
  };
  const onDeleteSkillHandler = (id) => {
    console.log(id);
    props.cancel(false);
    props.setSkills((prev) => {
      return prev.filter((skill) => {
        return skill.id !== id;
      });
    });
  };
  return (
    <React.Fragment>
      <div className="editSkill-cont">
        <div className="editSkill" dir="rtl">
          <header className="headerEditSkill">
            <p>مشاهده و ویرایش مهارت</p>
          </header>
          <form action="" className="formEditSkill">
            <p>عنوان مهارت</p>
            <input
              onChange={(e) => {
                settitle(e.target.value);
              }}
              value={title}
              type="text"
            />
            <p>توضیحات</p>
            <textarea></textarea>
            <i
              onClick={() => {
                onDeleteSkillHandler(props.skillInfo.id);
              }}
              className="fa fa-times deleteEditSkill"
            >
              حذف مهارت
            </i>
            <div className="buttonsFES" dir="ltr">
              <input onClick={onSaveHandler} type="button" value="ذخیره" />
              <input
                onClick={() => {
                  props.cancel(false);
                }}
                type="button"
                value="انصراف"
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditSkill;
