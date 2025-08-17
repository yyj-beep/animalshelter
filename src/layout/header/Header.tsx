import {Container, Nav, Navbar, Offcanvas, NavDropdown} from 'react-bootstrap';
import MenusData from "../../data/menu.json";
import styles from './Header.module.css';

const Header = () => {
  return(
  <Navbar expand="md" className={styles.header}>
    <Container fluid>
      <Navbar.Brand href="/" className={styles.logo}>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basicNav"/>

      <Navbar.Offcanvas
        id="basicNav"
        aria-labelledby="basicLabel"
        placement="end"
        >
        <Offcanvas.Header closeButton>
        <Offcanvas.Title id="basicLabel">Logo</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="justify-content-between align-items-center">
          <Nav className="gap-4">
            
          {MenusData.map(({ menuId, title, menus }) => (
            <NavDropdown
            id={menuId}
            title={title}
            className="nav-default">

              {menus.map(({ label, to }, i) => (

                <NavDropdown.Item
                  key={i} href={to}
                  className={`nav-small d-flex gap-4 ${styles.submenu}`}
                  ><span className={styles.icon}></span>{label}
                </NavDropdown.Item>

              ))}

            </NavDropdown>
          ))}

          </Nav>

          <Nav className={`ms-auto nav-small gap-2 ${styles.login}`}>
            <Nav.Link href="#" className='d-flex align-items-center gap-2'><span className={styles.iconR}></span>로그인</Nav.Link>
            <Nav.Link href="#" className='d-flex align-items-center gap-2'><span className={styles.iconR}></span>회원가입</Nav.Link>
            <Nav.Link href="#">마이페이지</Nav.Link>
          </Nav>
        </Offcanvas.Body>

      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
};

export default Header;