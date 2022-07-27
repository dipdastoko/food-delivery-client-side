import React from 'react';
import BusinessCarrer from '../BusinessCarrer/BusinessCarrer';
import DownloadApp from '../DownloadApp/DownloadApp';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Foods></Foods>
            <BusinessCarrer />
            <DownloadApp />
            <Footer></Footer>
        </div>
    );
};

export default Home;