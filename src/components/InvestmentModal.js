import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import { BsCheckCircleFill, BsDownload, BsXCircleFill } from "react-icons/bs";
import Logo from '../assets/images/logo.png'
import '../assets/scss/InvestmentModal.scss'

const InvestmentModal = (props) => {
    const { show, handleClose } = props;
    const [ step, setStep ] = useState(1);
    const handleStep = (id) => {
        setStep(id);
    }
    
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title><img src={Logo} alt="" width="47.68" height="52.3" />NFT Cars</Modal.Title>
                <BsXCircleFill onClick={handleClose} />
            </Modal.Header>
            <Modal.Body>
                {
                    step === 1 ? <InvestmentConfirmation handleStep={handleStep} /> :
                    step === 2 ? <Investment handleStep={handleStep} /> : 
                    <SuccessfullyInvested />
                }
            </Modal.Body>
        </Modal>
    )
}

const InvestmentConfirmation = (props) => {
    const { handleStep } = props;
    const carInfos = [
        {title: 'Amount', value: '$2000 BUSD'},
        {title: 'Return', value: '5%/month'},
        {title: 'Distribution', value: 'Each month'},
        {title: 'Financial Instrument', value: 'Tokenization Car'},
        {title: 'Issuer', value: 'Hulk Company'},
        {title: 'Payment method', value: 'BUSD (crypto)'},
        {title: 'Payment time', value: 'Instant'}
    ];
    return (
        <>
            <h1>Investment Confirmation</h1>
            <div className="mt-5">
                {
                    carInfos.map((info, index) => {
                        return (
                            <div className="car-info" key={index}>
                                <p>{info.title}</p><p>{info.value}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-4">
                <div className="contract">Terms and Conditions <Button><BsDownload />Download</Button></div>
                <div className="contract">Loan Contract <Button><BsDownload />Download</Button></div>
                <div className="contract">Fact Sheet <Button><BsDownload />Download</Button></div>
            </div>

            <div className="mt-4">
                <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                    <Form.Check type="checkbox" label="By confirming you agree to the term if company and accept them heraby" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                    <Form.Check type="checkbox" label="By confirming you agree to the term if company and accept them heraby" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                    <Form.Check type="checkbox" label="By confirming you agree to the term if company and accept them heraby" />
                </Form.Group>
            </div>
            <Button className="btn-buy-nft w-100 mt-4" onClick={() => handleStep(2)}>Buy NFT</Button>
        </>
    )
}

const Investment = (props) => {
    const { handleStep } = props;
    return (
        <>
            <h1 className="mt-4">BMW séries 2 (NFT)</h1>
            <div className="mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Crypto Rate</Form.Label>
                    <Form.Control type="text" placeholder="$1.00 = 1 BUSD" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Amount in BUSD</Form.Label>
                    <Form.Control type="text" placeholder="$20000" />
                </Form.Group>
            </div>
            <Button className="btn-continue w-100 mt-4" onClick={() => handleStep(3)}>Continue</Button>
        </>
    )
}

const SuccessfullyInvested = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <BsCheckCircleFill className="success-svg"/>
            <h1 className="text-success">Successfully Invested</h1>
            <p className="text-center text-success-detail">You have just received your NFT ERC 721 on the BNB Chain network. You can sell your NFT at any time on the secondary market.</p>
        </div>
    )
}

export default InvestmentModal;