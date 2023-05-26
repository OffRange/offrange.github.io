import React from "react"
import { Logo } from "../assets"
import { Col, Container, Image, Nav, NavItem, NavLink, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export function Footer({ projectInfo }) {
    return (
        <>
            <Container>
                <footer className=" py-5 my-5 border-top">
                    <Row className="d-flex flex-wrap justify-content-between">
                        <Col md="4" className="mb-3">
                            <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                <Image alt="Logo" src={Logo} fluid className="d-block rounded-4" width="40" height="40" />
                            </Link>
                            <p className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} OffRange</p>
                        </Col>
                        {
                            projectInfo && !(Object.keys(projectInfo).length === 0 && Object.getPrototypeOf(projectInfo) === Object.prototype) && <>
                                <Col md="3" className="mb-3" id="project-info">
                                    <h5>Project information</h5>
                                    <Nav className="flex-column">
                                        <NavItem className="mb-2">
                                            <p className="mb-0 text-body-secondary">Downloads: {projectInfo.downloads.sum} [{projectInfo.downloads.latest}]</p>
                                        </NavItem>
                                        <NavItem className="mb-2">
                                            <NavLink href={projectInfo.versions.releasesUrl} className="p-0 text-body-secondary">Latest version: {projectInfo.versions.latest.tag}</NavLink>
                                        </NavItem>
                                        <NavItem className="mb-2">
                                            <p className="mb-0 text-body-secondary">License: {projectInfo.license}</p>
                                        </NavItem>
                                    </Nav>
                                </Col>
                            </>
                        }

                        <Col md="3" className="mb-3">
                            <h5>Links</h5>
                            <Nav className="flex-column">
                                <NavItem className="mb-2">
                                    <NavLink href="/" className="p-0 text-body-secondary">Home</NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink href="#/products" className="p-0 text-body-secondary">Products</NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink href="#/support-me" className="p-0 text-body-secondary">Support Me</NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink href="#/legal-disclosure" className="p-0 text-body-secondary">Legal Disclosure (Impressum)</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    )
}