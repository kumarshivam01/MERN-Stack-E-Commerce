import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
                <Container fluid>
                <Link style={{textDecoration:'none'}} to='/'>

                    <Navbar.Brand>Shivam Shoap</Navbar.Brand>
                </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ml-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link style={{textDecoration:'none'}} to="/cart">
                            <Nav.Link href="#home">
                            <i className="fa-solid fa-cart-shopping"></i>&nbsp;
                             Cart</Nav.Link>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/signin">
                            <Nav.Link href="#link">
                            <i className="fa-solid fa-user"></i>&nbsp;
                            signin</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
