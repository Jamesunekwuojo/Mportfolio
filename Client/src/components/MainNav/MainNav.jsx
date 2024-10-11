import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./MainNav.css";
import LandingPics from "../LandingPics/LandingPics";

const MainNav = () => {
  const [showdropDown, setShowdropDown] = useState(false);
  const [activeLink, setActiveLink] = useState("/home");
  const [scrolled, setScrolled] = useState(false); // State to track if we are not on home route
  const location = useLocation(); // Track the current route

  // Update the scrolled state based on the route
  useEffect(() => {
    if (location.pathname === "/") {
      setScrolled(false); // No scroll for home page
    } else {
      setScrolled(true); // Scroll when on any other route
    }
  }, [location.pathname]);

  // Handle active link highlighting
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      {/* mainnavDiv class changes based on the scrolled state */}
      <div className={`mainnavDiv ${scrolled ? "scrolled-up-nav" : "not-scrolled"}`}>
        <Navbar expand="lg" className="p-2 navbarCustom">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <div className="d-flex flex-column">
                <h2 className="brandText">Mustapha</h2>
                <h2 className="brandText">Abiodun</h2>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* Home */}
                <Nav.Link
                  as={Link}
                  className={`nav-link ms-3 ${activeLink === "/" ? "active-link" : ""}`}
                  onClick={() => handleLinkClick("/")}
                  to="/"
                >
                  HOME
                </Nav.Link>
                {/* Other nav links */}
                <Nav.Link
                  as={Link}
                  className={`nav-link ms-3 ${activeLink === "/about" ? "active-link" : ""}`}
                  onClick={() => handleLinkClick("/about")}
                  to="/about"
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
                  {/* Resources dropdown items */}
                  <NavDropdown.Item
                    as={Link}
                    className={`nav-link ${activeLink === "/resources/book" ? "active-link" : ""}`}
                    onClick={() => handleLinkClick("/resources/book")}
                    to="/resources/book"
                  >
                    Books
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className={`nav-link ${activeLink === "/resources/blog" ? "active-link" : ""}`}
                    onClick={() => handleLinkClick("/resources/blog")}
                    to="/resources/blog"
                  >
                    Blog
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    className={`nav-link ${activeLink === "/resources/oneCoaching" ? "active-link" : ""}`}
                    onClick={() => handleLinkClick("/resources/oneCoaching")}
                    to="/resources/oneCoaching"
                  >
                    Speaking Engagement
                  </NavDropdown.Item>
                </NavDropdown>
                {/* Shop and Contact */}
                <Nav.Link
                  as={Link}
                  className={`nav-link ${activeLink === "/shop" ? "active-link" : ""}`}
                  onClick={() => handleLinkClick("/shop")}
                  to="/shop"
                >
                  SHOP
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={`nav-link ${activeLink === "/contact" ? "active-link" : ""}`}
                  onClick={() => handleLinkClick("/contact")}
                  to="/contact"
                >
                  CONTACT
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* LandingPics section with conditional scroll class */}
        <LandingPics className={`landingpicsContainer ${scrolled ? "scrolled-up" : ""}`}></LandingPics>
      </div>
    </>
  );
};

export default MainNav;
