import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarComp.css';

const NavbarComp = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
                <Link to="/">
                    <Navbar.Brand className="NavbarBrand" style={{ fontSize: '35px' }} >Sportify</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav >
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <div className="NavLink1" style={{ color: 'white', textDecoration: 'none' }}>About Sportify</div>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <div className="NavLink2" style={{ color: 'white' }}>
                                Contact Me
                            </div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;
