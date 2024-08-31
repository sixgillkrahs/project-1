import { useEffect } from "react";
import $ from 'jquery'





const HomeView = () => {
    useEffect(() => {
        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            });
        }); 
    }, []);
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
                          <img className="position-absolute w-100 h-100 rounded" src="/src/assets/img/about.jpg" style={{objectFit:"cover"}}/>
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
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width: "30px"}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                                  <h6 className="mb-0">Đào tạo<small className="d-block text-primary">Học hỏi, Đổi mới</small></h6>
                              </div>
                          </div>
                          <div className="col-sm-3 col-6">
                              <div className="bg-light text-center rounded-circle py-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width: "30px"}}><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 160.4c0 35.3 28.7 64 64 64l320.4 0c35.5 0 64.2-28.8 64-64.3l-.7-160.2 32 0zM256 208c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"/></svg>
                                  <h6 className="mb-0">Y học Gia Đình<small className="d-block text-primary">Tận tâm, Đồng hành</small></h6>
                              </div>
                          </div>
                          <div className="col-sm-3 col-6">
                              <div className="bg-light text-center rounded-circle py-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "30px"}}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                                  <h6 className="mb-0">Nghiên cứu khoa học<small className="d-block text-primary">Đa ngành, thực chứng</small></h6>
                              </div>
                          </div>
                          <div className="col-sm-3 col-6">
                              <div className="bg-light text-center rounded-circle py-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "30px"}}><path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"/></svg>
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
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width: "45px"}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                          </div>
                          <h4 className="mb-3">Đào tạo</h4>
                          <p className="m-0">Khác với thông thường, chúng tôi đào tạo nhân lực trước khi thành lập 2 năm, nhằm đảm bảo trình độ chuyên môn, cách vận hành y tế và khả năng thấu hiểu bệnh nhân.</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width: "45px"}}><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 160.4c0 35.3 28.7 64 64 64l320.4 0c35.5 0 64.2-28.8 64-64.3l-.7-160.2 32 0zM256 208c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"/></svg>                          
                          </div>
                          <h4 className="mb-3">Y học Gia Đình</h4>
                          <p className="m-0">Bác sĩ gia đình là người giữ sức khoẻ của mỗi bệnh nhân luôn ở trạng thái tốt nhất để họ vui sống và làm việc. Đồng hành cùng bệnh nhân như một thành viên trong gia đình thực sự</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "45px"}}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>                          </div>
                          <h4 className="mb-3">Nghiên cứu khoa học</h4>
                          <p className="m-0">Nghiên cứu công nghệ kỹ thuật mới và y học thực chứng, nhằm đem đến những phương pháp điều trị và quản lý bệnh nhân chuẩn khoa học</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "45px"}}><path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"/></svg>                          </div>
                          <h4 className="mb-3">Kết nối Quốc tế</h4>
                          <p className="m-0">Chúng tôi liên kết với các trung tâm y tế lớn nhất của Mỹ, Đài Loan, Nhật Bản... để tạo thành mạng lưới y học toàn cầu</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width: "45px"}}><path d="M64 144c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112-96 0 0-112zM0 144L0 368c0 61.9 50.1 112 112 112s112-50.1 112-112l0-178.4c1.8 19.1 8.2 38 19.8 54.8L372.3 431.7c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 113.3C391.8 61.5 321.9 49 271.3 85.2c-28 20-44.3 50.8-47.3 83l0-24.2c0-61.9-50.1-112-112-112S0 82.1 0 144zm296.6 64.2c-16-23.3-10-55.3 11.9-71c21.2-15.1 50.5-10.3 66 12.2l67 97.6L361.6 303l-65-94.8zM491 407.7c-.8 .6-1.6 1.1-2.4 1.6l4-2.8c-.5 .4-1 .8-1.6 1.2z"/></svg>                          </div>
                          <h4 className="mb-3">Dược- Mỹ phẩm&nbsp;</h4>
                          <p className="m-0">Cung cấp các thuốc chuẩn GPP, các dòng mỹ phẩm chính hãng, tư vấn hỗ trợ sử dụng thuốc chuẩn quốc tế</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="service-icon mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{width: "45px"}}><path d="M483.2 9.6L524 64l92 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-104 0c-7.6 0-14.7-3.6-19.2-9.6L468.7 70.3l-47 99.9c-3.7 7.8-11.3 13.1-19.9 13.7s-16.9-3.4-21.7-10.6L339.2 112 216 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l136 0c8 0 15.5 4 20 10.7l24.4 36.6 45.9-97.5C445.9 6.2 453.2 1 461.6 .1s16.6 2.7 21.6 9.5zM320 160l12.7 0 20.7 31.1c11.2 16.8 30.6 26.3 50.7 24.8s37.9-13.7 46.5-32L461.9 160l82.1 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-224 0-32 0L64 448l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64s32 14.3 32 32l0 256 224 0 0-160c0-17.7 14.3-32 32-32zm-144 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>                          </div>
                          <h4 className="mb-3">Cận lâm sàng</h4>
                          <p className="m-0">Đáp ứng nhu cầu từ xét nghiệm cơ bản đến chuyên sâu. Liên kết với các trung tâm xét nghiệm lớn nhất trong nước</p>
                          <a className="btn btn-lg btn-primary rounded-pill" href="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>                          </a>
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
                                          <option value="3">Bác sĩ Nguyễn Hoàng Giang</option>
                                          <option value="4">Bác sĩ Nguyễn Huy Toàn</option>
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
                          <img className="img-fluid rounded-top" src="/src/assets/img/price-1.jpg" alt=""/>
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
                          <img className="img-fluid rounded-top" src="/src/assets/img/price-2.jpg" alt=""/>
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
                          <img className="img-fluid rounded-top" src="/src/assets/img/price-3.jpg" alt=""/>
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
                          <img className="img-fluid rounded-top" src="/src/assets/img/price-4.jpg" alt=""/>
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
                      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="/src/assets/img/BSPhanAnh.jpg" style={{objectFit:"cover"}}/></div>
                      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                        <div className="mt-auto p-4">
                          <h3>Tiến sĩ, Bác sĩ Nguyễn Phan Anh</h3>
                          <h6 className="fw-normal fst-italic text-primary mb-4">Giảng Viên Y Học Gia Đình, Hoa Kỳ</h6>
                          <p className="m-0">Tiến sĩ di truyền học, USA. Thạc sĩ quản lý hệ thống y tế, USA. Bác sĩ Phụ Trách Chuyên Môn-Family Medicine-Washington, USA. Giám Đốc Y Tế-FPT Healthcare, Vietnam. Chủ Tịch HĐQT | CEO - American Medical Clinic, Vietnam. Chủ Tịch HĐQT | CEO United Global Medical, Vietnam.
</p>
                        </div>
                      </div>
                    </div>
                  </div>
  <div className="team-item">
    <div className="row g-0 bg-light rounded overflow-hidden">
      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="/src/assets/img/BSGiang.jpg" style={{objectFit:"cover"}}/> </div>
      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
        <div className="mt-auto p-4">
          <h3>Bác sĩ Nguyễn Hoàng Giang</h3>
          <h6 className="fw-normal fst-italic text-primary mb-4">Nội Khoa</h6>
          <p className="m-0">Kinh nghiệm quản lý bệnh nhân theo mô hình Y học Gia Đình Hoa Kỳ, quản lý và đào tạo các bác sĩ thực hành, quản lý xây dựng phòng khám và lĩnh vực chăm sóc tại nhà</p>
        </div>
      </div>
    </div>
  </div>
  <div className="team-item">
    <div className="row g-0 bg-light rounded overflow-hidden">
      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="/src/assets/img/BSCuong.jpg" style={{objectFit:"cover"}}/> </div>
      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
        <div className="mt-auto p-4">
          <h3>Bác sĩ Nguyễn Đức Cường</h3>
          <h6 className="fw-normal fst-italic text-primary mb-4">Ngoại khoa-Tai mũi họng</h6>
          <p className="m-0">Kinh nghiệm quản lý bệnh nhân theo mô hình Y học Gia Đình Hoa Kỳ và xây dựng quản lý phần mềm bệnh viện HIS, bệnh án điện tử EMR, quản lý dược</p>
        </div>
      </div>
    </div>
  </div>
  <div className="team-item">
    <div className="row g-0 bg-light rounded overflow-hidden">
      <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="/src/assets/img/BSThuy.jpg" style={{objectFit:"cover"}}/> </div>
      <div className="col-12 col-sm-7 h-100 d-flex flex-column">
        <div className="mt-auto p-4">
          <h3>Bác sĩ Hoàng Thị Ngọc Thuỳ</h3>
          <h6 className="fw-normal fst-italic text-primary mb-4">Bác sĩ nội khoa</h6>
          <p className="m-0">Kinh nghiệm quản lý bệnh nhân theoo mô hình Y học Gia Đình Hoa Kỳ và xây dựng quản lý quy trình khám chữa bệnh cho phòng khám và khoa nội trú</p>
        </div>
      </div>
    </div>
  </div>
    <div className="team-item">
     <div className="row g-0 bg-light rounded overflow-hidden">
        <div className="col-12 col-sm-5 h-100"> <img className="img-fluid h-100" src="/src/assets/img/BSToan.jpg" style={{objectFit:"cover"}}/></div>
        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
            <div className="mt-auto p-4">
            <h3>Bác sĩ Nguyễn Huy Toàn</h3>
            <h6 className="fw-normal fst-italic text-primary mb-4">Nội Khoa</h6>
            <p className="m-0">Kinh nghiệm quản lý bệnh nhân theo mô hình Y học Gia Đình Hoa Kỳ và tổ chức quản lý quy trình cho lĩnh vực khám bệnh cộng đồng</p>
       </div>
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
                          <option value="1">Số 2 đường Cầu Giấy, quận Cầu Giấy, Hà Nội</option>
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
                                  <img className="img-fluid rounded-circle mx-auto" src="/src/assets/img/Khatvong.jpg" alt="" style={{width:"120px"}}/>
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
                                  <img className="img-fluid rounded-circle mx-auto" src="/src/assets/img/BN Nam .jpg" alt="" style={{width:"120px"}}/>
                                  <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                                  </div>
                              </div>
                              <p className="fs-4 fw-normal">Trước khi gặp bác sĩ Phan Anh anh bị Đái tháo đường tuyp 2. tình trạng cũng căng thẳng. Sau 4 tháng làm việc cùng bác sĩ Phan Anh thì sức khoẻ anh đã cải thiện tương đối, các chỉ số từ HbA1C, men gan, chức năng thận đều được cải thiện ngoài mức mong đợi.Thời gian tới anh vẫn tiếp tục nhờ bác sĩ Phan Anh theo dõi và điều trị cho anh tiếp.</p>
                              <hr className="w-25 mx-auto"/>
                              <h3>Nguyễn Hoàng Nam, 42 tuổi, Hà Nội</h3>
                              <h6 className="fw-normal text-primary mb-3">Đái tháo đường, suy thận, rối loạn mỡ máu</h6>
                          </div>
                          <div className="testimonial-item text-center">
                              <div className="position-relative mb-5">
                                  <img className="img-fluid rounded-circle mx-auto" src="/src/assets/img/BN Bo.jpg" alt=""style={{width:"120px"}} />
                                  <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                                  </div>
                              </div>
                              <p className="fs-4 fw-normal">Tôi bị đột quỵ 2 lần. Lúc mới biết tôi rất hoang mang và sợ. Rất may được bác sĩ phát hiện đúng lúc và điều trị giúp tôi hồi phục trở lại. Tôi vẫn khoẻ mạnh và sinh hoạt bình thường.Gặp được các bác sĩ là duyên và cũng là may mắn của tôi.</p>
                              <hr className="w-25 mx-auto"/>
                              <h3>Lê Văn Bộ, 51 tuổi, Hà Nội</h3>
                              <h6 className="fw-normal text-primary mb-3">Đột quỵ, tăng huyết áp</h6>
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
                          <img className="img-fluid w-100" src="/src/assets/img/Stroke 1.png" alt=""/>
                          <div className="p-4">
                              <a className="h3 d-block mb-3" href="">CÁCH PHÒNG BỆNH ĐỘT QUỴ - Lời khuyên của bác sĩ </a>
                              <p className="m-0">Đột quỵ là tình trạng não bộ bị tổn thương do nhồi máu não hoặc xuất huyết não, để lại di chứng nặng nề, thậm chí gây ra tử vong cho người bệnh. Phòng ngừa đột quỵ tiên phát theo khuyến cáo Hội Tim mạch Hoa kỳ (AHA) và Hội Đột quỵ Hoa Kỳ (ASA) như sau... </p>
                          </div>
                          <div className="d-flex justify-content-between border-top p-4">
                              <div className="d-flex align-items-center">
                                  <img className="rounded-circle me-2" src="/src/assets/img/iconBSThuy.jpg" width="25" height="25" alt=""/>
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
                          <img className="img-fluid w-100" src="/src/assets/img/THA chi dung thuoc la khong du.jpg" alt=""/>
                          <div className="p-4">
                              <a className="h3 d-block mb-3" href="">BỆNH TĂNG HUYẾT ÁP CHỈ DÙNG THUỐC LÀ KHÔNG ĐỦ</a>
                              <p className="m-0">Nếu bị huyết áp cao, mọi người thường nghĩ chỉ cần đi khám và dùng thuốc hạ huyết áp là đủ. Nhưng lối sống đóng một vai trò vô cùng quan trọng trong việc điều trị huyết áp cao. Kiểm soát huyết áp bằng lối sống lành mạnh có thể tăng hiệu quả, ngăn ngừa, trì hoãn hoặc giảm nhu cầu dùng thuốc.</p>
                          </div>
                          <div className="d-flex justify-content-between border-top p-4">
                              <div className="d-flex align-items-center">
                                  <img className="rounded-circle me-2" src="/src/assets/img/iconBSToan.jpg" width="25" height="25" alt=""/>
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
                          <img className="img-fluid w-100" src="/src/assets/img/amckhatvong.jpg" alt=""/>
                          <div className="p-4">
                              <a className="h3 d-block mb-3" href="">Hành Trình 2 Năm - Đội Ngũ AMC Đồng Hành Cùng Trại Hè Khát Vọng </a>
                              <p className="m-0">Đội ngũ y tế AMC đã trải qua 2 năm hành trình tuyệt vời đồng hành Trại hè Khát Vọng, một chương trình từ thiện ý nghĩa dành cho trẻ em khó khăn. Những trái tim yêu thương và tâm huyết cháy bỏng của tập thể bác sĩ, điều dưỡng đã tạo nên những kỷ niệm đáng nhớ và những nụ cười hạnh phúc cho từng em nhỏ. </p>
                          </div>
                          <div className="d-flex justify-content-between border-top p-4">
                              <div className="d-flex align-items-center">
                                  <img className="rounded-circle me-2" src="/src/assets/img/iconBSToan.jpg" width="25" height="25" alt=""/>
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