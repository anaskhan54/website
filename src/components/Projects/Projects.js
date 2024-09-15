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
import AanandPC from  "../../Assets/Projects/AanandPC.jpg"
import AanyaPC from "../../Assets/Projects/aanyaPC.png"
import AsjadPC from "../../Assets/Projects/AsjadPC.png"
import DeepakPC from "../../Assets/Projects/DeepakPC.png"
import DEVPC from "../../Assets/Projects/DEVPC.png"
import IshitaPC from "../../Assets/Projects/IshitaPC.png"
import KapishPC from "../../Assets/Projects/KapishPC.png"
import KartikeyPC from "../../Assets/Projects/KartikeyPC.jpeg"
import KeshavPC from "../../Assets/Projects/KeshavPC.png"
import KinjalPC from "../../Assets/Projects/KinjalPC.png"
import KshitizPC from "../../Assets/Projects/KshitizPC.png"
import LishaPC from "../../Assets/Projects/LishaPC.jpg"
import MadhurPC from "../../Assets/Projects/MadhurPC.png"
import NikhilPC from "../../Assets/Projects/NikhilPC.png"
import SaumyaPC from "../../Assets/Projects/SaumyaPC.jpg"
import ShambhaviPC from "../../Assets/Projects/ShambhaviPC.jpg"
import ShoryaPC from "../../Assets/Projects/ShoryaPC.png"
import ShreyanshPC from "../../Assets/Projects/ShreyanshPC.jpg"
import SiddharthPC from "../../Assets/Projects/siddharthPC.png"
import SnehaPC from "../../Assets/Projects/SnehaPC.png"
import TusharPC from "../../Assets/Projects/TusharPC.png"
import UtkarshPC from "../../Assets/Projects/UtkarshPC.png"
import { useTransition } from "react";


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
              imgPath={AanandPC}
              isBlog={false}
              title="Aanand"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AanyaPC}
              isBlog={false}
              title="Aanya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AsjadPC}
              isBlog={false}
              title="Asjad"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={DeepakPC}
              isBlog={false}
              title="Deepak"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={DEVPC}
              isBlog={false}
              title="Dev"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={IshitaPC}
              isBlog={false}
              title="Ishita"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KapishPC}
              isBlog={false}
              title="Kapish"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KartikeyPC}
              isBlog={false}
              title="Kartikey"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KeshavPC}
              isBlog={false}
              title="Keshav"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KinjalPC}
              isBlog={false}
              title="Kinjal"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KshitizPC}
              isBlog={false}
              title="Kshitiz"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={LishaPC}
              isBlog={false}
              title="Lisha"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={MadhurPC}
              isBlog={false}
              title="Madhur"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={NikhilPC}
              isBlog={false}
              title="Nikhil"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={SaumyaPC}
              isBlog={false}
              title="Saumya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ShambhaviPC}
              isBlog={false}
              title="Shaambhavi"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ShoryaPC}
              isBlog={false}
              title="Shorya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ShreyanshPC}
              isBlog={false}
              title="Shreyansh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={SiddharthPC}
              isBlog={false}
              title="Siddharth"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={SnehaPC}
              isBlog={false}
              title="Sneha"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={TusharPC}
              isBlog={false}
              title="Tushar"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={UtkarshPC}
              isBlog={false}
              title="Utakrsh"
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
