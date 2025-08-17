import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import {  IoPawOutline, IoPaw } from "react-icons/io5";
import {IconType} from 'react-icons';
import { Link } from 'react-router-dom';

const PawIcon = IoPawOutline as IconType;

const Header = () => {
  return(
    <>
    <Navbar expand="md">
      <Container fluid>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basicNav"/>

        <Navbar.Offcanvas
          id="basicNav"
          aria-labelledby="basicLabel"
          placement="end">

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="basicLabel"
            >Logo</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav>
              <NavDropdown
                id="absicLabel"
                title="동물을 찾습니다">
                <NavDropdown.Item as={Link} to="/pages/Gallery">실종동물 찾습니다</NavDropdown.Item>
                <NavDropdown.Item href="#">주인을 찾습니다</NavDropdown.Item>
                <NavDropdown.Item href="#">상봉 완료?!</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                id="absicLabel"
                title="무료 분양">
                <NavDropdown.Item as={Link} to="/pages/ReHome">분양합니다</NavDropdown.Item>
                <NavDropdown.Item href="#">안전 분양 완료!</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                id="absicLabel"
                title="봉사/후원하기">
                <NavDropdown.Item as={Link} to="./components/modal/ModalTestComp">모달테스트 페이지</NavDropdown.Item>
                <NavDropdown.Item href='#'>자원봉사 모집</NavDropdown.Item>
                <NavDropdown.Item href="#">기부&후원 요청</NavDropdown.Item>
                <NavDropdown.Item href="#">나눔합니다</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                id="absicLabel"
                title="커뮤니티">
                <NavDropdown.Item as={Link} to="Notice">공지사항</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="Petstory">반려동물 이야기</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

    <div className='display-1'></div>
    </>
  )
};

export default Header;