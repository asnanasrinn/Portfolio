import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../../Components/images/avatar-img.png";

const SectionTwo = () => {
  return (
    <section id="about">
      <Container
        className="mt-4 pt-4"
        style={{ height: "85vh" }}
      >
        <h1 className="text-center">About Me</h1>
        <Row className="mt-5">
          <div className="col-lg-4">
            <img
              src={image}
              style={{ width: "250px", height: "250px" }}
              alt=""
            />
          </div>
          <div className="col-lg-8">
            <p>
              Designing Is My Passion Lorem ipsum dolor sit amet, consecteturadipisicing elit. Deserunt, porro veritatis pariatur,
              nobisvoluptatem ipsum repellat nemo quisquam error reprehenderitrecusandae odio vel, suscipit. Voluptas mollitia
              accusantiumquaerat aspernatur labore dolorum placeat ipsa sint namperspiciatis eos consectetur veritatis debitis,
              quis aliquam undesed maiores sit! Hic molestiae optio iste iure earum amet nostrumquaerat facere quae veniam maiores
              harum iusto aperiam velinventore
            </p>
            <Button>Download CV</Button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default SectionTwo;
