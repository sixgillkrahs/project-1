import { Link } from 'react-router-dom';
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
                        <Link to="/" className="nav-item nav-link active">Trang chủ</Link>
                        <Link to="/about" className="nav-item nav-link">Về chúng tôi</Link>
                        <Link to="service" className="nav-item nav-link">Dịch vụ</Link>
                        <Link to="price" className="nav-item nav-link">Gói</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Khác</Link>                       
                            <div className="dropdown-menu m-0"> <Link to="blog.html" className="dropdown-item">Bảng tin</Link> <Link to="detail.html" className="dropdown-item">Hoạt Động</Link> <Link to="team.html" className="dropdown-item">Đội ngũ chuyên môn</Link> <Link to="testimonial.html" className="dropdown-item">Đánh giá</Link> <Link to="appointment.html" className="dropdown-item">Đặt lịch khám</Link> <Link to="search.html" className="dropdown-item">Tìm kiếm</Link> </div>
                        </div>
                        <Link to="contact" className="nav-item nav-link">Liên hệ</Link>
                        <Link to="signin" className='nav-item nav-link mx-4'>Đăng nhập</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header;