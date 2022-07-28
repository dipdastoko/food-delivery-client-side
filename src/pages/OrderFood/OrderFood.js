import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const OrderFood = () => {
    const { allFoods, firebase } = useAuth();
    const { foods } = allFoods;

    const { foodId } = useParams();

    const selectedFood = foods.find(food => food._id === foodId);
    const { name, img, price, description } = selectedFood;
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
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" value={firebase.user.email} className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
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