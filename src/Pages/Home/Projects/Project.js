import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Projects.css'

const Project = () => {
    return (
        <div id='project'>
            <h2>Projects</h2>
            <Container>
                <Row md={2} sm={1} xs={1}>
                    <Col className='p-5'>
                        <div className='border m-3'>
                            <h2>1. Bike Bazar</h2>
                            <p>User can login into the project explore and buy Motorcycle</p>
                            <a href="https://modern-bike-ebce6.web.app/home" target="_blank" rel="noopener noreferrer"><Button className='mx-3 my-2'>Explore</Button></a>
                            <Button className='mx-3 my-2'>Details</Button>
                        </div>
                        <div className='border m-3'>
                            <h2>2. Medi Dov</h2>
                            <p>User can Login an Logout in the page and select item .</p>
                            <a href="https://health-care-services-b0b5c.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><Button className='mx-3 my-2'>Explore</Button></a>
                            <Button className='mx-3 my-2'>Details</Button>
                        </div>
                        <div className='border m-3'>
                            <h2>2. World Travel</h2>
                            <p>By loggining in to this app, a user will be able to view and select the items.The selected product can be controlled by the user. and place added.</p>
                            <a href="https://world-travel-58a93.web.app/" target="_blank" rel="noopener noreferrer"><Button className='mx-3 my-2'>Explore</Button></a>
                            <Button className='mx-3 my-2'>Details</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className='skils'>
                            <h1>Project Skills</h1>
                            <li>
                                <h3>HTML5</h3>
                                <span className='bar'><span className='html'></span></span>

                            </li>
                            <li>
                                <h3>CSS3</h3>
                                <span className='bar'><span className='css'></span></span>

                            </li>
                            <li>
                                <h3>Javascript</h3>
                                <span className='bar'><span className='javascript'></span></span>

                            </li>
                            <li>
                                <h3>Node js</h3>
                                <span className='bar'> <span className='node'></span></span>

                            </li>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;