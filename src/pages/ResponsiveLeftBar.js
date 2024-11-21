import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { BsBriefcaseFill, BsGridFill, BsNewspaper } from "react-icons/bs";
import { FaFileSignature, FaRegQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import { useContext } from "react";
import { CarContext } from "../context/CarContext";
import '../assets/scss/responsiveLeftBar.scss';

const ResponsiveLeftBar = () => {

    const { leftBarCollepse, handleLeftBarClose } = useContext(CarContext);

    return (
        <Modal className="menu-modal" show={leftBarCollepse} onHide={handleLeftBarClose} animation={false}>
            <div className="responsive-left-bar">
                <Container fluid className="left-bar-col">
                    <Row className="logo">
                        <Col lg={10} md={10} sm={10} xs={10} className="d-flex justify-content-start align-items-center gap-2 p-0">
                            <img src={Logo} alt="" width="28" height="28.91" />
                            <Form.Text>NFT Cars</Form.Text>
                        </Col>
                    </Row>
                    <Row className="menu">
                        <Link to="/" className="menu-item">
                            <BsGridFill /><Form.Text>Dashboard</Form.Text>
                        </Link>
                        <Link to="/myportfolio" className="menu-item">
                            <BsBriefcaseFill /><Form.Text>My Portfolio</Form.Text>
                        </Link>
                        <Link to="/" className="menu-item">
                            <BsNewspaper /><Form.Text>Company News</Form.Text>
                        </Link>
                        <Link to="/contract" className="menu-item white">
                            <FaFileSignature /><Form.Text>Contract</Form.Text>
                        </Link>
                        <Link to="/faq" className="menu-item white">
                            <FaRegQuestionCircle /><Form.Text>FAQ</Form.Text>
                        </Link>
                    </Row>
                </Container>
            </div>
        </Modal>
    )
}

export default ResponsiveLeftBar;