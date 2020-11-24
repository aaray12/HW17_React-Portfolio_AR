import React from "react";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
function MyNavbar() {
    return (
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="/">Aaron M. Ray</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
      
    //     <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="/">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/AboutMe">About Me</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/Portfolio">Portfolio</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/Contact">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Aaron M. Ray</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutMe">About Me</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Phone</NavDropdown.Item>
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
  