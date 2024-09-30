import {Navbar, Nav} from "react-bootstrap"

const App = () => {

  <>
  {/* Navbar Component */}
  <Navbar
    fixed="top"
    bg="dark"
    variant="dark"
    expand="lg"
    style={{
      width: '80%',
      zIndex: 1, // Ensures the navbar stays on top
    }}
  >
    <Navbar.Brand href="#home">My Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  {/* Background for the 20% remaining width */}
  <div
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '20%',
      backgroundColor: 'darkgray',
      zIndex: 0, // Allows this section to sit behind the navbar
    }}
  ></div>

  {/* Next Component */}
  <div
    style={{
      marginTop: '70px', // Offset to account for fixed navbar
      backgroundColor: 'darkgray', // Same as the background for a seamless look
      padding: '20px',
    }}
  >
    <h1>Component below Navbar</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
      amet purus vehicula, tincidunt lectus a, fermentum enim. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac
      turpis egestas.
    </p>
    <p>More content here...</p>
    <p>More content here...</p>
    <p>More content here...</p>
    <p>More content here...</p>
  </div>
</>

}
export default App