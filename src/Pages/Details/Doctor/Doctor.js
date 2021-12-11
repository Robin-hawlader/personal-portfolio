import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import medi1 from '../../../images/project-image/medi-dov/doctor-p-1.png'
import medi2 from '../../../images/project-image/medi-dov/doctor-p-2.png'
import medi3 from '../../../images/project-image/medi-dov/doctor-p-3.png';

const Motor = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row md={2} sm={1} xs={1}>
                    <Col md={7}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={medi1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={medi2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={medi3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={5}>
                        <div style={{ textAlign: 'left', lineHeight: '3' }}>
                            <h2>Medi-dov</h2>
                            <p>The medicale service provider.</p>
                            <h4>Fetures</h4>
                            <ul>
                                <li>User can Register this page an login.</li>
                                <li>User can order product and manage his/her order.</li>
                                <li>A simple service providing website with react js</li>
                            </ul>
                            <h2>Technology used</h2>
                            <p>
                                <b>
                                    <span className='bg-light text-dark p-2 ms-2'>HTML</span>
                                    <span className='bg-light text-dark p-2 ms-2'>CSS</span>
                                    <span className='bg-light text-dark p-2 ms-2'>React</span>
                                    <span className='bg-light text-dark p-2 ms-2'>Fire-base</span>
                                </b>
                            </p>
                            <a href="https://github.com/Robin-hawlader/health-care" target="_blank" rel="noopener noreferrer"><Button>Code link</Button></a>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Motor;