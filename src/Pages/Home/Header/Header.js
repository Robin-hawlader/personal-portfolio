import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed='top' bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'>Personal portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto link-decorate">
                            <HashLink to='/#home'>Home</HashLink>
                            <HashLink to='/#project'>Project</HashLink>
                            <HashLink to='/#contact'>Contact</HashLink>
                            <HashLink to='/#about'>About</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;