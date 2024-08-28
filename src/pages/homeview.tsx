

const HomeView = () => {
    return (
      <>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
              <div className="row justify-content-start">
                  <div className="col-lg-8 text-center text-lg-start">
                      <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{borderColor:"red"}}>chào mừng đến AMCVN&nbsp;</h5>
                      <h1 className="display-1 text-white mb-md-4">"Nơi chăm sóc đáng tin cậy cho cả gia đình."&nbsp; &nbsp; &nbsp;&nbsp;</h1>
                      <div className="pt-2">
                          <a href="" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Tìm bác sĩ&nbsp;&nbsp;</a>
                          <a href="" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Đặt lịch khám&nbsp;</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  
      <div className="container-fluid py-5">
          <div className="container">
              <div className="row gx-5">
                  <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:"500px"}}>
                      <div className="position-relative h-100">
                          <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{objectFit:"cover"}}/>
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="mb-4">
                          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Về chúng tôi&nbsp;</h5>
                          <h1 className="display-4">Nơi chăm sóc đáng tin cậy cho cả gia đình </h1>
                      </div>
                      <p>&nbsp;Chúng tôi luôn coi bệnh nhân là trung tâm và sức khoẻ của con người là điều quý giá nhất.&nbsp;Cá thể hoá phác đồ chăm sóc sức khoẻ toàn diện cần sự phối hợp của tất cả chuyên môn và đội ngũ bác sĩ hiểu biết toàn diện, có khả năng chăm sóc bệnh nhân ở bất kỳ giai đoạn nào trong cuộc đời, bất kỳ môi trường nào (nhà ở, trường học, công sở hay trên giường bệnh). &nbsp;&nbsp;</p>
                      <div className="row g-3 pt-3">
                          <div className="col-sm-3 col-6">
                              <div className="bg-light text-center rounded-circle py-4">
                                  <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                                  <h6 className="mb-0">Đào tạo<small className="d-block text-primary">Học hỏi, Đổi mới</small></h6>
                              </div>
                          </div>
                          <div className="col-sm-3 col-6">
                              <div className="bg-light text-center rounded-circle py-4">
                                  <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                                  <h6 className="mb-0">Y học Gia Đình<small className="d-block text-primary">Tận tâm, Đồng hành</small></h6>
                              </div>
                          </div>
                          <div className="col-sm-3 col-6">
                              <div className="bg-light text-center rounded-circle py-4">
                                  <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                  <h6 className="mb-0">Nghiên cứu khoa học<small className="d-block text-primary">Đa ngành, thực chứng</small></h6>
                              </div>
                          </div>
                          <div className="col-sm-3 col-6">
                              <div className="bg-light text-center rounded-circle py-4">
                                  <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                  <h6 className="mb-0">Kết nối quốc tế<small className="d-block text-primary">Kết nối tạo nên sức mạnh</small></h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  
      <div className="container-fluid py-5">
          <div className="container">
              <div className="text-center mx-auto mb-5" style={{maxWidth:"500px"}}>
                  <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Dịch vụ</h5>
                  <h1 className="display-4">Đa chuyên ngành và chuyên nghiệp</h1>
              </div>
              <div className="row g-5">
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                              <i className="fa fa-2x fa-user-md text-white"></i>
                          </div>
                          <h4 className="mb-3">Đào tạo</h4>
                          <p className="m-0">Khác với thông thường, chúng tôi đào tạo nhân lực trước khi thành lập 2 năm, nhằm đảm bảo trình độ chuyên môn, cách vận hành y tế và khả năng thấu hiểu bệnh nhân.</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                              <i className="bi bi-arrow-right"></i>
                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                              <i className="fa fa-2x fa-procedures text-white"></i>
                          </div>
                          <h4 className="mb-3">Y học Gia Đình</h4>
                          <p className="m-0">Bác sĩ gia đình là người giữ sức khoẻ của mỗi bệnh nhân luôn ở trạng thái tốt nhất để họ vui sống và làm việc. Đồng hành cùng bệnh nhân như một thành viên trong gia đình thực sự</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                              <i className="bi bi-arrow-right"></i>
                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                              <i className="fa fa-2x fa-stethoscope text-white"></i>
                          </div>
                          <h4 className="mb-3">Nghiên cứu khoa học</h4>
                          <p className="m-0">Nghiên cứu công nghệ kỹ thuật mới và y học thực chứng, nhằm đem đến những phương pháp điều trị và quản lý bệnh nhân chuẩn khoa học</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                              <i className="bi bi-arrow-right"></i>
                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                              <i className="fa fa-2x fa-ambulance text-white"></i>
                          </div>
                          <h4 className="mb-3">Kết nối Quốc tế</h4>
                          <p className="m-0">Chúng tôi liên kết với các trung tâm y tế lớn nhất của Mỹ, Đài Loan, Nhật Bản... để tạo thành mạng lưới y học toàn cầu</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                              <i className="bi bi-arrow-right"></i>
                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                              <i className="fa fa-2x fa-pills text-white"></i>
                          </div>
                          <h4 className="mb-3">Dược- Mỹ phẩm&nbsp;</h4>
                          <p className="m-0">Cung cấp các thuốc chuẩn GPP, các dòng mỹ phẩm chính hãng, tư vấn hỗ trợ sử dụng thuốc chuẩn quốc tế</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                              <i className="bi bi-arrow-right"></i>
                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                              <i className="fa fa-2x fa-microscope text-white"></i>
                          </div>
                          <h4 className="mb-3">Cận lâm sàng</h4>
                          <p className="m-0">Đáp ứng nhu cầu từ xét nghiệm cơ bản đến chuyên sâu. Liên kết với các trung tâm xét nghiệm lớn nhất trong nước</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                              <i className="bi bi-arrow-right"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  
      <div className="container-fluid bg-primary my-5 py-5">
          <div className="container py-5">
              <div className="row gx-5">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="mb-4">
                          <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Đặt lịch khám&nbsp;</h5>
                          <h1 className="display-4">Hãy chăm sóc sức khoẻ cho bạn và gia đình</h1>
                      </div>
                      <p className="text-white mb-5">Ứng dụng linh hoạt các phương tiện liên lạc, trí tuệ nhân tạo (AI) để khám và quản lý sức khoẻ của bạn dù ở bất cứ đâu. Sử dụng hệ thống bệnh án điện tử Hoa Kỳ, quản lý hồ sơ trọn đời. Kết nối với chác chuyên gia hàng đầu trong nước và ngoài nước để hội chẩn và đưa ra kế hoạch điều trị kịp thời </p>
                      <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="">Đặt khám cùng bác sĩ</a>
                      <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="">Tìm hiểu thêm</a>
                  </div>
                  <div className="col-lg-6">
                      <div className="bg-white text-center rounded p-5">
                          <h1 className="mb-4">Đặt lịch khám</h1>
                          <form>
                              <div className="row g-3">
                                  <div className="col-12 col-sm-6">
                                      <select className="form-select bg-light border-0" style={{height: "55px"}}>
                                          <option selected>Chọn địa điểm</option>
                                          <option value="1">Toà The Nine,Số 9 Phạm Văn Đồng Cầu Giấy Hà Nội</option>
                                          <option value="2">138B Giảng Võ Kim Mã Ba Đình Hà Nội</option>
                                          
                                      </select>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                      <select className="form-select bg-light border-0" style={{height: "55px"}}>
                                          <option selected>Bác sĩ</option>
                                          <option value="1">TS-BS Nguyễn Phan Anh</option>
                                          <option value="2">Bác sĩ Hoàng Thị Ngọc Thuỳ</option>
                                          <option value="3">Bác sĩ Nguyễn Hoàng Giang</option><option value="4">Bác sĩ Nguyễn Huy Toàn</option>
                                          <option value="5">Bác sĩ Nguyễn Đức Cường</option>
                                      </select>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                      <input type="text" className="form-control bg-light border-0" placeholder="Họ và tên" style={{height: "55px"}}/>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                      <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{height: "55px"}}/>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                      <div className="Date" id="date" data-target-input="nearest">
                                          <input type="text"
                                              className="form-control bg-light border-0 datetimepicker-input"
                                              placeholder="Ngày" data-target="#date" data-toggle="datetimepicker" style={{height: "55px"}}/>
                                      </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                      <div className="time" id="time" data-target-input="nearest">
                                          <input type="text"
                                              className="form-control bg-light border-0 datetimepicker-input"
                                              placeholder="Thời gian" data-target="#time" data-toggle="datetimepicker" style={{height: "55px"}}/>
                                      </div>
                                  </div>
                                  <div className="col-12">
                                      <button className="btn btn-primary w-100 py-3" type="submit">Đặt lịch khám</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  
      <div className="container-fluid py-5">
          <div className="container">
              <div className="text-center mx-auto mb-5" style={{maxWidth:"500px"}}>
                  <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Gói thành viên&nbsp;</h5>
                  <h1 className="display-4">Chăm sóc liên tục &amp; <br/>
                  toàn diện</h1>
              </div>
              <div className="owl-carousel price-carousel position-relative" style={{padding: "0 45px 45px 45px"}}>
                  <div className="bg-light rounded text-center">
                      <div className="position-relative">
                          <img className="img-fluid rounded-top" src="img/price-1.jpg" alt=""/>
                          <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: 'rgba(255, 0, 0, 0.5)',}}>
                              <h3 className="text-white">Thành viên 0-18 tuổi</h3>
                              <h1 className="display-4 text-white mb-0">
                                  <small className="align-top fw-normal" style={{fontSize:"22px", lineHeight: "45px"}}></small>12M<small className="align-bottom fw-normal" style={{fontSize:"16", lineHeight:"40px"}}>/năm</small>
                              </h1>
                          </div>
                      </div>
                      <div className="text-center py-5">
                          <p>Tặng 01 lần sử dụng gói khám sức khỏe</p>
                          <p>Miễn phí 01 lần khám với chuyên gia Hoa Kỳ</p>
                          <p>Liên hệ bác sĩ quản lý riêng 24/7</p>
                          <p>Giảm 10% xét nghiệm và cận lâm sàng</p>
                           <p>Giảm 10% thuốc/sản phẩm của hệ thống</p>
                          <a href="" className="btn btn-primary rounded-pill py-3 px-5 my-2">Đăng ký ngay</a>
                      </div>
                  </div>
                  <div className="bg-light rounded text-center">
                      <div className="position-relative">
                          <img className="img-fluid rounded-top" src="img/price-2.jpg" alt=""/>
                          <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: 'rgba(255, 0, 0, 0.5)',}}>
                              <h3 className="text-white">Thành viên 18-65 tuổi</h3>
                              <h1 className="display-4 text-white mb-0">
                                  <small className="align-top fw-normal" style={{fontSize:"22px", lineHeight: "45px"}}></small>18M<small className="align-bottom fw-normal" style={{fontSize:"16", lineHeight:"40px"}}>/năm</small>
                              </h1>
                          </div>
                      </div>
                      <div className="text-center py-5">
                        <p>Tặng 01 lần sử dụng gói khám sức khỏe</p>
                          <p>Miễn phí 01 lần khám với chuyên gia Hoa Kỳ</p>
                          <p>Liên hệ bác sĩ quản lý riêng 24/7</p>
                          <p>Giảm 10% xét nghiệm và cận lâm sàng</p>
                           <p>Giảm 10% thuốc/sản phẩm của hệ thống</p>
                          <a href="" className="btn btn-primary rounded-pill py-3 px-5 my-2">Đăng ký ngay</a>
                      </div>
                  </div>
                  <div className="bg-light rounded text-center">
                      <div className="position-relative">
                          <img className="img-fluid rounded-top" src="img/price-3.jpg" alt=""/>
                          <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: 'rgba(255, 0, 0, 0.5)',}}>
                              <h3 className="text-white">Thành viên trên 65 tuổi</h3>
                              <h1 className="display-4 text-white mb-0">
                                  <small className="align-top fw-normal" style={{fontSize:"22px", lineHeight: "45px"}}></small>20M<small className="align-bottom fw-normal" style={{fontSize:"16", lineHeight:"40px"}}>/năm</small>
                              </h1>
                          </div>
                      </div>
                      <div className="text-center py-5">
                         <p>Tặng 01 lần sử dụng gói khám sức khỏe</p>
                          <p>Miễn phí 01 lần khám với chuyên gia Hoa Kỳ</p>
                          <p>Liên hệ bác sĩ quản lý riêng 24/7</p>
                          <p>Giảm 10% xét nghiệm và cận lâm sàng</p>
                           <p>Giảm 10% thuốc/sản phẩm của hệ thống</p>
                          <a href="" className="btn btn-primary rounded-pill py-3 px-5 my-2">Đăng ký ngay</a>
                      </div>
                  </div>
                  <div className="bg-light rounded text-center">
                      <div className="position-relative">
                          <img className="img-fluid rounded-top" src="img/price-4.jpg" alt=""/>
                          <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: 'rgba(255, 0, 0, 0.5)',}}>
                              <h3 className="text-white">VIPcare</h3>
                              <h1 className="display-4 text-white mb-0">
                                  <small className="align-top fw-normal" style={{fontSize:"22px", lineHeight: "45px"}}>$</small>2.500<small className="align-bottom fw-normal" style={{fontSize:"16", lineHeight:"40px"}}>/năm</small>
                              </h1>
                          </div>
                      </div>
                      <div className="text-center py-5">
                          <p>Trực tiếp Chuyên Gia Hoa Kỳ theo dõi và điều trị</p>
                          <p>Tặng 01 lần sử dụng gói khám sức khỏe</p>
                          <p>Giảm 10% xét nghiệm và cận lâm sàng </p>
                          <p>Giảm 10% thuốc/sản phẩm của hệ thống</p>
                          <p></p>
                          <a href="" className="btn btn-primary rounded-pill py-3 px-5 my-2">Đăng ký ngay</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  
      <div className="container-fluid py-5">
          <div className="container">
              <div className="text-center mx-auto mb-5" style={{maxWidth:"500px"}}>
                  <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Đội ngũ chuyên môn</h5>
                  <h1 className="display-4">Đào tạo theo chương trình Y Học Gia Đình</h1>
              </div>
              <div className="owl-carousel team-carousel position-relative">
  <div className="team-item">
            <div className="row g-0 bg-light rounded overflow-hidden">
                      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="img/BSPhanAnh.jpg" style={{objectFit:"cover"}}/></div>
                      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                        <div className="mt-auto p-4">
                          <h3>Tiến sĩ, Bác sĩ Nguyễn Phan Anh</h3>
                          <h6 className="fw-normal fst-italic text-primary mb-4">Giảng Viên Y Học Gia Đình, Hoa Kỳ</h6>
                          <p className="m-0">Tiến sĩ di truyền học, USA. Thạc sĩ quản lý hệ thống y tế, USA. Bác sĩ Phụ Trách Chuyên Môn-Family Medicine-Washington, USA. Giám Đốc Y Tế-FPT Healthcare, Vietnam. Chủ Tịch HĐQT | CEO - American Medical Clinic, Vietnam. Chủ Tịch HĐQT | CEO United Global Medical, Vietnam.
  </p>
                        </div>
                        <div className="d-flex mt-auto border-top p-4"> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a></div>
                      </div>
                    </div>
                  </div>
  <div className="team-item">
    <div className="row g-0 bg-light rounded overflow-hidden">
      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="img/BSGiang.jpg" style={{objectFit:"cover"}}/> </div>
      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
        <div className="mt-auto p-4">
          <h3>Bác sĩ Nguyễn Hoàng Giang</h3>
          <h6 className="fw-normal fst-italic text-primary mb-4">Nội Khoa</h6>
          <p className="m-0">Kinh nghiệm quản lý bệnh nhân theo mô hình Y học Gia Đình Hoa Kỳ, quản lý và đào tạo các bác sĩ thực hành, quản lý xây dựng phòng khám và lĩnh vực chăm sóc tại nhà</p>
        </div>
        <div className="d-flex mt-auto border-top p-4"> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a> </div>
      </div>
    </div>
  </div>
  <div className="team-item">
    <div className="row g-0 bg-light rounded overflow-hidden">
      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="img/BSCuong.jpg" style={{objectFit:"cover"}}/> </div>
      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
        <div className="mt-auto p-4">
          <h3>Bác sĩ Nguyễn Đức Cường</h3>
          <h6 className="fw-normal fst-italic text-primary mb-4">Ngoại khoa-Tai mũi họng</h6>
          <p className="m-0">Kinh nghiệm quản lý bệnh nhân theo mô hình Y học Gia Đình Hoa Kỳ và xây dựng quản lý phần mềm bệnh viện HIS, bệnh án điện tử EMR, quản lý dược</p>
        </div>
        <div className="d-flex mt-auto border-top p-4"> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a> </div>
      </div>
    </div>
  </div>
  <div className="team-item">
    <div className="row g-0 bg-light rounded overflow-hidden">
      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="img/BSThuy.jpg" style={{objectFit:"cover"}}/> </div>
      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
        <div className="mt-auto p-4">
          <h3>Bác sĩ Hoàng Thị Ngọc Thuỳ</h3>
          <h6 className="fw-normal fst-italic text-primary mb-4">Bác sĩ nội khoa</h6>
          <p className="m-0">Kinh nghiệm quản lý bệnh nhân theoo mô hình Y học Gia Đình Hoa Kỳ và xây dựng quản lý quy trình khám chữa bệnh cho phòng khám và khoa nội trú</p>
        </div>
        <div className="d-flex mt-auto border-top p-4"> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a> </div>
      </div>
    </div>
  </div>
                <div className="team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="img/BSToan.jpg" style={{objectFit:"cover"}}/></div>
                      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                        <div className="mt-auto p-4">
                          <h3>Bác sĩ Nguyễn Huy Toàn</h3>
                          <h6 className="fw-normal fst-italic text-primary mb-4">Nội Khoa</h6>
                          <p className="m-0">Kinh nghiệm quản lý bệnh nhân theo mô hình Y học Gia Đình Hoa Kỳ và tổ chức quản lý quy trình cho lĩnh vực khám bệnh cộng đồng</p>
                        </div>
                        <div className="d-flex mt-auto border-top p-4"> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a></div>
                      </div>
                    </div>
                  </div>
  </div>
          </div>
      </div>
  
  
      <div className="container-fluid bg-primary my-5 py-5">
          <div className="container py-5">
              <div className="text-center mx-auto mb-5" style={{maxWidth:"500px"}}>
                  <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Tìm bác sĩ</h5>
                  <h1 className="display-4 mb-4">Đội ngũ chuyên môn Y học Gia Đình</h1>
                  <h5 className="text-white fw-normal">Đồng hành cùng bệnh nhân như một thành viên trong gia đình thực sự</h5>
              </div>
              <div className="mx-auto" style={{width: "100%", maxWidth: "600px"}}>
                  <div className="input-group">
                      <select className="form-select border-primary w-25" style={{height: "60px"}}>
                          <option selected>Địa điểm</option>
                          <option value="1">Toà The Nine số 9 Phạm Văn Đồng, Cầu Giấy, Hà Nội</option>
                          <option value="2">138B Giảng Võ, Kim Mã, Ba Đình, Hà Nội</option>
                         
                      </select>
                      <input type="text" className="form-control border-primary w-50" placeholder="Keyword"/>
                      <button className="btn btn-dark border-0 w-25">Tìm kiếm</button>
                  </div>
              </div>
          </div>
      </div>
  
  
      <div className="container-fluid py-5">
          <div className="container">
              <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                  <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Đánh giá</h5>
                  <h1 className="display-4">Cảm nhận của quý bệnh nhân và đối tác</h1>
              </div>
              <div className="row justify-content-center">
                  <div className="col-lg-8">
                      <div className="owl-carousel testimonial-carousel">
                          <div className="testimonial-item text-center">
                              <div className="position-relative mb-5">
                                  <img className="img-fluid rounded-circle mx-auto" src="img/Khatvong.jpg" alt=""/>
                                  <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                                  </div>
                              </div>
                              <p className="fs-4 fw-normal">Gia đình Khát Vọng chúng con thật vui mừng và biết ơn khi nhận được sự hỗ trợ của các bác sĩ trong đội ngũ AMC Ban tổ chức chúng con đã được bớt nỗi lo về những ngày mưa nắng các con đau, các con ốm. Xin nguyện cầu mọi điều thiện lành, thành công và hạnh phúc tới đội ngũ AMC.</p>
                              <hr className="w-25 mx-auto"/>
                              <h3>Trại hè Khát Vọng</h3>
                              <h6 className="fw-normal text-primary mb-3">Hành trình gieo những mầm xanh</h6>
                          </div>
                          <div className="testimonial-item text-center">
                              <div className="position-relative mb-5">
                                  <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-2.jpg" alt=""/>
                                  <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                                  </div>
                              </div>
                              <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                              <hr className="w-25 mx-auto"/>
                              <h3>Patient Name</h3>
                              <h6 className="fw-normal text-primary mb-3">Profession</h6>
                          </div>
                          <div className="testimonial-item text-center">
                              <div className="position-relative mb-5">
                                  <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-3.jpg" alt=""/>
                                  <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                                  </div>
                              </div>
                              <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                              <hr className="w-25 mx-auto"/>
                              <h3>Patient Name</h3>
                              <h6 className="fw-normal text-primary mb-3">Profession</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  
      <div className="container-fluid py-5">
          <div className="container">
              <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                  <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Hoạt động</h5>
                  <h1 className="display-4">Các tin tức mới nhất</h1>
              </div>
              <div className="row g-5">
                  <div className="col-xl-4 col-lg-6">
                      <div className="bg-light rounded overflow-hidden">
                          <img className="img-fluid w-100" src="img/Stroke 1.png" alt=""/>
                          <div className="p-4">
                              <a className="h3 d-block mb-3" href="">CÁCH PHÒNG BỆNH ĐỘT QUỴ - Lời khuyên của bác sĩ </a>
                              <p className="m-0">Đột quỵ là tình trạng não bộ bị tổn thương do nhồi máu não hoặc xuất huyết não, để lại di chứng nặng nề, thậm chí gây ra tử vong cho người bệnh. Phòng ngừa đột quỵ tiên phát theo khuyến cáo Hội Tim mạch Hoa kỳ (AHA) và Hội Đột quỵ Hoa Kỳ (ASA) như sau... </p>
                          </div>
                          <div className="d-flex justify-content-between border-top p-4">
                              <div className="d-flex align-items-center">
                                  <img className="rounded-circle me-2" src="img/iconBSThuy.jpg" width="25" height="25" alt=""/>
                                  <small>Bs Hoàng Thị Ngọc Thuỳ</small>
                              </div>
                              <div className="d-flex align-items-center">
                                  <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>1002</small>
                                  <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>36</small>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-6">
                      <div className="bg-light rounded overflow-hidden">
                          <img className="img-fluid w-100" src="img/THA chi dung thuoc la khong du.jpg" alt=""/>
                          <div className="p-4">
                              <a className="h3 d-block mb-3" href="">BỆNH TĂNG HUYẾT ÁP CHỈ DÙNG THUỐC LÀ KHÔNG ĐỦ</a>
                              <p className="m-0">Nếu bị huyết áp cao, mọi người thường nghĩ chỉ cần đi khám và dùng thuốc hạ huyết áp là đủ. Nhưng lối sống đóng một vai trò vô cùng quan trọng trong việc điều trị huyết áp cao. Kiểm soát huyết áp bằng lối sống lành mạnh có thể tăng hiệu quả, ngăn ngừa, trì hoãn hoặc giảm nhu cầu dùng thuốc.</p>
                          </div>
                          <div className="d-flex justify-content-between border-top p-4">
                              <div className="d-flex align-items-center">
                                  <img className="rounded-circle me-2" src="img/iconBSToan.jpg" width="25" height="25" alt=""/>
                                  <small>Bs Nguyễn Huy Toàn</small>
                              </div>
                              <div className="d-flex align-items-center">
                                  <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>2012</small>
                                  <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>98</small>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-6">
                      <div className="bg-light rounded overflow-hidden">
                          <img className="img-fluid w-100" src="img/amckhatvong.jpg" alt=""/>
                          <div className="p-4">
                              <a className="h3 d-block mb-3" href="">Hành Trình 2 Năm - Đội Ngũ AMC Đồng Hành Cùng Trại Hè Khát Vọng </a>
                              <p className="m-0">Đội ngũ y tế AMC đã trải qua 2 năm hành trình tuyệt vời đồng hành Trại hè Khát Vọng, một chương trình từ thiện ý nghĩa dành cho trẻ em khó khăn. Những trái tim yêu thương và tâm huyết cháy bỏng của tập thể bác sĩ, điều dưỡng đã tạo nên những kỷ niệm đáng nhớ và những nụ cười hạnh phúc cho từng em nhỏ. </p>
                          </div>
                          <div className="d-flex justify-content-between border-top p-4">
                              <div className="d-flex align-items-center">
                                  <img className="rounded-circle me-2" src="img/iconBSToan.jpg" width="25" height="25" alt=""/>
                                  <small>BS Nguyễn Huy Toàn</small>
                              </div>
                              <div className="d-flex align-items-center">
                                  <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>1122</small>
                                  <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>31</small>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default HomeView