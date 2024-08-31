import React from "react";
import "./css/signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="body">
      <div id="wrapper">
        <div id="formSignUp">
          <h2>WINGMAN MEDICAL CLINIC</h2>
          <h3>ĐĂNG KÝ</h3>
          <h4>NHẬP THÔNG TIN ĐỂ TẠO TÀI KHOẢN</h4>

          <div id="input">
            <label>Email:</label>
            <br />
            <input id="Email" type="text" placeholder="Nhập email của bạn" />
            <br />
            <br />
            <label>Mật khẩu:</label>
            <br />
            <input
              id="Password"
              type="password"
              placeholder="Nhập mật khẩu của bạn"
            />
            <br />
            <br />
            <label>Xác nhận mật khẩu:</label>
            <br />
            <input
              id="cfPassword"
              type="password"
              placeholder="Nhập lại mật khẩu của bạn"
            />
          </div>
          <button>Đăng ký</button>
          <h5>
            Đã có tài khoản ?{" "}
            <Link to="/auth/signin" id="Login">
              {" "}
              Đăng nhập
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Signup;
