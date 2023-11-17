import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
// import { BiPaint } from "react-icons/bi";

const SectionThree = () => {
  return (
    <div>
      <section id="services" className="main-bg" style={{paddingTop: "100px"}}>
        <Container className="mt-4 pt-4" style={{ height: "85vh" }}>
          <h1 className="text-center" style={{color:"#0b0b0b"}}>Services</h1>
          <Row className="mt-5">
            <div className="col-lg-4">
              <Card>
                <div style={{ color: "#2fa56e" }}>
                  <FaCode style={{ height: "40px", width: "40px" }} />
                </div>
                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn">Read More</Button>
                </div>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <div style={{ color: "#2fa56e" }}>
                  <FaCode style={{ height: "40px", width: "40px" }} />
                </div>
                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn">Read More</Button>
                </div>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <div style={{ color: "#2fa56e" }}>
                  <FaCode style={{ height: "40px", width: "40px" }} />
                </div>
                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn">Read More</Button>
                </div>
              </Card>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SectionThree;
