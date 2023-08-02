import Layout from "components/layout";
import { CommonPageTitle, SectionTitle } from "components/pageTitles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Title() {
    return (
        <>
            Angaben gemä{<span className='text-lowercase'>ß</span>} § 5 TMG
        </>
    )
}

const LegalDisclosure = () => {
    return (
        <Layout>
            <CommonPageTitle title={"Legal Disclosure/Impressum"} />

            <Container className="shadow p-5">
                <SectionTitle title={<Title />} />
                <Row data-aos="fade-up">
                    <Col md="4">
                        <p>Davis Wolfermann</p>
                        <p>Bodenbacher Straße 133a</p>
                        <p>01277 Dresden</p>
                    </Col>
                    <Col md="4">
                        <h2>Kontakt</h2>
                        <p>E-Mail: davis-wolfermann2005@gmx.de</p>
                        <p>Tel: +49 (0) 152 3428 7996</p>
                    </Col>
                    <Col md="4">
                        <h2>Verantwortlich für den Inhalt</h2>
                        <p>Davis Wolfermann</p>
                        <p>Bodenbacher Straße 133a</p>
                        <p>01277 Dresden</p>
                    </Col>
                </Row>
            </Container>


            <Container className="shadow p-5">
                <SectionTitle title={"Information according to § 5 German Teleservices Act"} />
                <Row data-aos="fade-up">
                    <Col md="4">
                        <p>Davis Wolfermann</p>
                        <p>Bodenbacher Straße 133a</p>
                        <p>01277 Dresden</p>
                    </Col>
                    <Col md="4">
                        <h2>Contact</h2>
                        <p>E-Mail: davis-wolfermann2005@gmx.de</p>
                        <p>Tel: +49 (0) 152 3428 7996</p>
                    </Col>
                    <Col md="4">
                        <h2>Responsible for the content</h2>
                        <p>Davis Wolfermann</p>
                        <p>Bodenbacher Straße 133a</p>
                        <p>01277 Dresden</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default LegalDisclosure