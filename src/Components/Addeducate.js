import React from "react";
import "./Addeducate.css";
const Addeducate = (props) => {
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
                    <input type="text" />
                  </div>
                  <div className="itemEE">
                    <p>مقطع تحصیلی</p>
                    <select name="" id="" className="iEEs">
                      <option>درحال تحصیل</option>
                      <option>دیپلم</option>
                      <option>لیسانس</option>
                      <option>کارشناسی</option>
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
            <div className="buttonsFAS bFASAE" dir="ltr">
              <input type="button" value="ذخیره" />
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

export default Addeducate;
