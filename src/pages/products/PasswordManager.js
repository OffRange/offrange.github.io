import React from "react"
import { Dashboard, Viewing } from "../../assets"
import { useDocumentTitle, useDownloadCounter } from "../../useHelpers"
import { PageTitle } from "../../components/PageTitle"
import { Card, Col, Container, Row } from "react-bootstrap"
import { ArrowClockwise, ArrowRepeat, BracesAsterisk, CreditCardFill, DatabaseFillLock, DropletFill, Fingerprint, Github, LockFill, PatchCheckFill, PenFill } from "react-bootstrap-icons"
import '../css/products.css'
import { Link } from "react-router-dom"

function Feature(props) {
    return (
        <Col className="d-flex align-items-start">
            <div className="text-body-secondary flex-shrink-0 me-3 feature-icon">
                {props.icon}
            </div>
            <div>
                <h3 className="fw-bold mb-0 fs-4">{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </Col>
    )
}

function FeatureSmall(props) {
    return (
        <Col className="d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                {props.icon}
            </div>
            <h4 className="fw-semibold mb-0">{props.title}</h4>
            <p className="text-body-secondary text-justify">{props.description}</p>
        </Col>
    )
}

export function PasswordManager() {
    useDocumentTitle("Products | Password Manager")
    useDownloadCounter("PasswordManager")
    return (
        <>
            <PageTitle title="Password Manager" description="Introducing this open-source password manager, a reliable solution built on the foundation of transparency and security. Powered by AES encryption, one of the most trusted encryption algorithms available, this password manager ensures your sensitive information remains confidential and protected." />
            <div className="b-divider"></div>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-primary">Features</h2>
                    <Row xs="1" sm="2" md="3" lg="4" className="g-4 py-5" data-aos="fade-up">
                        <Feature title="Password Generator" description="A tool that creates strong and random passwords based on specific criteria." icon={<ArrowClockwise />} />
                        <Feature title="Password Estimator" description="Provides an estimate of how secure the password is against potential attacks." icon={<Fingerprint />} />
                        <Feature title="AES Encryption" description="Technique to securely encrypt and decrypt data." icon={<LockFill />} />
                        <Feature title="Material 3 Design" description="Provides a modern and cohesive visual language for creating user interfaces." icon={<DropletFill />} />
                        <Feature title="Autofill feature" description="Automatically populates form fields with saved passwords, streamlining the data entry process for users." icon={<PenFill />} />
                        <Feature title="Locally stored" description="Sensitive data is securely stored locally on the user's device, ensuring privacy and control." icon={<DatabaseFillLock />} />
                        <Feature title="Updater" description="Tool that automatically downloads and installs the latest updates." icon={<PatchCheckFill />} />
                        <Feature title="Sync feature" description="Coming soon" icon={<ArrowRepeat />} />
                        {/* Syncs saved data between multiple devices using Google Drive, Dropbox, Nexcloud, etc.  */}
                    </Row>
                </Container>
            </section>

            <div className="b-divider"></div>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-primary">What can be saved?</h2>
                    <Row xs="1" md="2" className="align-items-md-center g-5 py-5">
                        <Col className="d-flex flex-column align-items-start gap-2" data-aos="fade-right">
                            <h3 className="fw-bold">Secure Elements</h3>
                            <p className="text-body-secondary text-justify">Ensuring the utmost security for your sensitive information, this password manager employs robust encryption protocols to safeguard your passwords and credit card details. With the database stored directly on your device, you can trust that your data remains in your control, away from prying eyes and potential online threats. Enjoy the peace of mind that comes with knowing your personal information is protected by advanced encryption technology, providing a secure vault for your passwords and credit card information.</p>
                        </Col>
                        <Col>
                            <Row xs="1" sm="2" className="g-4" data-aos="fade-left">
                                <FeatureSmall title="Passwords" description="Say goodbye to forgotten passwords and compromised security! Protect your valuable accounts with this password manager." icon={<BracesAsterisk />} />
                                <FeatureSmall title="Credit Cards" description="Securely store and protect your credit card information, ensuring convenience and peace of mind in a single solution." icon={<CreditCardFill />} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="b-divider"></div>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-primary">How does the application look like?</h2>
                    <Row xs="1" lg="3" className="align-items-stretch g-4 py-5 justify-content-center">
                        <Col data-aos="fade-right">
                            <Card className="card-cover overflow-hidden rounded-4 shadow-sm">
                                <Card.Img src={Dashboard} />
                                <Card.Body>
                                    <Card.Text>Dashboard - Here you will find all the data you have saved, such as passwords and credit card information</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col data-aos="fade-left">
                            <Card className="card-cover overflow-hidden rounded-4 shadow-sm">
                                <Card.Img src={Viewing} />
                                <Card.Body>
                                    <Card.Text>Viewing Page - Here you can review your saved data and even make quick changes by long clicking on any of the information fields</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="b-divider"></div>

            <Container className="my-5" data-aos="fade-up">
                <Link to="https://github.com/OffRange/PasswordManager" className="text-decoration-none text-reset">
                    <div className="p-5 text-center bg-body-tertiary rounded-3">
                        <Github width="100" height="100" className="mt-4 mb-3" />
                        <h1 className="text-body-emphasis">View Source Code on GitHub</h1>
                    </div>
                </Link>
            </Container>

        </>
    )
}