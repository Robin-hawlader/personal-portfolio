import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bike from '../../images/project-image/bike-project/bike-p-2.png'
import doctor from '../../images/project-image/medi-dov/doctor-p-1.png'
import travel from '../../images/project-image/travel/travel-3.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Project.css'

const Project = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div data-aos='fade-up' id='project'>
            <h2>Project</h2>
            <Container className='project'>
                <Row md={2} xs={1} sm={1}>
                    <Col>
                        <div className='border m-3 project-details'>
                            <img className='img-fluid' src={bike} alt="" />
                            <a href="https://modern-bike-ebce6.web.app/home" target="_blank" rel="noopener noreferrer"><Button className='mx-3 my-2'>Explore</Button></a>
                            <Link to='motorDetails'><Button className='mx-3 my-2'>Details</Button></Link>

                        </div>
                    </Col>
                    <Col>
                        <div className='border m-3 project-details'>
                            <img className='img-fluid' src={doctor} alt="" />
                            <a href="https://health-care-services-b0b5c.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><Button className='mx-3 my-2'>Explore</Button></a>
                            <Link to='doctorDetails'><Button className='mx-3 my-2'>Details</Button></Link>
                        </div>
                    </Col>
                    <Col>
                        <div className='border m-3 project-details'>
                            <img className='img-fluid' src={travel} alt="" />
                            <a href="https://world-travel-58a93.web.app/" target="_blank" rel="noopener noreferrer"><Button className='mx-3 my-2'>Explore</Button></a>
                            <Link to='travelDetails'><Button className='mx-3 my-2'>Details</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;