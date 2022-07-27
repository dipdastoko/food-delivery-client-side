import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Food from './Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div>
            <h2 className='my-3'>Order Your Food</h2>
            <hr />
            <Container>
                <Row>
                    {
                        foods.map(food => <Food key={food._id} food={food}></Food>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Foods;