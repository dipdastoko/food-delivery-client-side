import React from 'react';
import './BusinessCarrer.css';

const BusinessCarrer = () => {
    return (
        <div className='text-start ms-5 mt-3'>
            <h2 className='text-success'>Business & Carrer</h2>
            <hr />
            <div className='d-flex justify-content-between mx-2'>
                <div className='w-25'>
                    <h4>Want to sell Food??</h4>
                    <p>Owns a restaurant or can you cook well? If yes, then we are here for you. Start your business today with us.</p>
                    <button className='btn btn-danger'>Contact Us</button>
                </div>
                <div className='vl'></div>
                <div className='w-25'>
                    <h4>Got a motorcycle or bicycle?</h4>
                    <p>Do you have a motorcycle or bicycle? If yes, then you can start your career with us as a food delivery man.</p>
                    <button className='btn btn-danger'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessCarrer;