import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import bike1 from '../../../images/project-image/bike-project/bike-p-1.png'
import bike2 from '../../../images/project-image/bike-project/bike-p-2.png'
import bike3 from '../../../images/project-image/bike-project/bike-p-3.png'

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
                                    src={bike1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={bike2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={bike3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={5}>
                        <div style={{ textAlign: 'left', lineHeight: '3' }}>
                            <h2>Bike-bazar</h2>
                            <p>This website is Motorcycle buying web site.</p>
                            <h4>Fetures</h4>
                            <ul>
                                <li>User can Register this page an login.</li>
                                <li>User can order product and manage his/her order.</li>
                                <li>This page will have an admin who will handle the orders and can do multiple admins.</li>
                                <li>Users will be able to give reviews about the page.</li>
                                <li>Admin will be able to upload new product page. ETC.</li>
                            </ul>
                            <h2>Technology used</h2>
                            <p>
                                <b>
                                    <span className='bg-light text-dark p-2 ms-2'>HTML</span>
                                    <span className='bg-light text-dark p-2 ms-2'>CSS</span>
                                    <span className='bg-light text-dark p-2 ms-2'>Bootstrap</span>
                                    <span className='bg-light text-dark p-2 ms-2'>Mongodb</span>
                                    <span className='bg-light text-dark p-2 ms-2'>React js</span><br />
                                    <span className='bg-light text-dark p-2 ms-2'>Fire-base</span>
                                    <span className='bg-light text-dark p-2 ms-2'>Nodejs</span>
                                    <span className='bg-light text-dark p-2 ms-2'>Express js</span>
                                </b>
                            </p>
                            <a href="https://github.com/Robin-hawlader/bike-bazar" target="_blank" rel="noopener noreferrer"><Button>Code link</Button></a>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Motor;