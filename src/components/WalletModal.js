import { Button, Modal } from "react-bootstrap"
import { BsXCircleFill } from "react-icons/bs";
import Logo from '../assets/images/logo.png'
import '../assets/scss/WalletModal.scss'
import MetaMaskLogo from '../assets/images/metamask.png';
import TrustWalletLogo from '../assets/images/wallet-connect.svg';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect } from "react";

const WalletModal = (props) => {
    const { show, handleClose } = props;
    const injectedConnector = new InjectedConnector({supportedChainIds: [1,3, 4, 5, 42, 56 ],});
    const walletconnect = new WalletConnectConnector({
        rpc: { 56 : "https://bsc-dataseed1.ninicoin.io" },
        qrcode: true,
        pollingInterval: 12000,
    });
    const { account, activate, library } = useWeb3React();
    
    const handleWallet = () => {
        if (!account) {
            activate(walletconnect);
        }
    }
    const handleMetamask = () => {
        if (!account) {
            activate(injectedConnector);
        }
    }
    useEffect(() => {
        library?.getBalance(account).then((result) => {

        });
        if (account) {
            handleClose(false);
        }
    },);
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header>
                <Modal.Title><img src={Logo} alt="" width="47.68" height="52.3" />NFT Cars</Modal.Title>
                <BsXCircleFill onClick={handleClose} />
            </Modal.Header>
            <Modal.Body>
                <Button onClick={handleMetamask} className="btn-metamask w-100"><img src={MetaMaskLogo} alt="" width="30" height="30" />MetaMask</Button>
                <Button onClick={handleWallet} className="btn-trust w-100"><img src={TrustWalletLogo} alt="" width="30" height="30" />Wallet Connect</Button>
            </Modal.Body>
        </Modal>
    )
}

export default WalletModal;