import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarComp.css';

const NavbarComp = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
                <Navbar.Brand className="NavbarBrand" style={{ fontSize: '35px' }} >Sportify</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav >
                        <Link to="/chat" style={{ textDecoration: 'none' }}>
                            <Nav.Link className="NavLink1" style={{ color: 'white', textDecoration: 'none' }}>Voice sports news.</Nav.Link>
                        </Link>
                        <Link style={{ textDecoration: 'none' }}>
                            <Nav.Link className="NavLink2" style={{ color: 'white' }}>
                                About
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;
