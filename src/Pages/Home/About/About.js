import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import picture from '../../../images/my-image/IMG_20210621_222237-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Project = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div data-aos='fade-up' id='about'>
            <Container>
                <Row>
                    <Col md={8} xs={8} className='text-start fs-5 p-4'>
                        <p>About me</p>
                        <p>It is an honor for me to introduce myself as Robin hawlader, a frontend and junior MERN Stack developer. I have an experience with over 200+ client site pages.</p>
                    </Col>
                    <Col md={4} xs={4} className='mt-5'>
                        <a href="https://drive.google.com/file/d/1ICvPx8xTdHry8cwPm-970y0kYORtiF3B/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Button variant='primary'>Resume</Button></a>
                    </Col>
                </Row>
            </Container>
            <Container style={{ listStyle: 'none', }}>
                <Row md={3} sm={1} xs={1}>
                    <Col>
                        <img src={picture} className='img-fluid' style={{ height: '500px', backgroundColor: 'rgb(57 58 70)' }} alt="" />
                    </Col>
                    <Col className='text-start fs-5 p-4' style={{ lineHeight: '2.5' }}>
                        <p>Basic info</p>
                        <p>Name: Robin hawlader</p>
                        <p>Date of Birth: 01/01/2001</p>
                        <p>Phone: 01797300360</p>
                        <p>Email: robinhawlader360@gmail.com</p>
                        <p>Adress: Madaripur,Bangladesh</p>
                        <a href="https://www.facebook.com/rjtonmoyislam.robin" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className='fs-2'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/robin-hawlader-830867220/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#3b5997' }} className='fs-2 ms-4'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    </Col>
                    <Col>
                        <div className='skils w-100'>
                            <p>Project Skills</p>
                            <li>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p>HTML5</p>
                                    <p>90%</p>
                                </div>
                                <span className='bar'><span className='html'></span></span>

                            </li>
                            <li>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p>CSS3</p>
                                    <p>85%</p>
                                </div>
                                <span className='bar'><span className='css'></span></span>

                            </li>
                            <li>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p>Javascript</p>
                                    <p>95%</p>
                                </div>
                                <span className='bar'><span className='javascript'></span></span>

                            </li>
                            <li>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p>Node js</p>
                                    <p>50%</p>
                                </div>

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