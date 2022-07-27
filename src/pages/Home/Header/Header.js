import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import banner from '../../../images/food-delivery-banner.jpg';
import './Header.css';

const Header = () => {
    return (
        <div >
            <img className='banner' src={banner} alt="" />
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#home">FoodPick</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to='/home' className='my-1'>Home</NavLink>
                            <NavLink className='mx-4 my-1' to='/login'>Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;