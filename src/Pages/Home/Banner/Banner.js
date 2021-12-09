import React from 'react';
import './Banner.css'
import picture from '../../../images/my-image/IMG_20210621_222237-removebg-preview.png';
import Typical from 'react-typical'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner-property d-md-flex' id='home'>
            <div>
                <h1>Hello Iam Robin hawlader</h1>
                <h3>I am a <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Web Developer',
                        1000,
                        'Full stack developer',
                        1000,
                    ]}
                />
                </h3 >

                <a href="https://drive.google.com/file/d/1ICvPx8xTdHry8cwPm-970y0kYORtiF3B/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Button variant='primary'>Resume</Button></a>
            </div>
            <div>
                <img className='img-fluid' src={picture} alt="" />
            </div>
        </div>
    );
};

export default Banner;