import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import banner from '../../../images/food-delivery-banner.jpg';
import './Header.css';

const Header = () => {
    const { firebase } = useAuth();
    const { user, logOut } = firebase;

    return (
        <div className='txt'>
            <img className='banner' src={banner} alt="" />
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#">Healty Food</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to='/home' className='mx-4 my-1 text-decoration-none'>Home</NavLink>
                            {!user.email ? <NavLink className='text-decoration-none mx-4 my-1' to='/login'>Login</NavLink>
                                :
                                <>
                                    <NavLink className='text-decoration-none mx-4 my-1' to='/myOrders'>My Orders</NavLink>

                                    <NavLink className='text-decoration-none mx-4 my-1' to='/allOrders'>Manage All Orders</NavLink>

                                    <NavLink className='text-decoration-none mx-4 my-1' to='/addNewFood'>Add New Food</NavLink>

                                    <NavLink className='mx-4 my-1' to='/'><button onClick={logOut} className='btn btn-primary'>Log Out</button></NavLink>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;