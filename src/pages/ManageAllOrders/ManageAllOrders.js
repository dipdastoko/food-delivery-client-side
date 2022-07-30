import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { handleCancelOrder } from '../MyOrders/MyOrders';

const ManageAllOrders = () => {
    const { allOrders } = useAuth();

    const handleApprove = id => {
        const orderToApprove = allOrders.find(order => order._id === id);
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderToApprove)
        })
            .then(res => res.json())
            .then(data => null);
    }

    return (
        <div>
            <h2>Manage All Orders</h2>
            {
                allOrders.map(order =>
                    <div key={order._id} className='d-flex justify-content-center border mx-3 p-2 my-4'>
                        <div key={order._id} >
                            <div>
                                <img style={{ height: '150px' }} src={order.img} alt="" />
                                <h5>{order.name}</h5>
                            </div>

                            <p>Price: {order.price}tk</p>

                            <p>Status: <span className={order.status === 'Pending' ? 'text-dark bg-warning p-1 rounded-2' : 'text-white bg-primary p-1 rounded-2'}>{order.status}</span></p>

                            <button onClick={() => handleApprove(order._id)} className='btn btn-success mt-2'>Approve</button>

                            &nbsp;

                            <button onClick={() => handleCancelOrder(order._id)} className='btn btn-danger mt-2'>Cancel Order</button>
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