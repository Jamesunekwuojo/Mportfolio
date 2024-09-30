import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MainNav.css";

import LandingPics from "../LandingPics/LandingPics";

const MainNav = () => {
  // State variable used to manage Resources dropdown
  const [showdropDown, setShowdropDown] = useState(false);
  // state use for managing active color link
  const [activeLink, setActiveLink] = useState('/home')


  // function for managing active color for link
  const handleLinkClick = (link) => {
    setActiveLink(link);
    
  }

  return (
    <>
      <div
        style={{ backgroundColor: "#6244C5", height: "100vh", width: "100%" }}
      >
        <Navbar
          fixed="top"
          expand="lg"
          style={{ width: "80%", margin: "0 auto", backgroundColor: "#6244C5" }}
          className="p-4"
        >
          <Container fluid>
            <Navbar.Brand href="#">YourBrand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link
                  href="#home"
                  className={`nav-link ms-3 ${activeLink === '/home' ? 'active-link' : ''}`}
                  onClick={()=>handleLinkClick('/home')}
                >
                  HOME
                </Nav.Link>
                <Nav.Link href="#about" classsName="">
                  ABOUT
                </Nav.Link>
                <NavDropdown
                  className="navDropdown"
                  title={"RESOURCES"}
                  show={showdropDown}
                  onMouseEnter={() => setShowdropDown(true)}
                  onMouseLeave={() => setShowdropDown(false)}
                >
                  <NavDropdown.Item>Book</NavDropdown.Item>
                  <NavDropdown.Item>Blog</NavDropdown.Item>
                  <NavDropdown.Item>
                    Purpose Mastery Masterclass
                  </NavDropdown.Item>
                  <NavDropdown.Item>One-on-One Coaching</NavDropdown.Item>
                  <NavDropdown.Item> Speaking Engagement </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#services">SHOP</Nav.Link>
                <Nav.Link href="#services">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* landinpic section */}
        <LandingPics></LandingPics>

     
        {/* Scrollable content */}
        {/* <div style={{ backgroundColor: '#fff', padding: '20px', height: '150vh' }}>
          <h1>Your Scrollable Component</h1>
        </div> */}
      </div>
      <div style={{ height: "100vh" }}>khjkkj</div>
    </>
  );
};

export default MainNav;
