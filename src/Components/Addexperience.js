import React from "react";
import "./Addexperience.css";
const Addexperience = () => {
  return (
    <React.Fragment>
      <div className="addex-cont">
        <div class="wigetPop" id="addExperience" dir="rtl">
          <header class="has">
            <p>افزودن تجربه جدید</p>
          </header>
          <form action="">
            <div class="eDA">
              <div class="eD1 eD">
                <p>عنوان(مثال : طراح گرافیک)</p>
                <input type="text" />
              </div>
              <div class="eD2 eD">
                <p>نام شرکت</p>
                <input type="text" />
              </div>
              <div class="nDi">
                <p>اضافه کردن لوگوی شرکت</p>
              </div>
            </div>
            <div class="eTA">
              <div class="eT1 eT">
                <p>از تاریخ</p>
                <div class="spET">
                  <select class="mah">
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
                  <select class="sal">
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
              <div class="eT2 eT">
                <p>تا تاریخ</p>
                <div class="spET">
                  <select class="mah">
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
                  <select class="sal">
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
              <div class="fkh"></div>
            </div>
            <div class="eTAA">
              <p>توضیحات</p>
              <textarea class="eTAAT"></textarea>
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

export default Addexperience;
