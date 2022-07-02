import React, { useState } from "react";

const AddSkill = (props) => {
  const [title, settitle] = useState("");

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

            <div className="buttonsFES" dir="ltr">
              <input
                onClick={() => {
                  props.add(title);
                }}
                type="button"
                value="ذخیره"
              />
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

export default AddSkill;
