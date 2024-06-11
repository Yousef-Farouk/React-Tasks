import React from "react";

import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

export default function MyNav() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink  className = "nav-link" to="/">Home</NavLink>
                        <NavLink className = "nav-link"  to="/products">Products</NavLink>
                        {/* <NavLink className = "nav-link">Pricing</NavLink> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}