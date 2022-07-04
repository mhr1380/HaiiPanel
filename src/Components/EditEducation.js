import React, { useState } from "react";
import note_remove from "./assets/images/note-remove.png";
import add_square from "./assets/images/add-square.png";

const EditEducation = (props) => {
  const [title, settitle] = useState(props.edInfo.title);
  const [degree, setdegree] = useState(props.edInfo.degree);
  const onSave = () => {
    const index = props.ed.findIndex((eds) => {
      return eds.id === props.edInfo.id;
    });
    const newEds = [...props.ed];
    newEds[index] = { title, degree, id: props.edInfo.id };
    props.setEd(newEds);
    props.cancel(false);
  };
  const onDeleteEducationHandler = (id) => {
    props.cancel(false);
    props.setEd((prev) => {
      return prev.filter((ed) => {
        return ed.id !== id;
      });
    });
  };
  return (
    <React.Fragment>
      <div className="addeducate-cont">
        <div className="wigetPop" id="addExperience" dir="rtl">
          <header className="has">
            <p>افزودن سابقه تحصیلی جدید</p>
          </header>
          <form>
            <section className="see1">
              <div className="ee1">
                <div className="ee11">
                  <div className="itemEE">
                    <p>رشته تحصیلی</p>
                    <input
                      onChange={(e) => {
                        settitle(e.target.value);
                      }}
                      value={title}
                      type="text"
                    />
                  </div>
                  <div className="itemEE">
                    <p>مقطع تحصیلی</p>
                    <select
                      onChange={(e) => {
                        setdegree(e.target.value);
                      }}
                      value={degree}
                      name=""
                      id=""
                      className="iEEs"
                    >
                      <option>درحال تحصیل</option>
                      <option>دیپلم</option>
                      <option>لیسانس</option>
                      <option>کارشناسی</option>
                      <option>کارشناسی ارشد</option>
                      <option>دکترا</option>
                    </select>
                  </div>
                  <div className="itemEE">
                    <p>معدل</p>
                    <input type="text" />
                  </div>
                </div>

                <div className="ee12">
                  <div className="itemEE">
                    <p>از تاریخ</p>
                    <input type="datetime-local" />
                  </div>
                  <div className="itemEE">
                    <p>تا تاریخ</p>
                    <input type="datetime-local" value="" />
                  </div>
                  <div className="itemEE">
                    <p>نام موسسه آموزشی</p>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="nDi">
                <p>اضافه کردن لوگوی شرکت</p>
              </div>
            </section>
            <div className="checkboxd">
              <label className="checkbox-container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>
              <p>همچنان مشغول تحصیل هستم</p>
            </div>
            <div className="itemEE Description">
              <p>توصیحات</p>
              <input type="text" />
            </div>
            <div className="remove-img-cont">
              <i
                onClick={() => {
                  onDeleteEducationHandler(props.edInfo.id);
                }}
                className="fa fa-times deleteEditSkill"
              >
                حذف مهارت
              </i>

              <img src={note_remove} className="edit-img" />
            </div>
            <div className="buttonsFAS bFASAE" dir="ltr">
              <input onClick={onSave} type="button" value="ذخیره" />
              <input
                type="button"
                value="انصراف"
                onClick={() => {
                  props.cancel(false);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditEducation;
