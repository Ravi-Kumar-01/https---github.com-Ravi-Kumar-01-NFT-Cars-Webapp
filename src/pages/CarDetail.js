import { Button, Carousel, Col, Form, ProgressBar, Row } from "react-bootstrap";
import { BsCheckCircleFill, BsChevronRight, BsFillPrinterFill, BsFillStarFill, BsHouseDoor, BsShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../assets/scss/CarDetail.scss';
import Car1Logo from '../assets/images/car1.png';
import Car2Logo from '../assets/images/car2.png';
import Car3Logo from '../assets/images/car3.png';
import FireLogo from '../assets/images/bi_fire.png';
import { useEffect, useState } from "react";
import InvestmentModal from "../components/InvestmentModal";
import { getWindowDimensions } from "../assets/js/globalFuns";

    const features = [
    {img: require('../assets/images/mark.png'), title: 'Mark', value: 'BMW'},
    {img: require('../assets/images/model.png'), title: 'Model', value: 'Séries 2'},
    {img: require('../assets/images/kilometers.png'), title: 'Kilometers', value: '5000'},
    {img: require('../assets/images/seats.png'), title: 'Seats', value: '5'},
    {img: require('../assets/images/doors.png'), title: 'Doors', value: '2'},
    {img: require('../assets/images/fiscal-power.png'), title: 'Fiscal Power', value: '10CV'},
    {img: require('../assets/images/gearbox.png'), title: 'Gearbox', value: 'Automatic'},
    {img: require('../assets/images/calendar.png'), title: 'Model Year', value: '2023'},
    {img: require('../assets/images/vehicle-type.png'), title: 'Vehicle Type', value: 'Berline'}
    ];

    const infos = [
    {img: require('../assets/images/location.png'), title: 'Location', value: 'United Arab Emirates'},
    {img: require('../assets/images/seats.png'), title: 'Creation Date', value: '01/03/2023'},
    {img: require('../assets/images/payment.png'), title: 'Payment Method', value: 'BUSD'},
    {img: require('../assets/images/network.png'), title: 'Network', value: 'BNB Chain'},
    {img: require('../assets/images/token-id.png'), title: 'Token ID (ERC-721)', value: '#11'},
    {img: require('../assets/images/issuer.png'), title: 'Issuer', value: 'Hulk Company'},
    ];

const CarDetail = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [windowSize, setWindowSize] = useState(getWindowDimensions);
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])
    return (
        <div className="car-detail">
            <div className="sub-menu w-100">
                <Link to="/"><BsHouseDoor /></Link><BsChevronRight /><Link to="/">Dashboard</Link><BsChevronRight /><h6>BMW Série 2 </h6>
            </div>
            <div className="car-detail-book mt-3">
                {
                    windowSize.width > 576 ?
                    <Row className="">
                        <Col lg={5} md={12} sm={12} xs={12}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Car1Logo}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>BMW Série 2</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Car2Logo}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>BMW Série 2</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Car3Logo}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>BMW Série 2</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <div className="car-desc">By purchasing this NFT you become the lifetime owner of this car up to 5%. You receive each month 5% of the profits of this rental paid directly in BUSD on the BNB Chain directly in your wallet. You will receive 5% of the price of this car at the time of the sale.</div>
                            <div className="car-name mt-3">BMW Série 2</div>
                            {
                                features.map((feature, index) => {
                                    return (
                                        <div className="car-feature" key={index}>
                                            <div className="d-flex align-items-center gap-2"><img src={feature.img} alt="" width="20.58" height="20.58" />{feature.title}</div>
                                            <div>{feature.value}</div>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={{span: 6, offset: 1}} md={12} sm={12} xs={12} className="h-auto d-flex flex-column">
                            <div className="d-flex justify-content-end align-items-center gap-3">
                                <BsShareFill style={{color: 'white', cursor: 'pointer'}}/><BsFillPrinterFill style={{color: 'white', cursor: 'pointer'}}/>
                            </div>
                            <div className="d-flex justify-content-between align-items-center buy-nft">
                                <h1>$2000</h1>
                                <Button onClick={handleShow}>Buy NFT</Button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center nft-rate">
                                <div className="d-flex gap-1"><BsFillStarFill style={{color: '#AAFF00'}} /><BsFillStarFill style={{color: '#AAFF00'}} /><BsFillStarFill style={{color: '#AAFF00'}} /><BsFillStarFill style={{color: '#AAFF00'}} /></div>
                                <div className="d-flex align-items-center gap-3"><img src={FireLogo} alt="" width="24" height="24" /><Button>NEW</Button></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center nft-currency">
                                <div className="nft-return">
                                    <p>Return</p>
                                    <p>5% P.M</p>
                                </div>
                                <div className="nft-term">
                                    <p>Term</p>
                                    <p>When The Car Is Sold</p>
                                </div>
                            </div>
                            <div className="car-info h-100">
                                {
                                    infos.map((info, index) => {
                                        return (
                                            <div className="info" key={index}>
                                                <div><img src={info.img} alt="" width="22" height="22" />{info.title}</div>
                                                <div>{info.value}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                    :
                    <ResponsiveCarBookDetail />
                }
            </div>
            <Row className="mt-3">
                <Col lg={6} md={12} sm={12} xs={12} className="mt-3">
                    <div className="calculator">
                        <h1 className="title">Calculator</h1>
                        <div className="d-flex justify-content-between percent">
                            <p>(0%)</p>
                            <p>$10000000</p>
                        </div>
                        <ProgressBar now={60} />
                        <Row className="calculator-form mt-4">
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Amount Invest</Form.Label>
                                    <Form.Control type="text" placeholder="$20000" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Interest</Form.Label>
                                    <Form.Control type="text" placeholder="5 % p.m" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Return</Form.Label>
                                    <Form.Control type="text" placeholder="$150" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Terms</Form.Label>
                                    <Form.Control type="text" placeholder="1 month" />
                                </Form.Group>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <Button className="btn-estimate">Estimate</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12} className="mt-3">
                    <div className="car-milestones">
                        <h1 className="title">Car Milestones</h1>
                        <div className="steps mt-4">
                            <div className="step"><BsCheckCircleFill />Purchase Car</div>
                            <div className="step"><BsCheckCircleFill />Vehicle regulation (insurance, etc.)</div>
                            <div className="step"><BsCheckCircleFill />Registration on our platform</div>
                            <div className="step"><BsCheckCircleFill />Rental launched</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <InvestmentModal show={show} handleClose={handleClose} handleShow={handleShow} />
        </div>
    )
}

const ResponsiveCarBookDetail = () => {
    return (
        <Row className="">
            <Col lg={{span: 6, offset: 1}} md={12} sm={12} xs={12} className="h-auto d-flex flex-column mt-3">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Car1Logo}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>BMW Série 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Car2Logo}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>BMW Série 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Car3Logo}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>BMW Série 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="d-flex justify-content-between align-items-center nft-rate mt-3">
                    <Form.Text>BMW Série 2</Form.Text>
                    <div className="d-flex align-items-center gap-3"><img src={FireLogo} alt="" width="24" height="24" /><Button>NEW</Button></div>
                </div>
                <div className="d-flex justify-content-between align-items-center buy-nft mt-3">
                    <h1>$2000</h1>
                </div>
                <div className="d-flex justify-content-between align-items-center review mt-2">
                    <div className="d-flex gap-1"><BsFillStarFill style={{color: '#FBBF04', width: '10px'}} /><BsFillStarFill style={{color: '#FBBF04', width: '10px'}} /><BsFillStarFill style={{color: '#FBBF04', width: '10px'}} /><BsFillStarFill style={{color: '#FBBF04', width: '10px'}} /><Form.Text>268 review</Form.Text></div>
                    <Form.Text>Rate This Car</Form.Text>
                </div>
                <div className="car-desc">By purchasing this NFT you become the lifetime owner of this car up to 5%. You receive each month 5% of the profits of this rental paid directly in BUSD on the BNB Chain directly in your wallet. You will receive 5% of the price of this car at the time of the sale.</div>
                <div className="car-name mt-3">BMW Série 2</div>
                <div className="car-info h-100 mt-3">
                    {
                        infos.map((info, index) => {
                            return (
                                <div className="info" key={index}>
                                    <div><img src={info.img} alt="" width="22" height="22" />{info.title}</div>
                                    <div>{info.value}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </Col>
            <Col lg={5} md={12} sm={12} xs={12} className="mt-3">
                {
                    features.map((feature, index) => {
                        return (
                            <div className="car-feature" key={index}>
                                <div className="d-flex align-items-center gap-2"><img src={feature.img} alt="" width="20.58" height="20.58" />{feature.title}</div>
                                <div>{feature.value}</div>
                            </div>
                        )
                    })
                }
            </Col>
        </Row>
    )
}

export default CarDetail;