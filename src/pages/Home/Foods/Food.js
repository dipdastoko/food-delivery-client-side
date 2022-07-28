import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const Food = ({ food }) => {
    const { img, name, price } = food;

    const navigate = useNavigate();

    const handleOrderFood = () => {
        navigate('/orderfood');
    }

    return (

        <Col className='mb-3' xs={{ span: 6, offset: 3 }} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>

            <div className="card" style={{ width: '18rem' }}>

                <img src={img} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}tk</p>
                    <button onClick={handleOrderFood} type="button" className="btn btn-primary">Order Food</button>
                </div>
            </div>
        </Col>
    );
};

export default Food;