import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'

const Navbars = () => {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand to="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/order">Order</Nav.Link>
        <Nav.Link href="/payment">Payment</Nav.Link>
      </Nav>
    </Navbar>   
    );
};

export default Navbars;