import React from 'react';
import DownloadApp from '../DownloadApp/DownloadApp';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Foods></Foods>
            <DownloadApp />
            <Footer></Footer>
        </div>
    );
};

export default Home;