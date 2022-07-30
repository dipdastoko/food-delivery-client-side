import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewFood = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');

    const getName = e => {
        setName(e.target.value);
    };
    const getPrice = e => {
        setPrice(e.target.value);
    };
    const getImg = e => {
        setImg(e.target.value);
    };
    const getDescription = e => {
        setDescription(e.target.value);
    };

    const newFood = { name, img, price, description };

    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
        console.log('hello');
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch('http://localhost:5000/newFood', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newFood)

            })
                .then(res => res.json())
                .then(data => {
                    navigate('/');
                });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <h2>Add New Food</h2>
                <p><b>Name</b></p>
                <input onChange={getName} type="text" required /><br />
                <br />
                <p><b>Price</b></p>
                <input onChange={getPrice} type="text" placeholder='insert a number' required /><br />
                <br />
                <p><b>Image Link</b></p>
                <input onChange={getImg} type="text" placeholder='insert an image link' required /><br />
                <br />
                <p><b>Description</b></p>
                <textarea onChange={getDescription} name="" id="" cols="50" rows="5"></textarea><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddNewFood;