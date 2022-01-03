import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
import shortImg from '../../images/my-image/IMG_20210925_075014 (1).jpg'


const Footer = () => {
    return (
        <div className='bg-dark p-3'>
            <Container >
                <Row md={3} sm={2} xs={2}>
                    <Col className=''>
                        <h3>My profile</h3>
                        <p>

                            <a href="https://www.facebook.com/rjtonmoyislam.robin" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className='fs-5 text-light'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook</a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/muhammadrobin360/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className='fs-5 text-light'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram</a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/robin-hawlader-830867220/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className='fs-5 text-light'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> Linkedin</a>
                        </p>
                    </Col>
                    <Col>
                        <p>
                            <HashLink style={{ textDecoration: 'none' }} className='text-light fs-5' to='/#home'>Home</HashLink>
                        </p>
                        <p>
                            <HashLink style={{ textDecoration: 'none' }} className='text-light fs-5' to='/#project'>Project</HashLink>

                        </p>
                        <p>
                            <HashLink style={{ textDecoration: 'none' }} className='text-light fs-5' to='/#contact'>Contact</HashLink>

                        </p>
                        <p>
                            <HashLink style={{ textDecoration: 'none' }} className='text-light fs-5' to='/#about'>About</HashLink>
                        </p>
                    </Col>
                    <Col>
                        <img src={shortImg} style={{ height: '100px', width: '100px', borderRadius: '100px' }} alt="" />
                        <h1>Web developer</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;