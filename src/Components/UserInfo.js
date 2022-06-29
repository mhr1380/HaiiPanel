import React, { useState } from "react";
import "./UserInfo.css";
import UserProf from "./assets/images/useprof.png";
import SandBox from "./assets/images/codesandbox.png";
import FileText from "./assets/images/file-text.svg";
import RightRectangle from "./assets/images/rightrec.png";
import LeftRectangle from "./assets/images/leftrec.png";
import Addexperience from "./Addexperience";
import Addeducate from "./Addeducate";
import EditPersonalInfo from "./EditPersonalinfo";
const UserInfo = () => {
  const [AddExShowing, setAddExShowing] = useState(false);
  const [AddeducateShowing, setAddeducateShowing] = useState(false);
  const [EditPersonalInfoShowing, setEditPersonalInfoShowing] = useState(false);
  const onCancelExperience = (status) => {
    setAddExShowing(status);
  };
  const onCancelEducate = (status) => {
    setAddeducateShowing(status);
  };
  const onCanclePersonalInfo = (status) => {
    setEditPersonalInfoShowing(status);
  };

  const [userInfo, setuserInfo] = useState({
    fullName: "محمد مهدی گل محمدی",
    firstName: "محمد مهدی",
    username: "Golimo99",
    password: "*******",
    nationalNumber: "--",
    dateOfBirth: "--",
    phoneNumber: "0912345678",
    email: "Golimo99@gmail.com",
    address: "قم / خیابان معلم/مرکز ملی نوآوری و خلاقیت اشراق",
    subject: "--",
    livingState: "قم",
    livingCity: "قم",
    marialStatus: "مجرد",
    gender: "مرد",
  });
  return (
    <React.Fragment>
      <div className="userinfo-cont">
        {AddExShowing && <Addexperience cancel={onCancelExperience} />}
        {AddeducateShowing && <Addeducate cancel={onCancelEducate} />}
        {EditPersonalInfoShowing && (
          <EditPersonalInfo cancel={onCanclePersonalInfo} userInfo={userInfo} />
        )}
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
                <i
                  onClick={() => {
                    setEditPersonalInfoShowing(true);
                  }}
                >
                  ویرایش
                </i>
              </header>
              <div className="profile">
                <img src={UserProf} alt="" />
                <div>
                  <h4>{userInfo.fullName}</h4>
                  <p>--</p>
                </div>
              </div>
              <div className="grid1" dir="rtl">
                <div>
                  <p>نام کاربری</p>
                  <p>{userInfo.username}</p>
                </div>
                <div>
                  <p>رمز عبور</p>
                  <p>{userInfo.password}</p>
                </div>
                <div>
                  <p>کد ملی</p>
                  <p>{userInfo.nationalNumber}</p>
                </div>
                <div>
                  <p>تاریخ تولد</p>
                  <p>{userInfo.dateOfBirth}</p>
                </div>
                <div>
                  <p>تلفن همراه</p>
                  <p>{userInfo.phoneNumber}</p>
                </div>
                <div>
                  <p>ایمیل</p>
                  <p>{userInfo.email}</p>
                </div>
                <div className="address">
                  <p>ادرس</p>
                  <p>{userInfo.address}</p>
                </div>
                <div>
                  <p>استان محل سکونت</p>
                  <p>{userInfo.livingState}</p>
                </div>
                <div>
                  <p>شهر محل سکونت</p>
                  <p>{userInfo.livingCity}</p>
                </div>
                <div>
                  <p>وضعیت تاهل</p>
                  <p>{userInfo.marialStatus}</p>
                </div>
                <div>
                  <p>جنسیت</p>
                  <p>{userInfo.gender}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="sec2">
            <div className="skill">
              <header className="hs">
                <h3>مهارت ها</h3>
                <i onClick={() => {}}>ویرایش</i>
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
                <i
                  onClick={() => {
                    setAddExShowing(true);
                    console.log("hi");
                  }}
                >
                  ویرایش
                </i>
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
                <i
                  onClick={() => {
                    setAddeducateShowing(true);
                  }}
                >
                  ویرایش
                </i>
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
