import React from 'react';
import banner from '../../../images/my-image/banner.png'

const Thumbnail = () => {
    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
        </div>
    );
};

export default Thumbnail;