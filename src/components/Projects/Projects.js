import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import aakarsh from "../../Assets/Projects/Aakarsh Singh.jpeg"
import anas from "../../Assets/Projects/ANAS KHAN.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">4th  </strong> Year Members
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Anas Khan"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Anas Khan"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Anas Khan"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Anas Khan"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <h1 className="project-heading">
           <strong className="purple">3rd  </strong> Year Members
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Anas Khan"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Anas Khan"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Anas Khan"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Anas Khan"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
