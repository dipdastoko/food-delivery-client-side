import React from 'react';
import { Link } from 'react-router-dom';
const DownloadApp = () => {
    return (
        <div className='border border-primary m-2'>
            <h2>Download Our App</h2>
            <Link to='#'>
                <img style={{ height: '100px' }} src="https://i.ibb.co/742QSFh/apple-app-store.png" alt="" />
            </Link>
            &nbsp;
            &nbsp;
            &nbsp;
            <Link to='#'>
                <img style={{ height: '135px' }} src="https://i.ibb.co/MCrGgpp/google-play-store.png" alt="" />
            </Link>
        </div>
    );
};

export default DownloadApp;