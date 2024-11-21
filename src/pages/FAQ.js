import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { questions } from "../utils/questions";
import '../assets/scss/FAQ.scss';

const FAQ = () => {
    const [ collepse, setCollepse ] = useState(-1);
    const handleCollepse = (id) => {
        if (id === collepse) {
            setCollepse(-1);
        } else {
            setCollepse(id);
        }
    }
    return (
        <div className="faq mt-3">
            <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="questions">
                    {
                        questions.map((question, index) => {
                            return (
                                <div className="w-100 question" key={index} onClick={() => handleCollepse(index)}>
                                    <div className="d-flex justify-content-between align-items-center "><h6>{question.question}</h6>{collepse === index ? <BsChevronUp />:<BsChevronDown /> }</div>
                                    <div className={`answer ${collepse === index ? 'collepse' : ''}`}>
                                        {question.answer}
                                    </div>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    )
}

export default FAQ;