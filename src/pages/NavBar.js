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
                        <NavDropdown.Item href="/english_language_arts">English / Language Arts</NavDropdown.Item>
                        <NavDropdown.Item href="math_social_studies">Math / Social Studies</NavDropdown.Item>
                        <NavDropdown.Item href="theatre_drama">Theatre / Drama</NavDropdown.Item>
                        <NavDropdown.Item href="study_skills">Study Skills</NavDropdown.Item>
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