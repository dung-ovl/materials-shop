import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";
import CategoryCard from "../components/UI/CategoryCard";
import serviceData from "../assets/data/servicesData";
import Services from "../services/Services";
import categoryData from "../assets/data/category";
import Clock from "../components/UI/Clock";
import productData from "../assets/data/product";
import Testimonial from "../components/UI/Testimonial";
import rateData from "../assets/data/rate";
import newsImg from "../assets/images/new-01.png";
import UseGetData from "../database/UseGetData";
import ProductListHScroll from "../components/UI/ProductListHScroll";

function Home() {
  const categories = categoryData;
  const services = serviceData;
  const rates = rateData;
  const { data: productsData, loading } = UseGetData("products");
  const [trendingProducts, setTrendingProducts] = useState([]);
  const bestSellProduct =
    productsData[Math.floor(Math.random() * productsData.length)];

  useEffect(() => {
    const trendingProduct = productsData.filter(
      (item) => item.isTrending === true
    );

    setTrendingProducts(trendingProduct);
  }, [productsData]);
  return (
    <Helmet title={"Trang chủ"}>
      <section className="hero-section position-relative">
        <Container>
          <div className="hero-section__bg"></div>
        </Container>
        <Container>
          <Row>
            <Col xl="5" md="8">
              <div className="hero-section__content shadow-lg rounded">
                <h1 className="fw-bold display-6">
                  CHO PHONG CÁCH SỐNG SÁNG TẠO HƠN
                </h1>
                <p className="my-5">Đổi mới sáng tạo, truy cầu sự hoàn hảo</p>
                <Link reloadDocument to="/products">
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="btn btn-primary btn-lg"
                  >
                    Mua hàng
                  </motion.button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="category">
        <Container>
          <Row className="text-center my-5">
            <h1 className="fw-bold display-6">Danh mục sản phẩm</h1>
          </Row>
          <Row className="">
            <Col>
              <Row className="g-3">
                {categories.map((item, index) => (
                  <Col lg="6" key={index}>
                    <Link to="/products" reloadDocument>
                      <CategoryCard item={item} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="text-center">
              <Link to="/products" reloadDocument>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="btn btn-primary btn-lg opacity-100"
                >
                  Xem thêm...
                </motion.button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product-special-discount">
        <Container>
          <Row className="text-center my-5">
            <h1 className="fw-bold display-6">Khuyến mãi đặc biệt</h1>
          </Row>
        </Container>
      </section>
      <section className="product-best-sell">
        <Container>
          <Row className="align-items-center my-5">
            <Col lg="6">
              <div className="product-best-sell__content py-5 p-lg-0">
                <div className="product-best-sell__content--title">
                  <h3 className="fs-3 mb-3">Sản phẩm cực Hot</h3>
                </div>
                <div className="product-best-sell__content--clock my-4">
                  <Clock />
                </div>
                <Link to="/products" reloadDocument>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="btn btn-primary btn-lg opacity-100 fw-bold"
                  >
                    Ghé shop ngay!
                  </motion.button>
                </Link>
              </div>
            </Col>
            <Col lg="6">
              <div className="text-end product-best-sell__img">
                <img
                  src={bestSellProduct?.imgThumb}
                  className="img-fluid "
                  alt=""
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product-trending">
        <Container>
          <Row className="text-center my-5">
            <h1 className="fw-bold display-6">Sản phẩm được ưa thích</h1>
          </Row>
          <Row className="">
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductListHScroll data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className="product-services my-5 py-4">
        <Container>
          <Row className="text-center my-5">
            <h1 className="fw-bold display-6">
              Lợi ích khi mua hàng tại INWOOD
            </h1>
          </Row>
          <Row className="text-center">
            {services.map((item, index) => (
              <Col sx="12" lg="3" md="6" key={index} className="p-4">
                <Services item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="product-testimonial my-5">
        <Container>
          <Row className="text-center my-5">
            <h1 className="product-testimonial__title fw-bold display-6">
              Chúng tôi tự hào
            </h1>
            <h4 className="product-testimonial__subtitle my-3 fw-light">
              Có hơn 6969 khách hàng thân thiết
            </h4>
          </Row>
          <Row className="my-5">
            <Testimonial data={rates} />
          </Row>
        </Container>
      </section>
      <section className="product-news mt-5">
        <Container>
          <Row className="">
            <Col className="p-0" lg="6" sx="12">
              <div className="product-news__img">
                <img src={newsImg} className="img-fluid" alt=""></img>
              </div>
            </Col>
            <Col className="p-0" lg="6" sx="12">
              <div className="product-news__content p-4 p-md-5 h-100">
                <h1 className="display-6 fw-light mb-3">Đăng ký</h1>
                <h1 className="display-5 fw-bold">Nhận tin khuyến mãi</h1>
                <p className="product-news__content--subtitle my-3 fs-5">
                  Những lần giảm giá sốc đang chờ các bạn
                </p>
                <input
                  type="email"
                  className="form-control product-news__content--input border-0 my-4"
                  placeholder="Nhập e-mail tại đây"
                ></input>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="btn btn-primary btn-lg"
                >
                  Đăng ký
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
