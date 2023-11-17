import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const SectionFive = () => {
  return (
    <div>
      <section className="main-bg" id="contact" style={{paddingTop:"100px"}}>
        <div
          style={{
            minHeight: "85vh",
            alignItems: "center",
          }}
        >
          <Container style={{ textAlign: "-webkit-center" }}>
            <div>
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "35px",
                }}
              >
                Contact <span style={{}}>Me!</span>
              </h1>
            </div>

            <div className="section-five-form ">
                   <Form style={{width:"500px"}}>
                    <input type="text" class="form-control form-control-lg" placeholder="Name"/>
                    <input type="email" class="form-control mt-3" placeholder="Email"/>
                    <input type="text" class="form-control mt-3" placeholder="Subject"/>
                    <div class="mb-3 mt-3">
                        <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details"/>
                    </div>
                   </Form>
                   <Button style={{backgroundColor:"#f8bc20",border:"none",color:"#fffbef",marginTop:"10px"}}>Contact Me</Button>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default SectionFive;
