import React, { useState } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/project_detail.css";
import SliderProjectCard from "../components/UI/SliderProjectCard";
import ProjectCard from "../components/UI/ProjectCard";
import projectData from "../assets/data/project";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

function ProjectDetail() {
  const id = useParams();

  var check = true;
  if (id.id === "1") {
    check = false;
  }
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  window.scrollTo(0, 0);

  const projects = projectData.find((item) => item.id === id.id);
  const relateItem = projectData.filter(
    (item) => item.relate === projects.relate && item.id !== id.id
  );

  var settings2 = {
    className: "center",
    focusOnSelect: true,
    infinite: check,
    centerPadding: "10px",
    slidesToShow: 4,
    swipeToSlide: true,
    beforeChange: (oldIndex, newIndex) => {
      //setTimeout(() => {
      const sample = document.querySelectorAll(".slider-img2");

      for (let i = 0; i < sample.length; i++) {
        sample[i].classList.remove("content_animation");
        console.log("beforeChange", oldIndex, newIndex);
      }

      //});
    },
    afterChange: (index) => {
      //setTimeout(() => {
      const sample = document.querySelector(".slick-current .slider-img2");
      sample.classList.add("content_animation");
      console.log("afterChange", index);
      //});
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var settings = {
    fade: true,
    centerPadding: "10px",
    arrows: false,
  };
  return (
    <div className="container detail-container">
      <div>
        <Breadcrumb className="bread-detail">
          <Breadcrumb.Item href="/home">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item href="/project">Dự án</Breadcrumb.Item>
          <Breadcrumb.Item active>Chi tiết dự án</Breadcrumb.Item>
        </Breadcrumb>
        <hr className="line-loc-detail"></hr>
      </div>
      <div className="row row-1">
        <div className="col-sm-12">
          <h2 className="title-detail-loc">
            {projects.title} | {projects.date}
          </h2>
          <Slider
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            className="p-2 mt-5"
            {...settings}
          >
            {projects.listURL.map((item) => (
              <SliderProjectCard item={item} index="1"></SliderProjectCard>
            ))}
          </Slider>

          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            className="p-2"
            {...settings2}
          >
            {projects.listURL.map((item, index) => (
              <SliderProjectCard
                item={item}
                index="2"
                current={index}
              ></SliderProjectCard>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-md-7 d-flex field-head div-btn-detail-loc">
          {projects.tag.map((item) => (
            <div className="field-item">{item}</div>
          ))}
        </div>

        <div className="col-md-5 div-btn-detail-loc">
          <Link to={"/project"}>
            <button className="btn-detail-loc btn btn-primary btn-lg">
              <i class="	fa fa-angle-left"></i>
              &nbsp;BACK TO
            </button>
          </Link>
        </div>
      </div>
      <div className="relate-div">
        <span className="relate">RELATED</span>
        <hr className="line-relate"></hr>
        <div className="row m-3">
          {relateItem.map((item, index) => (
            <div lg="4" className="p-3 col-md-4 relate-item" key={index}>
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
