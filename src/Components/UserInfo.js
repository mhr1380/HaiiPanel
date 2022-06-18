import React from "react";
import "./UserInfo.css";
import UserProf from "./assets/images/useprof.png";
import SandBox from "./assets/images/codesandbox.png";
import FileText from "./assets/images/file-text.svg";
import RightRectangle from "./assets/images/rightrec.png";
import LeftRectangle from "./assets/images/leftrec.png";
const UserInfo = () => {
  return (
    <React.Fragment>
      <div className="userinfo-cont">
        <div className="right-square-container userinfo">
          <img src={RightRectangle} alt="" />
        </div>
        <div className="left-square-container userinfo">
          <img src={LeftRectangle} alt="" />
        </div>
        <main>
          <section className="sec1">
            <div className="personalInformation">
              <header className="hpi">
                <h3>اطلاعات فردی</h3>
                <i>ویرایش</i>
              </header>
              <div className="profile">
                <img src={UserProf} alt="" />
                <div>
                  <h4>محمد مهدی گل محمدی</h4>
                  <p>--</p>
                </div>
              </div>
              <div className="grid1" dir="rtl">
                <div>
                  <p>نام کاربری</p>
                  <p>Golimo99</p>
                </div>
                <div>
                  <p>رمز عبور</p>
                  <p>********</p>
                </div>
                <div>
                  <p>کد ملی</p>
                  <p>--</p>
                </div>
                <div>
                  <p>تاریخ تولد</p>
                  <p>--</p>
                </div>
                <div>
                  <p>تلفن همراه</p>
                  <p>0912345678</p>
                </div>
                <div>
                  <p>ایمیل</p>
                  <p>Golimo99@gmail.com</p>
                </div>
                <div className="address">
                  <p>ادرس</p>
                  <p>قم / خیابان معلم/مرکز ملی نوآوری و خلاقیت اشراق</p>
                </div>
                <div>
                  <p>استان محل سکونت</p>
                  <p>قم</p>
                </div>
                <div>
                  <p>شهر محل سکونت</p>
                  <p>قم</p>
                </div>
                <div>
                  <p>وضعیت تاهل</p>
                  <p>مجرد</p>
                </div>
                <div>
                  <p>جنسیت</p>
                  <p>مرد</p>
                </div>
              </div>
            </div>
          </section>
          <section className="sec2">
            <div className="skill">
              <header className="hs">
                <h3>مهارت ها</h3>
                <i>ویرایش</i>
              </header>
              <ul dir="rtl">
                <li>
                  <p>توسعه دهنده فرانت اند</p>
                  <img src={FileText} alt="" />
                </li>
                <li>
                  <p>توسعه دهنده بک اند</p>
                  <img src={FileText} alt="" />
                </li>
                <li>
                  <p>امنیت شبکه</p>
                  <img src={FileText} alt="" />
                </li>
              </ul>
            </div>
            <div className="experiences">
              <header className="he">
                <h3>تجربه ها</h3>
                <i>ویرایش</i>
              </header>
              <ul dir="rtl">
                <li>
                  <img src={SandBox} alt="" />
                  <div>
                    <h3>برنامه نویس ارشد جاوا</h3>
                    <p>اسنپ</p>
                  </div>
                  <img src={FileText} alt="" />
                </li>
                <li>
                  <img src={SandBox} alt="" />
                  <div>
                    <h3>برنامه نویس ارشد جاوا</h3>
                    <p>اسنپ</p>
                  </div>
                  <img src={FileText} alt="" />
                </li>
                <li>
                  <img src={SandBox} alt="" />
                  <div>
                    <h3>برنامه نویس ارشد جاوا</h3>
                    <p>اسنپ</p>
                  </div>
                  <img src={FileText} alt="" />
                </li>
              </ul>
            </div>
            <div className="records">
              <header className="hr">
                <h3>سوابق تحصیلی</h3>
                <i>ویرایش</i>
              </header>
              <ul dir="rtl">
                <li>
                  <img src={SandBox} alt="" />
                  <div>
                    <h3>مهندسی کامپیوتر</h3>
                    <p>کارشناسی</p>
                  </div>
                  <img src={FileText} alt="" />
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
