import React from 'react';
import useAuth from '../../Hooks/useAuth';

const ManageAllOrders = () => {
    const { allOrders } = useAuth();

    return (
        <div>
            <h2>Manage All Orders</h2>
            {
                allOrders.map(order =>
                    <div className='d-flex justify-content-between border mx-5 p-5 my-4'>
                        <div key={order._id} >
                            <div>
                                <img style={{ height: '150px' }} src={order.img} alt="" />
                                <h5>{order.name}</h5>
                            </div>
                            <p>Price: {order.price}tk</p>
                            <button className='btn btn-primary'>Cancel Order</button>
                        </div>
                        <div>
                            <h2>To</h2>
                            <blockquote><u>Address</u>
                                <p>{order.address}</p>
                                <p>{order.address2}</p>
                            </blockquote>
                            <h6>Phone: {order.phone}</h6>
                            <h6>Email: {order.email}</h6>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageAllOrders;