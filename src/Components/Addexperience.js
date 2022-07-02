import React, { useState } from "react";
import "./Addexperience.css";
const Addexperience = (props) => {
  const [title, settitle] = useState("");
  const [company, setcompany] = useState("");
  return (
    <React.Fragment>
      <div className="addex-cont">
        <div className="wigetPop" id="addExperience" dir="rtl">
          <header className="has">
            <p>افزودن تجربه جدید</p>
          </header>
          <form action="">
            <div className="eDA">
              <div className="eD1 eD">
                <p>عنوان(مثال : طراح گرافیک)</p>
                <input
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="eD2 eD">
                <p>نام شرکت</p>
                <input
                  value={company}
                  onChange={(e) => {
                    setcompany(e.target.value);
                  }}
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
            <div className="buttonsFAS bFASAE" dir="ltr">
              <input
                onClick={() => {
                  props.add({ title, company });
                }}
                type="button"
                value="ذخیره"
              />
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

export default Addexperience;
