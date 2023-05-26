import React, { useEffect } from "react";
import { Button, Col, Container, Image, ProgressBar, Row } from "react-bootstrap";
import { Logo, PasswordManager } from "../assets";
import moment from "moment/moment";
import { Android, ChevronRight, Github, InfoCircleFill, Windows } from 'react-bootstrap-icons'
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../useHelpers";
import { SectionTitle } from "../components/SectionTitle";
import $ from 'jquery';
import './css/home.css'


export function Home() {

    const htmlSkill = 75
    const cssSkill = 60
    const javascriptSkill = 80
    const javaSkill = 100
    const cSharpSkill = 90
    const pythonSkill = 85

    useDocumentTitle("Home | OffRange")

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    function animateProgress() {
        $(".progress").each(function () {
            if ($(this).isInViewport()) {
                $(this).removeClass('zero')
            }
        })
    }

    useEffect(() => {
        animateProgress()
        $(window).on('resize scroll', function () {
            animateProgress()
        });
    })


    return (
        <>
            <section className="about">
                <Container className="shadow p-5">
                    <Row>
                        <Col lg="4" data-aos="fade-right">
                            <Image alt="Logo" src={Logo} fluid className="d-block shadow mx-auto rounded-4" />
                        </Col>
                        <Col lg="8" className="pt-4 pt-lg-0 content">
                            <div className="section-title">
                                <h2 className="text-start line">Software Developer</h2>
                            </div>
                            <Row className="mt-4" data-aos="fade-left">
                                <Col lg="6">
                                    <ul>
                                        <li>
                                            <ChevronRight className="me-2 text-primary" />
                                            <strong>Name:</strong>
                                            <span>Davis Alessandro Wolfermann</span>
                                        </li>
                                        <li>
                                            <ChevronRight className="me-2 text-primary" />
                                            <strong>E-Mail:</strong>
                                            <span>davis-wolfermann2005@gmx.de</span>
                                        </li>
                                        <li>
                                            <ChevronRight className="me-2 text-primary" />
                                            <strong>Birthday:</strong>
                                            <span>23 July 2005 ({Math.floor(moment.duration(moment(new Date()).diff(new Date("07/23/2005"))).asYears())})</span>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg="6">
                                    <ul>
                                        <li>
                                            <ChevronRight className="me-2 text-primary" />
                                            <strong>GitHub:</strong>
                                            <Link to="https://github.com/OffRange" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">
                                                <span>@OffRange</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <ChevronRight className="me-2 text-primary" />
                                            <strong>Degree:</strong>
                                            <span>High School Student</span>
                                        </li>
                                        <li>
                                            <ChevronRight className="me-2 text-primary" />
                                            <strong>Country:</strong>
                                            <span>Germany</span>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>

                            <div data-aos="fade-left" className="text-justify">
                                <p>My programming journey began in 2016 when I ventured into developing a LAN chat program using Batch. Since then, my passion for programming has grown, leading me to implement my Chat-Program in Java.</p>
                                <p>Additionally, I have gained experience in developing Minecraft plugins in Java. This allowed me to dive deeper into the world of Java programming and further enhance my skills.</p>
                                <p>More recently, I have focused on Android software development, where I aspire to create a secure Password Manager with high-level encryption. I am fascinated by the potential of mobile applications and the importance of data security.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="skills">
                <Container className="shadow p-5">
                    <SectionTitle title="Skills" description="Here, you can find a list of programming languages I am proficient in and feel comfortable working with" />
                    <Row data-aos="fade-up">
                        <Col lg="6">
                            <div className="skill">
                                <span>
                                    HTML
                                    <i>{htmlSkill}%</i>
                                </span>
                                <ProgressBar now={htmlSkill} className="zero" />
                            </div>
                            <div className="skill">
                                <span>
                                    CSS
                                    <i>{cssSkill}%</i>
                                </span>
                                <ProgressBar now={cssSkill} className="zero" />
                            </div>
                            <div className="skill">
                                <span>
                                    JavaScript
                                    <i>{javascriptSkill}%</i>
                                </span>
                                <ProgressBar now={javascriptSkill} className="zero" />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="skill">
                                <span>
                                    Java
                                    <i>{javaSkill}%</i>
                                </span>
                                <ProgressBar now={javaSkill} className="zero" />
                            </div>
                            <div className="skill">
                                <span>
                                    C#
                                    <i>{cSharpSkill}%</i>
                                </span>
                                <ProgressBar now={cSharpSkill} className="zero" />
                            </div>
                            <div className="skill">
                                <span>
                                    Python
                                    <i>{pythonSkill}%</i>
                                </span>
                                <ProgressBar now={javascriptSkill} className="zero" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="resume">
                <Container className="shadow p-5">
                    <SectionTitle title="Resume" description="Here, you can find my resume" />
                    <Row data-aos="fade-up">
                        <Col lg="6">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Davis Wolfermann</h4>
                                <ul>
                                    <li>Bodenbacher Straße 133A, Dresden, Saxony</li>
                                    <li>davis-wolfermann2005@gmx.de</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Julius-Ambrosius-Hülsse Gymnasium</h4>
                                <h5>2016 - Present</h5>
                                <p><em>Julius-Ambrosius-Hülsse Gymnasium, Dresden, Germany</em></p>
                                <ul>
                                    <li>Currently enrolled in the advanced level</li>
                                    <li>Pursuing advanced courses in Mathematics and Chemistry</li>
                                </ul>
                            </div>
                            <div className="resume-item pb-0">
                                <h4>33. Grundschule</h4>
                                <h5>2012 - 2016</h5>
                                <p><em>33. Grundschule (Elementary School), Dresden, Germany</em></p>
                            </div>
                        </Col>
                        {/* <Col lg="6">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item pb-0">
                                <h4>Coming Soon</h4>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>

            <section className="my-work">
                <Container className="shadow p-5">
                    <SectionTitle title="My Projects" description="Take a moment to explore my portfolio of recent projects." />
                    <Row md="2" xs="1" className="align-items-md-center g-5 py-5">
                        <Col className="d-flex flex-column align-items-start gap-2 work-box" data-aos="fade-up">
                            <div className="work-icon text-center mb-3">
                                <Image alt="Password Manager logo" src={PasswordManager} fluid width="150" className="rounded-5" />
                            </div>
                            <h3 className="fw-bold work-title">Password Manager</h3>
                            <p className="text-body-secondary text-justify">An open-source password manager that uses AES encryption to securely store passwords and credit card information locally on the device.</p>

                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                                <Button href="#/products/passwordmanager"><span><InfoCircleFill className="me-2" />View Product Page</span></Button>
                                <Button href="https://github.com/OffRange/PasswordManager"><span><Github className="me-2" />View on GitHub</span></Button>
                            </div>
                        </Col>
                        <Col data-aos="fade-left">
                            <Row sm="2" xs="1" className="g-2">
                                <Col className="d-flex flex-column gap-2">
                                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                        <Android />
                                    </div>
                                    <h4 className="fw-semibold mb-0">Android</h4>
                                    <p className="text-body-secondary">Secure and effortless password management on Android. Fully compatible with Android 6+</p>
                                </Col>
                                <Col className="d-flex flex-column gap-2">
                                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                        <Windows />
                                    </div>
                                    <h4 className="fw-semibold mb-0">Windows</h4>
                                    <p className="text-body-secondary">Planned</p>
                                    {/* <p className="text-body-secondary">Enhance your digital security with our Windows Password Manager</p> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}