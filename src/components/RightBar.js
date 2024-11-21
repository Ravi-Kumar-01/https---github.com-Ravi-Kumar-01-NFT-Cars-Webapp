import { Button, Form, Nav } from "react-bootstrap"
import { BsList, BsMoon, BsWalletFill } from "react-icons/bs";
import '../assets/scss/RightBarNav.scss'
import { useContext, useState } from "react";
import ResponsiveLeftBar from "../pages/ResponsiveLeftBar";
import Logo from '../assets/images/logo.png';

import WalletModal from "./WalletModal";
import { CarContext } from "../context/CarContext";
import { useWeb3React } from "@web3-react/core";

const RightBar = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { account, handleLeftBarShow } = useContext(CarContext);
    const { active, deactivate } = useWeb3React();

    return (
        <Nav className="right-bar-nav">
            <div className="d-flex align-items-center gap-2 btn-responsive">
                <BsList onClick={handleLeftBarShow} />
                <img src={Logo} width="34" height="34" alt="" />
                <Form.Text>NFT Cars</Form.Text>
            </div>
            <Nav.Item>
                <Button className="btn-dark"><BsMoon /></Button>
            </Nav.Item>
            <Nav.Item>
                {active && typeof account === 'string' ? 
                    <Button className="btn-wallet" onClick={() => deactivate()}><BsWalletFill />
                        {account.replace(/(.{4}).*(.{4})/, "$1...$2")}
                    </Button>
                    :
                    <Button className="btn-wallet" onClick={handleShow}><BsWalletFill />
                        {'Connect Wallet'}
                    </Button>   
                }
            </Nav.Item>
            <ResponsiveLeftBar />
            <WalletModal show={show} handleClose={handleClose} />
        </Nav>
    )
}

export default RightBar;