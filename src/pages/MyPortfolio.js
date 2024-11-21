import { Button, Col, Dropdown, Form, Row, Table } from "react-bootstrap";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { BsChevronDown } from 'react-icons/bs';
import '../assets/scss/MyPortfolio.scss';
import { Chart as ChartJS, BarElement, Tooltip, Legend, BarController, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from "react-chartjs-2";
import NewCars from "../components/NewCars";
import { useEffect, useState } from "react";
import BUSDLogo from '../assets/images/Layer 50.png';
import rateLogo from '../assets/images/Ellipse 90.png';
import Countries from '../utils/countries.json';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Iframe from 'react-iframe'
import { getWindowDimensions } from "../assets/js/globalFuns";
import { contracts } from "../utils/contracts";
import { incomeData, monthlydata, quarterlydata, annualdata, totalCommissions } from "../constants";

ChartJS.register(BarController, BarElement, Tooltip, Legend, CategoryScale, LinearScale);
const states = [
    {img: require('../assets/images/nft.png'), name: 'Number of NFT', value: '3'},
    {img: require('../assets/images/month.png'), name: 'Current Month Received', value: '$115 BUSD'},
    {img: require('../assets/images/Chart.png'), name: 'Interest Rate', value: '5%'},
    {img: require('../assets/images/collection.png'), name: 'Total Received', value: '$750 BUSD'},
];

const MyPortfolio = () => {
    const [ filterCountry, setFilterCountry ] = useState('Country');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const handleCountry = (data) => {
        setFilterCountry(data.name)
    }
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
        <div className="my-portfolio">
            <Row className="mt-3">
                <Col lg={4} md={12} sm={12} xs={12} className="mt-3">
                    {
                        windowSize.width > 576 ? 

                        <div className="statistical-total-performance">
                            <h5>Statistical Total Performance</h5>
                            {
                                states.map((state, index) => {
                                    return (
                                        <div className="nft-status" key={index}>
                                            <img src={state.img} alt="" width="20" height="20" />
                                            <div className="d-flex justify-content-between mt-1">
                                                <p>{state.name}</p><p>{state.value}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <ResponsiveStatisticalPerformance />
                    }
                </Col>
                <Col lg={4} md={12} sm={12} xs={12} className="mt-3">
                    <div className="income-statistics">
                        <h5>Income statistics</h5>
                        <div className="d-flex justify-content-center w-100">
                            <RadarChart height={500} width={300} 
                                outerRadius="100%" data={incomeData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="name" />
                                <PolarRadiusAxis />
                                <Radar dataKey="x" stroke="#AAFF00" 
                                    fill="#AAFF00" />
                            </RadarChart>
                        </div>
                        <Button className="btn-select-nft w-100">Select the NFT <BsChevronDown /> </Button>
                        <Row className="mt-5">
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <div className="about-nft">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>Location</p><p className="text-green">France</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>Month Received</p><p className="text-green">$115</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <div className="about-nft">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>Interest rate</p><p className="text-green">5%</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>Total Received</p><p className="text-green">$750</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <h6 className="mt-5">Find all the statistics of your activity. You can choose an NFT individually.</h6>
                    </div>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12} className="mt-3">
                    <div className="some-income">
                        <div className="monthly-income income-item">
                            <div className="title">Monthly Income</div>
                            <div style={{maxWidth: "650px"}}>
                                <Bar data={monthlydata} />
                            </div>
                        </div>
                        <div className="quarterly-income income-item">
                            <div className="title">Quarterly Income</div>
                            <div style={{maxWidth: "650px"}}>
                                <Bar data={quarterlydata} />
                            </div>
                        </div>
                        <div className="annual-income income-item">
                            <div className="title">Annual Income</div>
                            <div style={{maxWidth: "650px"}}>
                                <Bar data={annualdata} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <h5 className="text-center nft-cars-title mt-4 mb-4">My NFT Cars</h5>
            <NewCars />
            <Iframe src="https://www.google.com/maps/d/embed?mid=18LZ4L4OGy3yxoDS5qnBcF-LFA7iYBgg&ehbc=2E312F" width="100%" height="480" className="mt-5"></Iframe>
            <Row className="mt-3">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="history-of-commissions">
                        <h5 className="title">History of commissions</h5>
                        <Form.Text className="sub-title">List of Commissions Received</Form.Text>
                        <div className="filter">
                            <div className="date-from">
                                <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} />
                            </div>
                            <div className="date-to">
                                <DatePicker selected={toDate} onChange={(date) => setToDate(date)} />
                            </div>
                            <div className="list-nfts">
                                <Form.Select>
                                    <option>List of NFTs</option>
                                </Form.Select>
                            </div>
                            <div className="country">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {filterCountry}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            Countries.map((country, index) => {
                                                return (
                                                    <Dropdown.Item key={index} onClick={() => handleCountry(country)}>
                                                        <img src={country.image} alt="" width="20px" height="20px" />{country.name}
                                                    </Dropdown.Item>
                                                )
                                            })
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="total-commissions">
                                Total Commissions = ${totalCommissions} BUSD
                            </div>
                        </div>
                        <div className="" style={{overflowX: 'auto'}}>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name of NFT</th>
                                        <th>Country</th>
                                        <th>Interest Rate</th>
                                        <th>TX</th>
                                        <th>Commission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        contracts.map((contract, index) => {
                                            return (
                                                <tr key={index} style={{backgroundColor: `${index % 2 === 0 ? '#282C38' : 'transparent'}`}}>
                                                    <td>{contract.date}</td>
                                                    <td>{contract.name}</td>
                                                    <td><img src={contract.image} style={{borderRadius: "50%"}} alt="" width="24px" height="24px" /> {contract.countryName}</td>
                                                    <td className=""><img src={rateLogo} alt="" width="17px" height="17px" />% {contract.interestRate}</td>
                                                    <td>{contract.name}</td>
                                                    <td><Button><img src={BUSDLogo} alt="" width="21.75px" height="21.75px" />BUSD $115</Button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const ResponsiveStatisticalPerformance = () => {
    return (
        <Row>
            <h5 style={{ fontSize: '18px', fontWeight: '600', lineHeight: '32px', fontFamily: 'Inter', color: 'white' }}>Statistical Total Performance</h5>
            {
                states.map((state, index) => {
                    return (
                        <Col xs={6} className="mt-3" key={index}>
                            <div className="statistical-total-performance">
                                <div className="nft-status" key={index}>
                                    <img src={state.img} alt="" width="20" height="20" />
                                    <div className="mt-3">
                                        <p>{state.name}</p><p>{state.value}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default MyPortfolio;