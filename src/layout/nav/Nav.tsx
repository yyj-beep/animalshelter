import {Button, Nav} from 'react-bootstrap';
import styles from './Nav.module.css';

const NavBar = () => {
    return(
        <>
        <Nav className={`tab flex-column align-items-center justify-content-end ${styles.navSide}`}>
            <div className={`flex-column align-items-center ${styles.navContent}`}>
            <Nav.Link className={`d-flex flex-column align-items-center ${styles.content}`}><div className={`secondary ${styles.icon}`}></div>실종동물 찾는 법</Nav.Link>
            <Nav.Link className={`d-flex flex-column align-items-center ${styles.content}`}><div className={`secondary ${styles.icon}`}></div>분양 시 유의사항</Nav.Link>
            <Nav.Link className={`d-flex flex-column align-items-center ${styles.content}`}><div className={`secondary ${styles.icon}`}></div>공지사항</Nav.Link>
            </div>
            <Button className={`secondary-bg ${styles.topBtn}`}>TOP</Button>
        </Nav>
        </>
    )
};

export default NavBar;