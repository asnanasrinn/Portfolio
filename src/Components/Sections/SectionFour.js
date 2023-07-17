import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const SectionFour = () => {
  return (
    <div>
      <section id="portfolio">
        <Container className="" style={{ height: "85vh" }}>
          <h1 className="text-center">Projects</h1>
          <div>
            <Row
              className="d-flex mb-4 mt-4 flex-section-four"
              style={{ justifyContent: "space-around" }}
            >
              <Col md="4">
                <Card className="card-section-four">
                  <div class="content">
                    <div class="content-overlay"></div>
                    <div style={{ backgroundColor: "white" }}>
                      {/* <img class="content-image" src={web1} alt="" /> */}
                    </div>
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">CERTIFICATE</h3>
                      <p class="content-text">
                        Website that offers a list of students, courses, course
                        categories, and supports CRUD operations. create
                        certificates based on the courses that each student has
                        completed.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-section-four">
                  <div class="content">
                    <div class="content-overlay"></div>
                    <div style={{ backgroundColor: "white" }}>
                      {/* <img class="content-image" src={web1} alt="" /> */}
                    </div>
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">EASY GARAGE</h3>
                      <p class="content-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-section-four">
                  <div class="content">
                    <div class="content-overlay"></div>
                    <div style={{ backgroundColor: "white" }}>
                      {/* <img class="content-image" src={web1} alt="" /> */}
                    </div>
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">MULTIMART</h3>
                      <p class="content-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            {/* 2nd row */}
            <Row
              className="d-flex mt-4 flex-section-four"
              style={{ justifyContent: "space-around" }}
            >
              <Col>
                <Card className="card-section-four">
                  <div class="content">
                    <div class="content-overlay"></div>
                    {/* <img class="content-image" src={web4} alt="" /> */}
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">This is a title</h3>
                      <p class="content-text">This is a short description</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-section-four">
                  <div class="content">
                    <div class="content-overlay"></div>
                    {/* <img class="content-image" src={web5} alt="" /> */}
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">This is a title</h3>
                      <p class="content-text">This is a short description</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-section-four">
                  <div class="content">
                    <div class="content-overlay"></div>
                    {/* <img class="content-image" src={web3} alt="" /> */}
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">This is a title</h3>
                      <p class="content-text">This is a short description</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SectionFour;
