import React from 'react';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';
import { Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return(
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Joe Bernens</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="Navflex">
                    <NavItem className="">
                        <Link className="colorWhite" href="/">Home <span className="sr-only">(current)</span></Link>
                    </NavItem>
                    <NavItem className="">
                        <Link href="/about" className="colorWhite">About</Link>
                    </NavItem>
                    <NavDropdown className="colorWhite" title="Courses">
                        <NavDropdown.Item href="#action/3.1">English / Language Arts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Math / Social Studies</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Theatre / Drama</NavDropdown.Item>
                    </NavDropdown>
                    <NavItem className="">
                        <Link href="/contact" className="colorWhite">Contact</Link>
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        {/*
        <Nav className="NavFlex navbar navbar-dark bg-primary" sticky="top">
          <NavItem>
          <Link className="navbar-brand" href="/contact">Joe Bernans</Link>
          </NavItem>
            <NavItem className="">
              <Link className="colorWhite" href="/">Home <span className="sr-only">(current)</span></Link>
            </NavItem>
            <NavItem className="">
              <Link href="/about" className="colorWhite">About</Link>
            </NavItem>
            <NavItem className="">
              <Link href="/courses" className="colorWhite">Courses</Link>
            </NavItem>
            <NavDropdown className="colorWhite" title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavItem className="">
              <Link href="/contact" className="colorWhite">Contact</Link>
            </NavItem>
        </Nav>*/}
      </div>

    )
}

export default NavBar;