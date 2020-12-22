import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
export default class Headrer extends Component {

    render() {
        const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link eventKey="1" href="#/home">
                                NavLink 1 content
                  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" title="Item">
                                NavLink 2 content
                  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" disabled>
                                NavLink 3 content
                  </Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Dropdown" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    };
}
