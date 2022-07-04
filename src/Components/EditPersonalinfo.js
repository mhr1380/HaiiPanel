import "./EditPersonalInfo.css";
import UserProf from "./assets/images/useprof.png";
import { useRef } from "react";
import { useState } from "react";
import camera from "./assets/images/camera.png";
import userEvent from "@testing-library/user-event";
import { DatePicker } from "jalali-react-datepicker";
import React from "react";

const EditPersonalInfo = (props) => {
  const [firstName, setfirstName] = useState(props.userInfo.firstName);
  const [lastName, setlastName] = useState(props.userInfo.lastName);
  const [subject, setsubject] = useState(props.userInfo.subject);
  const [userName, setuserName] = useState(props.userInfo.userName);
  const [nationalNumber, setnationalNumber] = useState(
    props.userInfo.nationalNumber
  );
  const [dateOfBirth, setdateOfBirth] = useState(props.userInfo.dateOfBirth);
  const [phoneNumber, setphoneNumber] = useState(props.userInfo.phoneNumber);
  const [email, setemail] = useState(props.userInfo.email);
  const [address, setaddress] = useState(props.userInfo.address);
  const [livingState, setlivingState] = useState(props.userInfo.livingState);
  const [livingCity, setlivingCity] = useState(props.userInfo.livingCity);
  const [marialStatus, setmarialStatus] = useState(props.userInfo.marialStatus);
  const [gender, setgender] = useState(props.userInfo.gender);

  return (
    <div className="divInfo">
      <div className="wigetPop" id="editInfo" dir="rtl">
        <header className="headerEditInfo">
          <p>ویرایش اطلاعات فردی</p>
        </header>
        <div className="prof-cont">
          <img src={UserProf} alt="" className="editInfoProfile" />
          <div className="hover-effect">
            <img src={camera} className="inner-camera" />
          </div>
        </div>
        <div className="gridEditInfo">
          <div className="itemGridEditInfo ItemGridEditInfoName">
            <p>نام</p>
            <input
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="itemGridEditInfo ItemGridEditInfoFamily">
            <p>نام خوانوادگی</p>
            <input
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="itemGridEditInfo ItemGridEditInfoJob">
            <p>عنوان (مثال : طراح گرافیک)</p>
            <input
              value={subject}
              onChange={(e) => {
                setsubject(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="itemGridEditInfo ItemGridEditInfoUserName">
            <p>نام کاربری</p>
            <input
              value={userName}
              onChange={(e) => {
                setuserName(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="itemGridEditInfo ItemGridEditInfoNationalCode">
            <p>کد ملی</p>
            <input
              value={nationalNumber}
              onChange={(e) => {
                setnationalNumber(e.target.value);
              }}
              type="text"
            />
          </div>
          <DatePicker />
          <div className="itemGridEditInfo ItemGridEditInfoBirth">
            <p>تاریخ تولد</p>
            <input
              value={dateOfBirth}
              onChange={(e) => {
                setdateOfBirth(e.target.value);
              }}
              type="datetime-local"
            />
          </div>
          <div className="itemGridEditInfo itemGridEditInfoPhoneNumber">
            <p>تلفن همراه</p>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="itemGridEditInfo itemGridEditInfoEmail">
            <p>ایمیل</p>
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="itemGridEditInfo itemGridEditInfoAddress">
            <p>ادرس</p>
            <input
              value={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="itemGridEditInfo itemGridEditInfoState">
            <p>استان</p>
            <select
              value={livingState}
              onChange={(e) => {
                setlivingState(e.target.value);
              }}
            >
              <option>قم</option>
            </select>
          </div>
          <div className="itemGridEditInfo itemGridEditInfoCity">
            <p>شهر</p>
            <select
              value={livingCity}
              onChange={(e) => {
                setlivingCity(e.target.value);
              }}
            >
              <option>قم</option>
            </select>
          </div>
          <div className="itemGridEditInfo itemGridEditInfoMaritalStatus">
            <p>وضیعت تاهل</p>
            <select
              value={marialStatus}
              onChange={(e) => {
                setmarialStatus(e.target.value);
              }}
            >
              <option>مجرد</option>
              <option>متاهل</option>
            </select>
          </div>
          <div className="itemGridEditInfo itemGridEditInfoGender">
            <p>جنسیت</p>
            <select
              value={gender}
              onChange={(e) => {
                setgender(e.target.value);
              }}
            >
              <option>مرد</option>
              <option>زن</option>
            </select>
          </div>
        </div>
        <div className="buttonsEditInfo" dir="ltr">
          <input
            onClick={() => {
              props.setuserInfo({
                firstName,
                lastName,
                username: props.userInfo.username,
                password: props.userInfo.password,
                nationalNumber,
                dateOfBirth,
                phoneNumber,
                email,
                address,
                subject,
                livingState,
                livingCity,
                marialStatus,
                gender,
              });
              props.cancel(false);
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
      </div>
    </div>
  );
};

export default EditPersonalInfo;
