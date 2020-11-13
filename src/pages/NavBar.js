import React from "react";
import { Nav, NavItem, NavLink as Link } from "reactstrap";
import { Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="Navflex">
            <NavItem className="">
              <Link href="/about" className="colorWhite">
                About
              </Link>
            </NavItem>
            <NavItem className="">
              <Link href="/credentials" className="colorWhite">
                Credentials
              </Link>
            </NavItem>
            <NavDropdown className="white" title="Offerings">
              <NavDropdown.Item href="/classes">Classes</NavDropdown.Item>
              <NavDropdown.Item href="/tutoring">Tutoring</NavDropdown.Item>
            </NavDropdown>
            <NavItem className="">
              <Link href="/contact" className="colorWhite">
                Contact
              </Link>
            </NavItem>
            <NavItem className="">
              <Link href="/biography" className="colorWhite">
                Biography
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
