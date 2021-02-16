import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import React from 'react';

const NavbarComp = () => {
    return (
        <div>
            {/* <Navbar className="justify-content-between" scrolling expand="md" fixed="top" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Sportify</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{ color: 'violet' }} >Home</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'violet' }} >Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}

            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
                <Navbar.Brand href="#home" style={{ fontSize: '35px', marginLeft: "34px" }}>Sportify</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link style={{ color: 'white', fontSize: '19px' }} href="#deets">Chat & Live score</Nav.Link>
                        <Nav.Link style={{ color: 'white', marginRight: '30px', marginLeft: '20px', fontSize: '19px' }} href="#memes">
                            Voice sports news.
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;
