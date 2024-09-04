import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a href="index.html" className="navbar-brand"></a>
          <title>Wingman medical clinic</title>
          <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>WINGMAN MEDICAL CLINIC</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
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
              <Link
                to="/auth/signin"
                className={`nav-item nav-link mx-4 ${
                  location.pathname === "/auth/signin" ? "active" : ""
                }`}
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
