import React from "react";
import "./Addeducate.css";
const Addeducate = () => {
  return (
    <React.Fragment>
      <div className="addeducate-cont">
        <div class="wigetPop" id="addExperience" dir="rtl">
          <header class="has">
            <p>افزودن سابقه تحصیلی جدید</p>
          </header>
          <form action="">
            <section class="see1">
              <div class="ee1">
                <div class="ee11">
                  <div class="itemEE">
                    <p>رشته تحصیلی</p>
                    <input type="text" />
                  </div>
                  <div class="itemEE">
                    <p>مقطع تحصیلی</p>
                    <select name="" id="" class="iEEs">
                      <option>درحال تحصیل</option>
                      <option>دیپلم</option>
                      <option>لیسانس</option>
                      <option>کارشناسی</option>
                      <option>دکترا</option>
                    </select>
                  </div>
                  <div class="itemEE">
                    <p>معدل</p>
                    <input type="text" />
                  </div>
                </div>

                <div class="ee12">
                  <div class="itemEE">
                    <p>از تاریخ</p>
                    <input type="datetime-local" />
                  </div>
                  <div class="itemEE">
                    <p>تا تاریخ</p>
                    <input type="datetime-local" value="" />
                  </div>
                  <div class="itemEE">
                    <p>نام موسسه آموزشی</p>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div class="nDi">
                <p>اضافه کردن لوگوی شرکت</p>
              </div>
            </section>
            <div class="checkboxd">
              <label class="checkbox-container">
                <input type="checkbox" />
                <div class="checkmark"></div>
              </label>
              <p>همچنان مشغول تحصیل هستم</p>
            </div>
            <div class="itemEE Description">
              <p>توصیحات</p>
              <input type="text" />
            </div>
            <div class="buttonsFAS bFASAE" dir="ltr">
              <input type="button" value="ذخیره" />
              <input type="button" value="انصراف" onclick="cancelPop();" />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Addeducate;
