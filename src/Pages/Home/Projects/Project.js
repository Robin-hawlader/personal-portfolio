import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Project = () => {
    return (
        <div id='project'>
            <h2>Projects</h2>
            <Container>
                <Row md={2} sm={1} xs={1}>
                    <Col>
                        <div className='border m-3'>
                            <h2>1. Bike Bazar</h2>
                            <p>User can login into the project explore and buy Motorcycle</p>
                            <Button className='mx-3 my-2'>Explore</Button>
                            <Button className='mx-3 my-2'>Details</Button>
                        </div>
                        <div className='border m-3'>
                            <h2>2. Medi Dov</h2>
                            <p>User can Login an Logout in the page and select item .</p>
                            <Button className='mx-3 my-2'>Explore</Button>
                            <Button className='mx-3 my-2'>Details</Button>
                        </div>
                        <div className='border m-3'>
                            <h2>2. World Travel</h2>
                            <p>By loggining in to this app, a user will be able to view and select the items.The selected product can be controlled by the user. and place added.</p>
                            <Button className='mx-3 my-2'>Explore</Button>
                            <Button className='mx-3 my-2'>Details</Button>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;