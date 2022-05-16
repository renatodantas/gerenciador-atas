import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo-company.png';

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-3" style={{ height: 70 }}>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/atas">
              <i className="bi-journals"></i> Atas
            </Link>
            <Link to='/atas/edit' className="nav-link">
              <i className="bi-journal-plus"></i> Nova Ata
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}