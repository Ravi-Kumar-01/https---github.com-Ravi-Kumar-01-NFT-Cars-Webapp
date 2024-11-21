import { useEffect, useState } from "react";
import { Button, Carousel, Col, Row, } from "react-bootstrap";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getWindowDimensions } from "../assets/js/globalFuns";
import { newCars } from "../utils/newCars";

const NewCars = () => {
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
        <div>
            {
                windowSize.width > 576 ?
                    <Row className="new-cars">
                        {
                            newCars.map((newcar, index) => {
                                return (
                                    <Col lg={4} md={4} sm={12} xs={12} key={index}>
                                        <Link to="/cardetail" className="car-item mt-3" style={{textDecoration: 'none'}}>
                                            <Carousel>
                                                {
                                                    newcar.images.map((img, index1) => {
                                                        return (
                                                            <Carousel.Item key={index1}>
                                                                <img
                                                                className="d-block w-100"
                                                                src={img}
                                                                alt="First slide"
                                                                />
                                                                <Carousel.Caption>
                                                                    <h3>Name of NFT</h3>
                                                                </Carousel.Caption>
                                                            </Carousel.Item>
                                                        )
                                                    })
                                                }
                                            </Carousel>
                                            <div className="content">
                                                <div className="car-info">
                                                    <div className="d-flex gap-2"><BsClock />Location</div>
                                                    <div className="d-flex gap-2">{newcar.state},<h5 className="">{newcar.country}</h5></div>
                                                </div>
                                                <div className="car-info">
                                                    <div className="d-flex gap-2"><BsClock />Distribution</div>
                                                    <div className="d-flex gap-2">{newcar.distribution}</div>
                                                </div>
                                                <div style={{backgroundColor: '#FFFFFF', opacity: 0.1, borderRadius: '28px', width: '100%', height: '3px', marginTop: '21.5px', marginBottom: '21.5px'}}></div>
                                                <div className="car-desc"><Link to="/cardetail">{newcar.desc}</Link></div>
                                            </div>
                                        </Link>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    :
                    <ResponsiveNewCars newCars={newCars} />
            }
        </div>
    )
}

const ResponsiveNewCars = (props) => {
    const { newCars } = props;
    return (
        <div className="new-cars">
            {
                newCars.map((newcar, index) => {
                    return (
                        <Link to="/cardetail" className="car-item mt-3" key={index}> 
                            <Carousel>
                                {
                                    newcar.images.map((img, index1) => {
                                        return (
                                            <Carousel.Item key={index1}>
                                                <img
                                                className="d-block w-100"
                                                src={img}
                                                alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>Name of NFT</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                            <div className="content">
                                <div className="car-info">
                                    <div className="d-flex gap-2">Name of NFT</div>
                                    <div className="d-flex gap-2">{newcar.country}</div>
                                </div>
                                <div style={{backgroundColor: '#FFFFFF', opacity: 0.1, borderRadius: '28px', width: '100%', height: '3px', marginTop: '21.5px', marginBottom: '21.5px'}}></div>
                                <div className="car-desc">
                                    <Link to="/cardetail">
                                        By purchasing this NFT you become the lifetime owner of this car up to 5%.
                                        <Button className="btn-read-more">Read More</Button>
                                    </Link>
                                </div>
                            </div>
                            <Button className="btn-dictribution">{newcar.distribution}</Button>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default NewCars;