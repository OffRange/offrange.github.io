import { Link } from "gatsby";
import React from "react";
import { Col, Container, Nav, NavItem, NavLink, Row } from "react-bootstrap";
import { getAssetDownloadCount } from "hooks/useGitHubRepoData";
import { StaticImage } from "gatsby-plugin-image";

const ProjectInfo = ({ projectData, privacy }) => {
    return (
        <Col md="3" className="mb-3" id="project-info">
            <h5>Project information</h5>
            <Nav className="flex-column">
                <NavItem className="mb-2">
                    <p className="mb-0 text-body-secondary">Downloads: {getAssetDownloadCount(projectData)} [Latest: {projectData.releases.all[0].assets[0].download_count}]</p>
                </NavItem>
                <NavItem className="mb-2">
                    <NavLink href={`${projectData.html_url}/releases`} className="p-0 text-body-secondary">Latest version: {projectData.releases.all[0].tag_name}</NavLink>
                </NavItem>
                <NavItem className="mb-2">
                    <p className="mb-0 text-body-secondary">License: {projectData.license.name}</p>
                </NavItem>
                {
                    privacy && (
                        <NavItem className="mb-2">
                            <NavLink href={"privacy"} className="p-0 text-body-secondary">Privacy Policy</NavLink>
                        </NavItem>
                    )
                }
            </Nav>
        </Col>
    )
}

const Footer = ({ projectData, privacy }) => {
    return (
        <Container>
            <footer className=" py-5 my-5 border-top">
                <Row className="d-flex flex-wrap justify-content-between">
                    <Col md="4" className="mb-3">
                        <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <StaticImage alt="OffRange logo" src="../images/logos/icon.jpg" className="d-block rounded-4 img-fluid" width={40} height={40} />
                        </Link>
                        <p className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} OffRange</p>
                    </Col>

                    {projectData && !(Object.keys(projectData).length === 0 && Object.getPrototypeOf(projectData) === Object.prototype) && (
                        <ProjectInfo projectData={projectData} privacy={privacy} />
                    )}


                    <Col md="3" className="mb-3">
                        <h5>Links</h5>
                        <Nav className="flex-column">
                            <NavItem className="mb-2">
                                <NavLink href="/" className="p-0 text-body-secondary">Home</NavLink>
                            </NavItem>
                            <NavItem className="mb-2">
                                <NavLink href="/#projects" className="p-0 text-body-secondary">Projects</NavLink>
                            </NavItem>
                            <NavItem className="mb-2">
                                <NavLink href="/legal-disclosure" className="p-0 text-body-secondary">Legal Disclosure (Impressum)</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </footer>
        </Container>
    )
}

export default Footer