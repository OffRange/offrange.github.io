import Layout from "components/layout";
import { CommonPageTitle, SectionTitle } from "components/pageTitles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Privacy = () => {


    return (
        <Layout>
            <CommonPageTitle title={"App Privacy Policy"} description={<><p className="text-info">Effective Date: 03.08.2023</p><p className="mb-1 text-light">KeyGo - Digital Vault</p><p>Play Store Version</p> </>} />

            <div className="text-center">
                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Introduction"} />
                        <p>KeyGo - Digital Vault ("KeyGo" or "the App") is an open-source password manager developed by Davis Wolfermann (“OffRange”, “I”, “me”, “my”), the sole developer and owner of the App. This Privacy Policy is intended to inform you, the user, about the collection, use, and handling of your data while using the Google Play Store version of KeyGo.</p>
                    </Container>
                </section>


                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Application Scope"} />
                        <p>This Privacy Policy specifically applies to the version of KeyGo - Digital Vault that is available for download on the Google Play Store. It covers the features and permissions associated with the Google Play Store version of the App.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Data Collection and Use"} />
                        <Row md={2} xs={1}>
                            <Col>
                                <p><strong className="fs-5">Personal Information:</strong> KeyGo does not gather or process any personal information from its users. As the developer, Davis Wolfermann, I do not collect, store, or process any personal or sensitive data.</p>
                            </Col>
                            <Col>
                                <p><strong className="fs-5">Error Logging:</strong> In the event of an error or crash within the App, KeyGo may collect log files for debugging purposes. These log files may include technical information such as device Internet Protocol ("IP") address, device name, operating system version, the configuration of the App, the time and date of use, and other statistics. These log files do not contain any personal or sensitive user data and are not shared with third parties.</p>
                            </Col>
                            <Col className="flex-grow-1">
                                <p><strong className="fs-5">Third-Party-Services:</strong> KeyGo does not use third-party services that collect data used to identify users beyond those mandated by marketplace providers, such as Google Play Services for Android Apps purchased through the Google Play Store. For more information, you can refer to Google's Privacy Policy at <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"User Data Storage"} />
                        <Row md={2} xs={1}>
                            <Col>
                                <p><strong className="fs-5">Encryption:</strong> User data, such as passwords and other elements entered into the App, is stored encrypted on your device. KeyGo does not store this data on any server owned by Davis Wolfermann or any third-party company.</p>
                            </Col>
                            <Col>
                                <p><strong className="fs-5">App-specific Internal Storage:</strong> The application utilizes the App-specific internal storage, to securely store encrypted data. This storage access does not require any additional permissions, enhancing the security and privacy of your information.</p>
                            </Col>
                            <Col className="flex-grow-1">
                                <p><strong className="fs-5">No Access to User Data:</strong> As the developer of KeyGo, I do not have access to or hold any user data stored on your device. Consequently, I cannot process, sell, or share any user data with third-party entities.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"App Permissions"} />
                        <p><strong className="fs-5">NFC (Near Field Communication):</strong> The application may request permission to use the NFC feature on your device to read credit card information. This feature facilitates the fast and easy input of credit card information and eliminates the need for manual entry. Please note that this information is solely encrypted and stored on your device for your convenience. KeyGo does not send this information to anyone or share it with any third party.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Links to Third-Party Sites"} />
                        <p>KeyGo may contain links to third-party websites or services for additional information or resources. Please be aware that these external sites are not operated by Davis Wolfermann, and I have no control over their content, privacy policies, or practices. It is recommended to review the privacy policies of these third-party sites before interacting with them.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Data Security"} />
                        <Col>
                            <p><strong className="fs-5">Encryption Algorithms:</strong> KeyGo uses Advanced Encryption Standard (AES) for storing user data, ensuring that your sensitive information remains secure and inaccessible to unauthorized parties. Additionally, the master password you set for KeyGo is hashed using BCrypt with SHA-512, adding an extra layer of protection to your credentials.</p>
                        </Col>
                        <Col>
                            <p><strong className="fs-5">Disclaimer:</strong> Despite implementing strong security measures, please understand that no method of transmission over the internet or electronic storage is entirely secure. As such, I cannot guarantee absolute security for your data. It is advisable to exercise caution and follow best practices in safeguarding your sensitive information.</p>
                        </Col>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Changes to this Privacy Policy"} />
                        <p>I may update this Privacy Policy from time to time, and any changes will be effective as of the revised date indicated at the top of this page. It is recommended to review this Privacy Policy periodically for any updates. I will notify users of any changes by posting the updated Privacy Policy on this page. By continuing to use KeyGo, you agree to be bound by the latest version of this Privacy Policy.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Contact Information"} />
                        <Row md={2} xs={1}>
                            <Col>
                                <p>If you have any questions, suggestions, or concerns about this Privacy Policy or KeyGo, please feel free to contact me at: <a href="mailto:offrange.developer@gmail.com">offrange.developer@gmail.com</a></p>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>Bodenbacher Straße 133A</li>
                                    <li>01277, Dresden</li>
                                    <li>Germany</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

export default Privacy