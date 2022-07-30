import React from 'react';
import useAuth from '../../Hooks/useAuth';

const ManageAllOrders = () => {
    const { allOrders } = useAuth();

    return (
        <div>
            <h2>Manage All Orders</h2>
            {
                allOrders.map(order =>
                    <div key={order._id} className='border mx-5 py-3 my-4'>
                        <div>
                            <img style={{ height: '150px' }} src={order.img} alt="" />
                            <h5>{order.name}</h5>
                        </div>
                        <p>Price: {order.price}tk</p>
                        <button className='btn btn-primary'>Cancel Order</button>
                    </div>
                )
            }
        </div>
    );
};

export default ManageAllOrders;