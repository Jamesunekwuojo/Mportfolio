
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import "./MainNav.css"

const MainNav = () => {
  return (
    <>
    

      {/* Background for the next component */}
      <div style={{ backgroundColor: '#0a3d62', height: '100vh', width: '100%' }}>
        
      <Navbar fixed ="top" expand="lg" style={{ width: '80%', margin: '0 auto', backgroundColor: '#0a3d62',  } } className='p-4'>
        <Container fluid>
          <Navbar.Brand href="#">YourBrand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home" classsName='ms-3'>HOME</Nav.Link>
              <Nav.Link href="#about" classsName='ms-3'>ABOUT</Nav.Link>
              <NavDropdown title={"RESOURCES"}>
                <NavDropdown.Item>Book</NavDropdown.Item>
                <NavDropdown.Item>Book</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#services" >SHOP</Nav.Link>
              <Nav.Link href="#services">CONTACT</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div >jjijiojoi</div>
      <button style={{backgroundColor :"#ffcc00", color:'white'}}>dgd</button>
        {/* Scrollable content */}
        {/* <div style={{ backgroundColor: '#fff', padding: '20px', height: '150vh' }}>
          <h1>Your Scrollable Component</h1>
        </div> */}
      </div>
      <div style={{height: '100vh'}}>khjkkj</div>
    </>
  );
};

export default MainNav;
