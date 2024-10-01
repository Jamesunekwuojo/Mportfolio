import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MainNav.css";

import LandingPics from "../LandingPics/LandingPics";

const MainNav = () => {
  // State variable used to manage Resources dropdown
  const [showdropDown, setShowdropDown] = useState(false);
  // state use for managing active color link
  const [activeLink, setActiveLink] = useState("/home");

  // function for managing active color for link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

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
            <Navbar.Brand href="#">
              <div className="d-flex flex-column ">
                <p className="brandText">Abiodun</p>
                <p className="brandText">Mustapha</p>

              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link
                  href="#home"
                  className={`nav-link ms-3 ${
                    activeLink === "/home" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("/home")}
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  href="#about"
                  className={`nav-link ms-3 ${
                    activeLink === "/about" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("/about")}
                >
                  ABOUT
                </Nav.Link>
                <NavDropdown
                  className="navDropdown"
                  title={"RESOURCES"}
                  show={showdropDown}
                  onMouseEnter={() => setShowdropDown(true)}
                  onMouseLeave={() => setShowdropDown(false)}
                >
                  <NavDropdown.Item
                    className={`nav-link
                      activeLink === "/resources/book" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/book")}
                  >
                    Book
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`nav-link
                      activeLink === "/resources/blog" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/blog")}
                  >
                    Blog
                  </NavDropdown.Item>

                  <NavDropdown.Item 
                     className={`nav-link
                      activeLink === "/resources/masteryClass" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/masteryClass")}
                  >
                    Purpose Mastery Masterclass
                  </NavDropdown.Item>
                  <NavDropdown.Item
                     className={ `nav-link
                      activeLink === "/resources/oneCoaching" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/oneCoaching")}
                  >One-on-One Coaching</NavDropdown.Item>
                  <NavDropdown.Item
                     className={`nav-link
                      activeLink === "/resources/speakingEng" ? "active-link" : ""
                    }`}
                    onClick={() => handleLinkClick("/resources/speakingEng")}
                  > Speaking Engagement </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  href="#services"
                  className={`nav-link ${
                    activeLink === "/shop" ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick("/shop")}
                >
                  SHOP
                </Nav.Link>

                <Nav.Link href="#services"
                  className={`nav-link ${activeLink === '/contact' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('/contact')}
                >CONTACT</Nav.Link>
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
