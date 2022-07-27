import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white p-4'>
            <div className='d-flex justify-content-between mx-5 mb-3'>
                <h5>About Us</h5>
                <h5>Privacy Policies</h5>
                <h5>Terms and Conditions</h5>
            </div>
            <div className='d-flex justify-content-between mx-5'>
                <h5>Blog</h5>
                <h5>Press</h5>
                <h5>Contact</h5>
            </div>
            <hr />
            <span>Follow Us</span>
            <hr />
            <div className='d-flex justify-content-center'>
                <h2><FontAwesomeIcon icon={faFacebook} /></h2>
                <h2 className='mx-5'><FontAwesomeIcon icon={faInstagram} /></h2>
                <h2><FontAwesomeIcon icon={faTwitter} /></h2>
            </div>
        </div>
    );
};

export default Footer;