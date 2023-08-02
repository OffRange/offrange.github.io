import { Feature } from "components/features";
import Layout from "components/layout";
import { CommonPageTitle } from "components/pageTitles";
import useGitHubRepoData from "hooks/useGitHubRepoData";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Asterisk, ChatDots, Cpu, EyeFill, EyeSlashFill, Github, Lock, Mortarboard } from "react-bootstrap-icons";

import { tensor, loadGraphModel } from "@tensorflow/tfjs"
import SearchEngineOptimization from "components/seo";
import { StatusButtonDownload } from "components/statusButton";

const features = [
    { title: "Strength Estimation", description: "Estimates the strength of passwords using machine learning.", icon: <Lock /> },
    { title: "Training data", description: "Trained on a diverse dataset of randomly generated passwords.", icon: <Mortarboard /> },
    { title: "Tensorflow", description: "Created with TensorFlow for robust and efficient computation.", icon: <Cpu /> },
    { title: "Max Length", description: "Currently, the model can only process passwords with a maximum of 15 characters.", icon: <ChatDots /> },
]

function prepareData(passswords, maxLength = 15) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    function oneHotEncode(text, maxLength) {
        const encoding = new Array(maxLength).fill(0).map(() => new Array(chars.length).fill(0));
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const index = chars.indexOf(char);
            if (index !== -1) {
                encoding[i][index] = 1;
            }
        }
        return encoding;
    }

    const trainPasswordsEncoded = [];
    for (let i = 0; i < passswords.length; i++) {
        const password = String(passswords[i]);
        trainPasswordsEncoded.push(oneHotEncode(password, maxLength));
    }

    return tensor(trainPasswordsEncoded)
}

const PasswordStrengthAi = () => {
    let { projectData, loading, error } = useGitHubRepoData("PassStrengthAI")
    return (
        <Layout projectData={projectData} error={error}>
            <CommonPageTitle title={"Password Strength AI"} description={projectData.description} image={<Cpu width={"auto"} height={"auto"} className="d-block mx-auto" />}>
                <Col className="d-flex flex-column gap-2 work-box">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <StatusButtonDownload projectData={projectData} loading={loading} error={error} />
                        <Button href={"https://github.com/OffRange/PassStrengthAI"}><span><Github className="me-2" />View on GitHub</span></Button>
                    </div>
                </Col>
            </CommonPageTitle>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-primary">About</h2>
                    <Row xs="1" sm="2" md="3" lg="4" className="g-4 py-5" data-aos="fade-up">
                        {
                            features.map((feature, i) => (
                                <Feature key={i} title={feature.title} description={feature.description} icon={feature.icon} />
                            ))
                        }
                    </Row>
                </Container>
            </section>


            <Try />
        </Layout >
    )
}

export const Head = () => <SearchEngineOptimization title={"Password Strength AI"}
    description={"Boost your online security with this cutting-edge open source project! The AI-driven password strength estimator utilizes advanced algorithms to analyze and assess the robustness of your passwords, helping you create stronger and more secure credentials."}
    keywords={"password strength, open-source, data privacy, ai, online security, password, password security, strength, offrange, estimation"} />

export default PasswordStrengthAi

const indicators = [
    { color: '#FF0000' },
    { color: '#FF4500' },
    { color: '#FF8C00' },
    { color: '#FFD700' },
    { color: '#ADFF2F' },
    { color: '#00FF00' },
]

const Try = () => {
    const [type, setType] = useState('password')
    const [password, setPassword] = useState('')


    const [model, setModel] = useState()
    const [prediction, setPrediction] = useState()
    useEffect(() => {
        const loadModel = async () => {
            const model = await loadGraphModel("/model/model.json")
            setModel(model)
            await model.predictAsync(prepareData(["password"]))
        }

        loadModel()
    }, [])



    useEffect(() => {
        const performPrediction = async () => {
            if (!password || password.length === 0) {
                setPrediction(null)
                return
            }

            if (model) {
                if (password.length > model.inputs[0].shape[1]) {
                    return
                }
                const prediction = await model.predictAsync(prepareData([password]))
                const highestIndex = prediction.argMax(-1).dataSync()[0]
                console.log(prediction)
                setPrediction({ highestIndex: highestIndex, prop: (prediction.dataSync()[highestIndex] * 100) })
            }
        }

        performPrediction()
    }, [password, model])

    const LABEL_LOOKUP = {
        0: "Cracked",
        1: "Ridiculous",
        2: "Weak",
        3: "Moderate",
        4: "Strong",
        5: "Very strong"
    }

    return (
        <section>
            <Container>
                <h2 className="pb-2 border-bottom border-primary">Try it yourself!</h2>
                <div data-aos="fade-left">
                    <p className="text-warning lead">Processing speed may vary from device to device as the model calculates the result in your browser and not on the backend!</p>

                    <InputGroup size="lg" className="pb-5 pt-5">
                        <InputGroup.Text><Asterisk /></InputGroup.Text>
                        <Form.Control placeholder="Enter a password" type={type} onChange={e => setPassword(e.target.value)} value={password} maxLength={model ? model.inputs[0].shape[1] : 0}></Form.Control>
                        <Button variant="outline-secondary" className="show-hide" onClick={() => setType(type === 'password' ? 'text' : 'password')}>{type === 'password' ? <EyeFill /> : <EyeSlashFill />}</Button>
                        <div className="d-flex align-items-center mb-3 mt-3 w-100">
                            {
                                indicators.map((indicator, i) => (
                                    <div key={i} className={`w-${i === 0 ? 25 : 100} rounded ${!prediction || ('highestIndex' in prediction && i > prediction.highestIndex) ? 'bg-body-secondary' : ''} ${i < indicators.length - 1 ? 'me-2' : ''}`} style={{ height: '5px', backgroundColor: `${indicator.color}` }}></div>
                                ))
                            }
                        </div>
                        <Col className="d-flex flex-column">
                            <div className="d-grid gap-2 d-sm-flex">
                                <p>{prediction ? LABEL_LOOKUP[prediction.highestIndex] : 'Enter a password'}</p>
                                {
                                    prediction && 'prop' in prediction ? (
                                        <p>{`${prediction.prop.toFixed(2)}%`}</p>
                                    ) : ''
                                }
                            </div>
                        </Col>
                    </InputGroup>
                    <p className="text-secondary">Please note that the project is currently in beta, and while the models strive to provide accurate results, there is a possibility of producing inaccurate estimations.</p>
                </div>
            </Container>
        </section>
    )
}