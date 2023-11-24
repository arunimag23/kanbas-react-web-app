import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{backgroundColor:"purple"}}>
        <Navbar.Brand href="#/project/home" style={{color:"black"}}>Harmony Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/project/home"   style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#/project/search" style={{color:"white"}}>Search</Nav.Link>
            <Nav.Link href="#/project/signin" style={{color:"white"}}>Sign In</Nav.Link>
            <Nav.Link href="#/project/signup" style={{color:"white"}}>Sign Up</Nav.Link>
            <Nav.Link href="#/project/account"style={{color:"white"}}>Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;