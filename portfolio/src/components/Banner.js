import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import background from "../assets/img/banner-background-solid.jpg";
import { Clipboard } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Typewriter from 'typewriter-effect';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hey! I'm Leon`}</h1>
                <h4>
                  <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(25)
                        .changeDeleteSpeed(10)
                        .start()
                        .pauseFor(1000)
                        .typeString(
                          "a Computer Engineering Student,"
                        )
                        .pauseFor(1250)
                        .deleteAll()
                        .typeString("a Full-Stack Developer,")
                        .pauseFor(1250)
                        .deleteAll()
                        .typeString("and a Software Engineer.")
                        .pauseFor(1250)
                        .deleteAll();
                    }}
                  />
                </h4>
                <p>
                  My name is Leon Guo, a 4th-year at UBC studying Computer Engineering at UBC. While I'm not working on projects or 
                  studying for my next exam, I enjoy skateboarding, binge watching shows with my friends and playing TFT.
                </p>
                <button onClick={() => console.log('connect')}>Resume <Clipboard size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
