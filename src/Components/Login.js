import React from "react";
import "./Login.css";
import Logo from "./assets/images/haii.png";
import RightRectangle from "./assets/images/rightrec.png";
import LeftRectangle from "./assets/images/leftrec.png";
const Login = () => {
  return (
    <React.Fragment>
      <div className="login-cont">
        <div className="page grid-center">
          <div className="right-square-container">
            <img src={RightRectangle} alt="" />
          </div>
          <div className="left-square-container">
            <img src={LeftRectangle} alt="" />
          </div>
          <div className="login-container flex-column">
            <div className="logo-container flex-column">
              <img src={Logo} alt="haii logo" />
              <p className="margin-top-10">Panel.HAII.Media</p>
              <p className="margin-top-10">پنل مدیریت موسسه هنری رسانه‌ای حی</p>
            </div>
            <div className="form-container flex-column">
              <div className="form-container-inner">
                <div className="login-input">
                  <input type="text" placeholder="نام کاربری" />
                </div>
                <div className="login-input">
                  <input type="password" placeholder="رمز عبور" />
                </div>

                <button className="login-btn">ورود</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
