import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import travel1 from '../../../images/project-image/travel/travel-1.png'
import travel2 from '../../../images/project-image/travel/travel-2.png'
import travel3 from '../../../images/project-image/travel/travel-3.png'

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
                                    src={travel1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={travel2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={travel3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={5}>
                        <div style={{ textAlign: 'left', lineHeight: '3' }}>
                            <h2>World Travel Express</h2>
                            <p>This website is Travel place Booking.</p>
                            <h4>Fetures</h4>
                            <ul>
                                <li>User can Register this page an login.</li>
                                <li>A complete Tour packages selling website with google authentication</li>
                                <li>A complete Tour packages selling website with google authentication</li>
                                <li>User can add new package.</li>
                                <li>There is also an option to check all booking from all users</li>
                            </ul>
                            <h2>Technology used</h2>
                            <p>
                                <b>
                                    <span className='bg-light text-dark p-2 ms-2'>HTML</span>
                                    <span className='bg-light text-dark p-2 ms-2'>CSS</span>
                                    <span className='bg-light text-dark p-2 ms-2'>Bootstrap</span>
                                    <span className='bg-light text-dark p-2 ms-2'>Mongodb</span><br />
                                    <span className='bg-light text-dark p-2 ms-2'>React js</span>
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