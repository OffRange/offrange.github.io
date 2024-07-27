import Layout from "components/layout";
import { CommonPageTitle, SectionTitle } from "components/pageTitles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Privacy = () => {
    return (
        <Layout>
            <CommonPageTitle title={"Power Control Privacy Policy"} description={<><p className="text-info">Effective Date: 27.07.2024</p><p className="mb-1 text-light">Power Control</p> </>} />
            <div className="text-center">
                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Introduction"} />
                        <p>Power Control ("the App" or "Software") is an open-source tool developed by Davis Wolfermann (“OffRange”, “I”, “me”, “my”), the sole developer and owner of the Software. This Privacy Policy is intended to inform you, the user, about the collection, use, and handling of your data while using the Software.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Data Collection and Use"} />
                        <Row md={2} xs={1}>
                            <Col>
                                <p><strong className="fs-5">Personal Information:</strong> Power Control does not gather or process any personal information from its users. As the developer, I do not collect, store, or process any personal or sensitive data besides the ones mentioned here.</p>
                            </Col>
                            <Col>
                                <p><strong className="fs-5">Error Logging:</strong> In the event of an error or crash within the App, Power Control may collect log files for debugging purposes. These log files may include technical information such as device Internet Protocol ("IP") address, device name, operating system version, the configuration of the App, the time and date of use, and other statistics. These log files do not contain any personal or sensitive user data and are not shared with third parties.</p>
                            </Col>
                            <Col className="flex-grow-1">
                                <p><strong className="fs-5">Third-Party-Services:</strong> Power Control does not use third-party services that collect data used to identify users beyond those mandated by marketplace providers, such as Google Play Services for Android Apps purchased through the Google Play Store. For more information, you can refer to Google's Privacy Policy at <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Changes to this Privacy Policy"} />
                        <p>I may update this Privacy Policy from time to time, and any changes will be effective as of the revised date indicated at the top of this page. It is recommended to review this Privacy Policy periodically for any updates. I will notify users of any changes by posting the updated Privacy Policy on this page. By continuing to use Power Control, you agree to be bound by the latest version of this Privacy Policy.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Contact Information"} />
                        <p>If you have any questions, suggestions, or concerns about this Privacy Policy or Power Control, please feel free to contact me at: <a href="mailto:offrange.developer@gmail.com">offrange.developer@gmail.com</a></p>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

export default Privacy