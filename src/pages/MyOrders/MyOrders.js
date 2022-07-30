import React from 'react';
import useAuth from '../../Hooks/useAuth';

export const handleCancelOrder = id => {
    const confirm = window.confirm('Cancel Order. Are you sure?');

    if (confirm) {
        fetch(`http://localhost:5000/cancelOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
};

const MyOrders = () => {
    const { allOrders, firebase } = useAuth();

    const myOrders = allOrders.filter(myOrder => firebase.user.email === myOrder.email);


    return (
        <div>
            <h2>My Orders</h2>
            {
                myOrders.map(order =>
                    <div key={order._id} className='border mx-5 py-3 my-4'>
                        <div>
                            <img style={{ height: '150px' }} src={order.img} alt="" />
                            <h5>{order.name}</h5>
                        </div>
                        <p>Price: {order.price}tk</p>
                        <button onClick={() => handleCancelOrder(order._id)} className='btn btn-primary'>Cancel Order</button>
                    </div>
                )
            }

        </div>
    );
};

export default MyOrders;