import React from "react";
import "./Addexperience.css";
import { useState } from "react";
import note_remove from "./assets/images/note-remove.png";

const EditExperience = (props) => {
  const [title, settitle] = useState(props.exInfo.title);
  const [company, setcompany] = useState(props.exInfo.company);
  const onSave = () => {
    const index = props.ex.findIndex((exp) => {
      return exp.id === props.exInfo.id;
    });
    const newExs = [...props.ex];
    newExs[index] = { title, company, id: props.exInfo.id };
    props.setEx(newExs);
    props.cancel(false);
  };
  const onDeleteExperienceHandler = (id) => {
    props.cancel(false);
    props.setEx((prev) => {
      return prev.filter((ex) => {
        return ex.id !== id;
      });
    });
  };
  return (
    <React.Fragment>
      <div className="addex-cont">
        <div className="wigetPop" id="addExperience" dir="rtl">
          <header className="has">
            <p>ویرایش تجربه</p>
          </header>
          <form action="">
            <div className="eDA">
              <div className="eD1 eD">
                <p>عنوان(مثال : طراح گرافیک)</p>
                <input
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                  value={title}
                  type="text"
                />
              </div>
              <div className="eD2 eD">
                <p>نام شرکت</p>
                <input
                  onChange={(e) => {
                    setcompany(e.target.value);
                  }}
                  value={company}
                  type="text"
                />
              </div>
              <div className="nDi">
                <p>اضافه کردن لوگوی شرکت</p>
              </div>
            </div>
            <div className="eTA">
              <div className="eT1 eT">
                <p>از تاریخ</p>
                <div className="spET">
                  <select className="mah">
                    <option>فروردین</option>
                    <option>اردیبهشت</option>
                    <option>خرداد</option>
                    <option>تیر</option>
                    <option>مرداد</option>
                    <option>شهریور</option>
                    <option>مهر</option>
                    <option>ابان</option>
                    <option>اذر</option>
                    <option>دی</option>
                    <option>بهمن</option>
                    <option>اسفند</option>
                  </select>
                  <select className="sal">
                    <option>1401</option>
                    <option>1400</option>
                    <option>1399</option>
                    <option>1398</option>
                    <option>1397</option>
                    <option>1396</option>
                    <option>1395</option>
                    <option>1394</option>
                    <option>1393</option>
                    <option>1392</option>
                    <option>1391</option>
                    <option>1390</option>
                  </select>
                </div>
              </div>
              <div className="eT2 eT">
                <p>تا تاریخ</p>
                <div className="spET">
                  <select className="mah">
                    <option>فروردین</option>
                    <option>اردیبهشت</option>
                    <option>خرداد</option>
                    <option>تیر</option>
                    <option>مرداد</option>
                    <option>شهریور</option>
                    <option>مهر</option>
                    <option>ابان</option>
                    <option>اذر</option>
                    <option>دی</option>
                    <option>بهمن</option>
                    <option>اسفند</option>
                  </select>
                  <select className="sal">
                    <option>1401</option>
                    <option>1400</option>
                    <option>1399</option>
                    <option>1398</option>
                    <option>1397</option>
                    <option>1396</option>
                    <option>1395</option>
                    <option>1394</option>
                    <option>1393</option>
                    <option>1392</option>
                    <option>1391</option>
                    <option>1390</option>
                  </select>
                </div>
              </div>
              <div className="fkh"></div>
            </div>
            <div className="eTAA">
              <p>توضیحات</p>
              <textarea className="eTAAT"></textarea>
            </div>
            <div className="remove-img-cont">
              <i
                onClick={() => {
                  onDeleteExperienceHandler(props.exInfo.id);
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

export default EditExperience;
