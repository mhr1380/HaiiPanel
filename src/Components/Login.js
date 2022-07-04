import React from "react";
import "./Login.css";
import Logo from "./assets/images/haii.png";
import RightRectangle from "./assets/images/rightrec.png";
import LeftRectangle from "./assets/images/leftrec.png";
import user from "./assets/images/user.png";
import key from "./assets/images/key.png";
import eye from "./assets/images/eye.png";
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
                  <img src={user} alt="user-icon" />
                </div>
                <div className="login-input">
                  <input type="password" placeholder="رمز عبور" />
                  <img src={key} alt="key-icon" />
                  <img className="password-eye" src={eye} alt="eye-icon" />
                </div>
                {/* <div
                  
                  className="g-recaptcha"
                  data-sitekey="your_site_key"
                ></div> */}
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
