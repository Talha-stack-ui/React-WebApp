import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'


const Navigation = () => {
  return (
    <Navbar sticky="top" className="color-nav" expand="lg">
      <Container>
      <LinkContainer to="/">
        <Navbar.Brand>Taaba <small>Engineering</small></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item > <LinkContainer to="/batteries"><Nav.Link>Batteries</Nav.Link></LinkContainer></NavDropdown.Item>
              <NavDropdown.Item ><LinkContainer to="/scooters"><Nav.Link>Electric</Nav.Link></LinkContainer></NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/contact">
              <Nav.Link >Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
