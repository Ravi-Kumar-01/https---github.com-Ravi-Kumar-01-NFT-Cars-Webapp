import { Carousel, Col, ProgressBar, Row, Form } from "react-bootstrap";
import '../assets/scss/Dashboard.scss';
import { BsArrowLeftCircle, BsArrowRightCircle, BsClock } from 'react-icons/bs';
import SortBy from "../components/SortBy";
import NewCars from "../components/NewCars";
import Iframe from 'react-iframe'
import { useEffect, useState } from "react";
import { getWindowDimensions } from "../assets/js/globalFuns";
import { allCars } from "../utils/allCars";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [windowSize, setWindowSize] = useState(getWindowDimensions);
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className="dashboard">
            <h5 className="new-cars-title mt-3">New Cars</h5>

            <NewCars />

            {/* <Row className="mt-5 cars-map">
                <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-between">
                    <div className="cars-map-title">Cars Map</div>
                    <SortBy />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="mt-4">
                    <Iframe src="https://www.google.com/maps/d/embed?mid=18LZ4L4OGy3yxoDS5qnBcF-LFA7iYBgg&ehbc=2E312F" width="100%" height="480"></Iframe>
                </Col>
            </Row> */}

            <Row className="mt-5 all-cars">
                {/* <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-between">
                    <div className="all-cars-title">All Cars</div>
                    <SortBy />
                    <div className="all-cars-navigation">
                        <BsArrowLeftCircle />
                        <p>1/10</p>
                        <BsArrowRightCircle />
                    </div>
                </Col> */}
                {
                    allCars.map((car, index) => {
                        return (
                            <Col lg={3} md={3} sm={12} xs={12} className="mt-3" key={index}>
                                {
                                    windowSize.width > 576 ? 
                                    <Link to="/cardetail" className="car-item" style={{textDecoration: 'none'}}>
                                        <Carousel>
                                            {
                                                car.images.map((img, index1) => {
                                                    return (
                                                        <Carousel.Item key={index1}>
                                                            <img
                                                            className="d-block w-100"
                                                            src={img}
                                                            alt="First slide"
                                                            />
                                                        </Carousel.Item>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                        <div className="content">
                                            <div className="d-flex justify-content-between align-items-center car-currency">
                                                <p>({car.percent}%)</p><div>{car.money} <p>Funded</p></div>
                                            </div>
                                            <ProgressBar now={car.percent} />
                                            <div className="car-info">
                                                <div className="d-flex gap-2"><BsClock />Location</div>
                                                <div className="d-flex gap-2"><h5 className="text-red">{car.location}</h5></div>
                                            </div>
                                            <div className="car-info">
                                                <div className="d-flex gap-2"><BsClock />Distribution</div>
                                                <div className="d-flex gap-2">{car.distribution}</div>
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <ResponsiveAllCars car={car} />
                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

const ResponsiveAllCars = (props) => {
    const { car } = props;
    return (
        <Link to="/cardetail" className="car-item" style={{textDecoration: 'none'}}>
            <Carousel>
                {
                    car.images.map((img, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                className="d-block w-100"
                                src={img}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            <div className="content">
                <Form.Text className="nft-name">Name of NFT</Form.Text>
                <div className="d-flex justify-content-between align-items-center car-currency mt-1">
                    <p>({car.percent}%)</p><div>{car.money} <p>Funded</p></div>
                </div>
                <ProgressBar now={60} />
                <div className="car-info">
                    <div className="d-flex gap-2">Distribution: </div>
                    <div className="d-flex gap-2 years">{car.distribution}</div>
                </div>
                <div className="car-info">
                    <div className="d-flex gap-2">Location: </div>
                    <div className="d-flex gap-2 location"><h5 className="text-red">{car.location}</h5></div>
                </div>
            </div>
        </Link>
    )
}
export default Dashboard;