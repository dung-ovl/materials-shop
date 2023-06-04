import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/project.css";
import ProjectCard from "../components/UI/ProjectCard";
import projectData from "../assets/data/project";
import { Breadcrumb } from "react-bootstrap";

function Project() {
    return (
        <Container>
            <div>
                <Breadcrumb className="bread">
                    <Breadcrumb.Item href="home">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item active>Dự án</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <hr className="line-loc"></hr>
            <Row className="m-3">
                {projectData.map((item, index) => (
                    <Col lg="4" className="p-3" key={index}>
                        <ProjectCard item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Project;
