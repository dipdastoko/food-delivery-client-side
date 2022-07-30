import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const OrderFood = () => {
    const { allFoods, firebase } = useAuth();
    const { foods } = allFoods;

    const { foodId } = useParams();

    const selectedFood = foods.find(food => food._id === foodId);
    const { name, img, price, description } = selectedFood;

    const navigate = useNavigate();

    // values from the fields
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const customerPhone = e => {
        setPhone(e.target.value);
    }
    const customerAddress = e => {
        setAddress(e.target.value);
    }
    const customerAddress2 = e => {
        setAddress2(e.target.value);
    }

    const orderDetails = {
        name, img, price, email: firebase.user.email, phone, address, address2
    }

    const handleOrderNow = e => {
        e.preventDefault();

        const confirm = window.confirm('Click ok to confirm');
        if (confirm) {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderDetails)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert(`order confirmed`);
                    navigate('/');

                });
        }


    }
    return (
        <Container>
            <Row>
                <Col >
                    <div>
                        <h2>{name}</h2>
                        <img style={{ height: '400px' }} src={img} alt="" />
                        <p><b>Price: {price}tk</b></p>
                        <blockquote>{description}</blockquote>
                    </div>
                </Col>
                &nbsp; &nbsp;
                <Col>
                    <div>
                        <h5>Provide Information</h5>
                        <form onSubmit={handleOrderNow} className="row g-3">
                            {/* Email Field */}
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" value={firebase.user.email || ''} readOnly className="form-control" id="inputEmail4" />
                            </div>

                            {/* Phone Number */}
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Phone</label>
                                <input onChange={customerPhone} type="text" className="form-control" id="inputPassword4" required />
                            </div>

                            {/* Address */}
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" onChange={customerAddress} className="form-control" id="inputAddress" placeholder="1234 Main St" required />
                            </div>

                            {/* Address2 */}
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" onChange={customerAddress2} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>

                            {/* Submit Button */}
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Order Now</button>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderFood;