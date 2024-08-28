import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <a href="index.html" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>WINGMAN MEDICAL CLINIC</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Trang chủ</a>
                        <a href="about.html" className="nav-item nav-link">Về chúng tôi</a>
                        <a href="service.html" className="nav-item nav-link">Dịch vụ</a>
                        <a href="price.html" className="nav-item nav-link">Gói</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Khác</a>
                            
                            <div className="dropdown-menu m-0"> <a href="blog.html" className="dropdown-item">Bảng tin</a> <a href="detail.html" className="dropdown-item">Hoạt Động</a> <a href="team.html" className="dropdown-item">Đội ngũ chuyên môn</a> <a href="testimonial.html" className="dropdown-item">Đánh giá</a> <a href="appointment.html" className="dropdown-item">Đặt lịch khám</a> <a href="search.html" className="dropdown-item">Tìm kiếm</a> </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Liên hệ</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header;