import React from "react";
import "../Navbar/header.css"
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header" style={{position:"fixed",width:"100%", top:"0",background:"#fffbef",zIndex:"999"}}>
      <Navbar id="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h2>Portfolio</h2>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
