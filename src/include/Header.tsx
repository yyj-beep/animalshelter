import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';

const Header = () => {
  return(
    <> 
    <Navbar expand="sm" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar"/>
        
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNabarLabel"
          placement="end">

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"
            >Logo</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end  flex-grow-1 pe-3"></Nav>
            내용을 작성합니다.
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  )
};

export default Header;