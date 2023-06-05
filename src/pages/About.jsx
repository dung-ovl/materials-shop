import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/about.css";
import design from "../assets/images/design.jpg";
import staff from "../assets/images/staff.jpg";
import furniture from "../assets/images/furniture.jpg";
import Helmet from "../components/Helmet/Helmet";
function About() {
  return (
    <Helmet title="Giới thiệu">
      <Container>
        <div className="d-flex justify-content-around align-items-center row">
          <div className="col-md-4">
            <hr id="l1" className="line-header" />
          </div>
          <div className="col-md-4">
            <h1 className="p-2 fw-bold text-center title m-h1">
              NỘI THẤT INWOOD
            </h1>
          </div>
          <div className="col-md-4">
            <hr id="l2" className="line-header" />
          </div>
        </div>
        <Container>

          <div className="py-5 align-items-center row bound">

            <div className="col-md-7">
              <div className="span-animation">
                <h2 >
                  TẦM NHÌN CỦA CHÚNG TÔI
                </h2>
                <h2 >
                  TẦM NHÌN CỦA CHÚNG TÔI
                </h2>
              </div>
              <hr className="line-content" />
              <p className="text-justify">
                Công ty nội thất của chúng tôi đã xây dựng được uy tín vững chắc ở
                thị trường trong nước và mong muốn tiến bước ra thị trường quốc tế
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid m-img"
                src={design}
              />
            </div>
          </div>
          <div className="py-5 align-items-center row bound">
            <div className="col-md-5 col1">
              <img
                className="img-fluid m-img"
                src={furniture}
              />
            </div>
            <div className="col-md-7 col2">
              <div className="text-end span-animation">

                <h2 >
                  MỤC TIÊU CỦA CHÚNG TÔI
                </h2>
                <h2 >
                  MỤC TIÊU CỦA CHÚNG TÔI
                </h2>

              </div>
              <hr className="line-content align-start" />
              <p className="text-justify">
                Chất lượng hàng đầu trong tầm giá, chúng tôi đảm bảo mang đến
                cho khách hàng trải nghiệm sản phẩm tuyệt vời nhất
              </p>
            </div>
          </div>
          <div className="py-5 align-items-center row bound">
            <div className="col-md-7">
              <div className="span-animation">
                <h2 >
                  ĐỘI NGŨ NHÂN VIÊN
                </h2>
                <h2>
                  ĐỘI NGŨ NHÂN VIÊN
                </h2>

              </div>
              <hr className="line-content" />
              <p className="text-justify">
                Đa dạng về phong cách và mẫu mã, đội ngũ tư vấn luôn
                mong muốn mang đến cho bạn một sản phẩm tổng hợp hài hòa với
                kiến trúc ngôi nhà của bạn
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid m-img"
                src={staff}
              />
            </div>
          </div>
        </Container>
      </Container>
    </Helmet>
  );
}

export default About;
