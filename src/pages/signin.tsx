import React from 'react'
import './css/signin.css'

const Signin = () => {
  return (
    <>
         <div id="wrapper">
                <div id="form">
                    <h2>WINGMAN MEDICAL CLINIC</h2>
                    <h3>ĐĂNG NHẬP</h3>
                    <h4>NHẬP THÔNG TIN CỦA BẠN ĐỂ ĐĂNG NHẬP</h4>

                    <div id="input">
                        <label>Email:</label>
                        <br />
                        <br />
                        <input type="text" id="email" placeholder="Nhập email của bạn" />
                        <br />
                        <br />
                        <label >Mật khẩu: </label>
                        <br />
                        <br />
                        <input type="password" id="password" placeholder="Nhập mật khẩu của bạn" />
                    </div>
                    <button id="signInbtn">Đăng nhập</button>
                    <h5>Bạn chưa có tài khoản ? <a href="/Signup" id="Signup">  Đăng kí</a></h5>
                </div>
            </div>
    </>
  )
}

export default Signin