import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './About.css'

const Project = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div id='project'>
            <h2>About me</h2>
            <Container>
                <Row md={2} sm={1} xs={1}>
                    <Col data-aos='fade-right' className='p-5'>

                    </Col>
                    <Col data-aos='fade-left'>
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