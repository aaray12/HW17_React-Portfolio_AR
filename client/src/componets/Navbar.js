import React from "react";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
function MyNavbar() {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Aaron M. Ray</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutMe">About Me</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <NavDropdown title="Other Profiles" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">Linkden</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">GitHub</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
  
  export default MyNavbar;
  