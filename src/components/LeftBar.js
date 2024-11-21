import { Col, Container, Form, Row } from "react-bootstrap";
import { BsGridFill, BsBriefcaseFill, BsNewspaper, BsGlobe, BsTwitter } from 'react-icons/bs';
import { FaFileSignature, FaRegQuestionCircle } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';
import FacebookLogo from '../assets/images/facebook.png';
import UserLogo from '../assets/images/Ellipse 48.png';
import MoreCirclesLogo from '../assets/images/More Circle.png';
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CarContext } from "../context/CarContext";
import '../assets/scss/LeftBar.scss';

const LeftBar = () => {
    const { leftBarCollepse } = useContext(CarContext);
    const location = useLocation();
    return (
        <div className={`left-bar ${leftBarCollepse ? 'collepse' : ''}`}>
            <Container fluid className="left-bar-col">
                <Row className="logo">
                    <Col lg={10} md={10} sm={10} xs={10} className="d-flex justify-content-center align-items-center">
                        <img src={Logo} alt="" width="21" height="23" />
                        <Form.Text>NFT Cars</Form.Text>
                    </Col>
                </Row>
                <Row className="menu">
                    <Link to="/" className={`menu-item ${location.pathname === '/' ? 'actived' : ''}`}>
                        <BsGridFill /><Form.Text>Dashboard</Form.Text>
                    </Link>
                    <Link to="/myportfolio" className={`menu-item ${location.pathname === '/myportfolio' ? 'actived' : ''}`}>
                        <BsBriefcaseFill /><Form.Text>My Portfolio</Form.Text>
                    </Link>
                    <Link to="/" className={`menu-item ${location.pathname === '/companynews' ? 'actived' : ''}`}>
                        <BsNewspaper /><Form.Text>Company News</Form.Text>
                    </Link>
                </Row>
                <Row className="menu-title legal">legal</Row>
                <Row className="menu">
                    <Link to="/contract" className={`menu-item white ${location.pathname === '/contract' ? 'actived' : ''}`}>
                        <FaFileSignature /><Form.Text>Contract</Form.Text>
                    </Link>
                    <Link to="/faq" className={`menu-item white ${location.pathname === '/faq' ? 'actived' : ''}`}>
                        <FaRegQuestionCircle /><Form.Text>FAQ</Form.Text>
                    </Link>
                </Row>
                <Row className="menu-title support">support</Row>
                <Row className="menu">
                    <div className="menu-item white">
                        <BsGlobe /><Form.Text>Support@nftcars.com</Form.Text>
                    </div>
                    <div className="menu-item facebook">
                        <img src={FacebookLogo} alt="" width="23px" height="23px" /><Form.Text>Facebook</Form.Text>
                    </div>
                    <div className="menu-item twitter">
                        <BsTwitter /><Form.Text>Twitter</Form.Text>
                    </div>
                </Row>
                <Row className="">
                    <div className="user">
                        <div className="user-logo">
                            <img src={UserLogo} width="42px" height="42px" alt="" />
                        </div>
                        <div className="user-content">
                            <h6>NUMANZAFAR</h6>
                            <Form.Text>numanzafar994@gmail.com</Form.Text>
                            <img src={MoreCirclesLogo} width="14.67" height="2.68" alt="" />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LeftBar;