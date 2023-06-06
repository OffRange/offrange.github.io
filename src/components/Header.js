import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Container, Image, Nav, NavItem, Navbar } from "react-bootstrap"
import { Logo } from "../assets"

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Navbar bg="body-tertiary" variant="dark" expand='lg' className="rounded" >
            <Container>
              <Navbar.Brand className="d-flex align-items-center">
                <Image alt="Logo" src={Logo} className="rounded-circle me-2 mx-auto d-block" fluid width="32" height="32" />
                <span className="fs-4">OffRange</span>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-md-end">
                <Nav>
                  <NavItem>
                    <NavLink to="/" className='nav-link'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/projects/passwordmanager" className='nav-link'>Password Manager</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/projects/pass-strength-ai" className='nav-link'>Password Strength AI</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/support-me" className='nav-link'>Support Me</NavLink>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header