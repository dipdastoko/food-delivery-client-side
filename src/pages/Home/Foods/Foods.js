import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Food from './Food';

const Foods = () => {
    const { allFoods } = useAuth();
    const { foods } = allFoods;
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