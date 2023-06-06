import React, { useEffect, useState } from "react";
import { useDocumentTitle } from "../../useHelpers";
import { Button, Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { PageTitle } from "../../components/PageTitle";
import { Asterisk, ChatDots, Cpu, Download, EyeFill, EyeSlashFill, Github, Lock, Mortarboard } from "react-bootstrap-icons";
import { Feature } from "../../components/FeatureComponents";
import $ from 'jquery';
import { LABEL_LOOKUP, model, predict, prepareData } from "../../ai/ai";


export function PassStrengthAI({ setProjectName, projectInfo }) {
    useDocumentTitle('Projects | Password Strength AI')
    const [type, setType] = useState('password')

    useEffect(() => {
        setProjectName('PassStrengthAI')
        $('.input-group button').off('click')
        $('.input-group button').on('click', event => {
            event.preventDefault()
            if ($('.input-group input').attr('type') === 'password') {
                setType('text')
            } else {
                setType('password')
            }
        })
        const test = async () => {
            await model.predictAsync(prepareData(["password"]))
        }
        test()
    }, [setProjectName])

    const [password, setPassword] = useState()
    useEffect(() => {
        if (!password) {
            $("#strength-indicator").children().each((index, element) => {
                $(element).addClass('bg-body-secondary')
            })
            $('#strength-text').text('Enter a password')
            $('#prop').addClass('d-none')
            return
        }

        if (password.length > model.inputs[0].shape[1])
            return


        const doPredict = async () => {
            const prediction = await predict(password)
            const highestIndex = prediction.argMax(-1).dataSync()[0]

            $('#strength-text').text(LABEL_LOOKUP[highestIndex])
            $('#prop').removeClass('d-none')
            $('#prop').text((prediction.dataSync()[highestIndex] * 100).toFixed(2) + '%')

            $("#strength-indicator").children().each((index, element) => {
                if (index <= highestIndex) {
                    $(element).removeClass('bg-body-secondary')
                } else
                    $(element).addClass('bg-body-secondary')
            })
        }

        doPredict()

    }, [password])


    return (
        <>
            <PageTitle title="Password Strength AI" description="Introducing an cutting-edge Password Strength AI, an intelligent solution designed to enhance the security of your digital accounts." beta={true}>
                <Col className="d-flex flex-column gap-2 work-box">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        {
                            projectInfo && !(Object.keys(projectInfo).length === 0 && Object.getPrototypeOf(projectInfo) === Object.prototype) ?
                                <Button href={projectInfo.versions.stable.url}><span><Download className="me-2" />Download {projectInfo.versions.stable.tag}</span></Button>
                                :
                                <Button disabled><Spinner animation="border" role="status" aria-hidden="true" size="sm" as="span" className="me-2" />Loading...</Button>
                        }
                        <Button href="https://github.com/OffRange/PassStrengthAI"><span><Github className="me-2" />View on GitHub</span></Button>
                    </div>
                </Col>
            </PageTitle>
            <div className="b-divider"></div>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-primary">About</h2>
                    <Row xs="1" sm="2" md="3" lg="4" className="g-4 py-5" data-aos="fade-up">
                        <Feature title="Strength Estimation" description="Estimates the strength of passwords using machine learning." icon={<Lock />} />
                        <Feature title="Training data" description="Trained on a diverse dataset of randomly generated passwords." icon={<Mortarboard />} />
                        <Feature title="Tensorflow" description="Created with TensorFlow for robust and efficient computation." icon={<Cpu />} />
                        <Feature title="Max Length" description="Currently, the model can only process passwords with a maximum of 15 characters." icon={<ChatDots />} />
                    </Row>
                </Container>
            </section>

            <div className="b-divider"></div>

            <section>
                <Container>
                    <h2 className="pb-2 border-bottom border-primary">Try it yourself!</h2>
                    <div data-aos="fade-left">
                        <p className="text-warning">Processing speed may vary from device to device as the model calculates the result in your browser and not on the backend!</p>

                        <InputGroup size="lg" className="pb-5 pt-5">
                            <InputGroup.Text><Asterisk /></InputGroup.Text>
                            <Form.Control placeholder="Enter a password" type={type} onChange={e => setPassword(e.target.value)} value={password} maxLength={model.inputs[0].shape[1]}></Form.Control>
                            <Button variant="outline-secondary" className="show-hide">{type === 'password' ? <EyeFill /> : <EyeSlashFill />}</Button>
                            <div className="d-flex align-items-center mb-3 mt-3 w-100" id="strength-indicator">
                                <div className="flex-grow-1 rounded me-2 bg-body-secondary" style={{ height: '5px', backgroundColor: '#FF0000' }}></div>
                                <div className="flex-grow-1 rounded me-2 bg-body-secondary" style={{ height: '5px', backgroundColor: '#FF4500' }}></div>
                                <div className="flex-grow-1 rounded me-2 bg-body-secondary" style={{ height: '5px', backgroundColor: '#FF8C00' }}></div>
                                <div className="flex-grow-1 rounded me-2 bg-body-secondary" style={{ height: '5px', backgroundColor: '#FFD700' }}></div>
                                <div className="flex-grow-1 rounded me-2 bg-body-secondary" style={{ height: '5px', backgroundColor: '#ADFF2F' }}></div>
                                <div className="flex-grow-1 rounded bg-body-secondary" style={{ height: '5px', backgroundColor: '#00FF00' }}></div>
                            </div>
                            <Col className="d-flex flex-column">
                                <div className="d-grid gap-2 d-sm-flex">
                                    <p id="strength-text">Enter a password</p>
                                    <p id="prop"></p>
                                </div>
                            </Col>
                        </InputGroup>
                    </div>
                </Container>
            </section>
        </>
    )
}