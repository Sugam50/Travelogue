import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Style/navbar.css'
function NavBar() {
  return (
<Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Image  className="logoimage"
            src="https://cdn.discordapp.com/attachments/912379186419753012/912399939278098462/Lets_Get_Lost_in_travelling.png" alt="" />
        <Navbar.Brand className="plantify" href="/">Travelogue</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className="home"      to="/">Home</Link>
          <Link className="aboutus"   to="/About">About us</Link>
          <Link className="login"     to="/login">Login</Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
//   <Container>
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto">
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Dank memes
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
//   </Container>
// </Navbar>