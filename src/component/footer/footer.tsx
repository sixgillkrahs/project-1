import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
<div className="row g-5">
      <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Thông tin liên hệ&nbsp;</h4>
                <p className="mb-4">Thời gian làm việc 24/7 tất cả các ngày trong tuần&nbsp; &nbsp;</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>&nbsp;Số 2 Cầu Giấy</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>contact@amcjsc.edu.vn</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>0968637883</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Truy cập nhanh&nbsp;</h4>
                <div className="d-flex flex-column justify-content-start"> 
                <Link
                to="/"
                className={`nav-item nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Trang chủ
              </Link>                  
              <Link
                to="/about"
                className={`nav-item nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                Về chúng tôi
              </Link>              
              <Link
                to="/service"
                className={`nav-item nav-link ${
                  location.pathname === "/service" ? "active" : ""
                }`}
              >
                Dịch vụ
              </Link>
              <Link
                to="/price"
                className={`nav-item nav-link ${
                  location.pathname === "/price" ? "active" : ""
                }`}
              >
                Gói
              </Link>              
              <Link
                to="/contact"
                className={`nav-item nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Liên hệ
              </Link>              
               </div>
              </div>  
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">&copy; <a className="text-primary" href="#">2024 bản quyền thuộc về</a>&nbsp;Wingman Medical Clinic</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0"><a className="text-primary" href="https://htmlcodex.com">&nbsp;</a></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer