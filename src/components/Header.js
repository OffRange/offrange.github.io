import React, { Component } from "react"
import { Link, NavLink } from "react-router-dom"
import { Container, Image, Nav, NavItem } from "react-bootstrap"
import { Logo } from "../assets"

class Header extends Component {
  render() {
    return (
      <header>
        <Container className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <Image alt="Logo" src={Logo} className="rounded-4 me-2 mx-auto d-block" fluid width="32" height="32" />
            <span className="fs-4">OffRange</span>
          </Link>

          <Nav variant="pills">
            <NavItem>
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products/passwordmanager" className='nav-link'>Password Manager</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/support-me" className='nav-link'>Support Me</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </header>
    )
  }
}

export default Header