import React from 'react';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';
import { Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return(
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="Navflex">
                    <NavItem className="">
                        <Link href="/about" className="colorWhite">About</Link>
                    </NavItem>
                    {/* 
                    <NavDropdown className="colorWhite" title="Courses">
                        <NavDropdown.Item href="/english_language_arts">English / Language Arts</NavDropdown.Item>
                        <NavDropdown.Item href="math_social_studies">Math / Social Studies</NavDropdown.Item>
                        <NavDropdown.Item href="theatre_drama">Theatre / Drama</NavDropdown.Item>
                        <NavDropdown.Item href="study_skills">Study Skills</NavDropdown.Item>
                    </NavDropdown>
                    */}
                    <NavDropdown className="colorWhite" title="2020-2021">
                        <NavDropdown.Item href="/classes">Classes</NavDropdown.Item>
                        <NavDropdown.Item href="/tutoring">Tutoring</NavDropdown.Item>
                    </NavDropdown>
                    <NavItem className="">
                        <Link href="/contact" className="colorWhite">Contact</Link>
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
      </div>

    )
}

export default NavBar;