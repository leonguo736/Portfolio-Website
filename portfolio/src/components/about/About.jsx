import React from "react"

const About = () => {
    return (
        <section className="about" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hey! I'm Leon`}<span className="wrap"></span></h1>
                        <p>I'm Leon, a 4th-year at UBC studying Computer Engineering. While I'm not working on projects or studying for my 
                           next exam, I enjoy working out, skateboarding and binge watching shows with my friends.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About