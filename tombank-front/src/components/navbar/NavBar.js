import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tom Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="response-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
