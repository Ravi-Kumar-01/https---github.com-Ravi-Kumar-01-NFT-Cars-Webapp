import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import '../assets/scss/Contract.scss';
import { getWindowDimensions } from "../assets/js/globalFuns";

const Contract = () => {
    const contracts = [
        {date: 'Mar 20, 2019 23:14', name: 'Binford Ltd.', document: ''},
        {date: 'Feb 2, 2019 19:28', name: 'Barone LLC.', document: ''},
        {date: 'Dec 30, 2019 05:18', name: 'Acme Co.', document: ''}
    ];
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
        <div className="contract">
            <Row className="mt-3 contracts">
                <h5 className="contracts-title">Contracts</h5>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contracts.map((contract, index) => {
                                    return (
                                        <tr key={index} style={{backgroundColor: `${index % 2 === 0 ? '#282C38' : 'transparent'}`}}>
                                            <td>{contract.date}</td>
                                            <td>{contract.name}</td>
                                            <td><Button><BsDownload />{windowSize.width > 576 ? 'Download' : ''}</Button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Contract;