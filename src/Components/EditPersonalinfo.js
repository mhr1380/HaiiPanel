import "./EditPersonalInfo.css";
import UserProf from "./assets/images/useprof.png";
import { useRef } from "react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
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
        <img src={UserProf} alt="" className="editInfoProfile" />
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
            <input type="text" />
          </div>
          <div className="itemGridEditInfo ItemGridEditInfoJob">
            <p>عنوان (مثال : طراح گرافیک)</p>
            <input type="text" />
          </div>
          <div className="itemGridEditInfo ItemGridEditInfoUserName">
            <p>نام کاربری</p>
            <input type="text" />
          </div>
          <div className="itemGridEditInfo ItemGridEditInfoNationalCode">
            <p>کد ملی</p>
            <input type="text" />
          </div>
          <div className="itemGridEditInfo ItemGridEditInfoBirth">
            <p>تاریخ تولد</p>
            <input type="datetime-local" />
          </div>
          <div className="itemGridEditInfo itemGridEditInfoPhoneNumber">
            <p>تلفن همراه</p>
            <input type="text" />
          </div>
          <div className="itemGridEditInfo itemGridEditInfoEmail">
            <p>ایمیل</p>
            <input type="text" />
          </div>
          <div className="itemGridEditInfo itemGridEditInfoAddress">
            <p>ادرس</p>
            <input type="text" />
          </div>
          <div className="itemGridEditInfo itemGridEditInfoState">
            <p>استان</p>
            <select>
              <option>قم</option>
            </select>
          </div>
          <div className="itemGridEditInfo itemGridEditInfoCity">
            <p>شهر</p>
            <select>
              <option>قم</option>
            </select>
          </div>
          <div className="itemGridEditInfo itemGridEditInfoMaritalStatus">
            <p>وضیعت تاهل</p>
            <select>
              <option>مجرد</option>
            </select>
          </div>
          <div className="itemGridEditInfo itemGridEditInfoGender">
            <p>جنسیت</p>
            <select>
              <option>مرد</option>
            </select>
          </div>
        </div>
        <div className="buttonsEditInfo" dir="ltr">
          <input type="button" value="ذخیره" />
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
