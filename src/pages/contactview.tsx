import React from 'react'

const Contactview = () => {
  return (
    <>
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Câu hỏi của bạn?</h5>
                <h1 className="display-4">Hãy liên hệ ngay với chúng tôi</h1>
            </div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width:"100px", height:"70px", transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-location-arrow text-white" style={{transform: "rotate(15deg)"}}></i>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{width:"30px", color:"white"}}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>                        </div>
                        <h6 className="mb-0">Toà The Nine, Số 9 Phạm Văn Đồng, Cầu Giấy Hà Nội</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width:"100px", height:"70px", transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-phone text-white" style={{transform: "rotate(15deg)"}}></i>
                        </div>
                        <h6 className="mb-0">0888.262.115</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width:"100px", height:"70px", transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-envelope-open text-white" style={{transform: "rotate(15deg)"}}></i>
                        </div>
                        <h6 className="mb-0">contact@amcjsc.edu.vn</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{height: "500px"}}>
                    <div className="position-relative h-100">
                        <iframe className="position-relative w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12435.182427453297!2d105.77743108589141!3d21.04101388391907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455a4ca6eaaa5%3A0xa14c50508ad467b4!2sTHE%20NINE%20TOWER!5e0!3m2!1svi!2s!4v1690615331340!5m2!1svi!2s"
                            frameBorder="0" style={{border: "0"}} allowFullScreen aria-hidden="false"
                            tabIndex={parseInt("0")}></iframe>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center position-relative" style={{marginTop: "-200px", zIndex:"1"}}>
                <div className="col-lg-8">
                    <div className="bg-white rounded p-5 m-5 mb-0">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Họ và tên" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Chủ đề" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" rows={parseInt("5")} placeholder="Câu hỏi"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Gửi câu hỏi</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Contactview