import React from 'react'
import { useDocumentTitle } from '../useHelpers'
import { Btc, KoFi, PayPal } from '../assets'
import { PageTitle } from '../components/PageTitle'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

function SupportOption(props) {
    return (
        <section>
            <Container className='px-4 col-xl-10 col-xxl-8'>
                <Row className={['align-items-center g-lg-5 py-5', props.reverse ? 'flex-lg-row-reverse' : '']}>
                    <Col md="10" lg="5" className='mx-auto' data-aos={`fade-${props.reverse ? 'left' : 'right'}`}>
                        <Image alt={props.title} src={props.img} className='d-block mx-auto rounded-5' fluid width="300" height="300" />
                    </Col>

                    <Col lg="7" className='text-center text-lg-start' data-aos={`fade-${props.reverse ? 'right' : 'left'}`}>
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">{props.title}</h1>
                        <p className="col-lg-10 fs-4">{props.description}</p>
                        {props.additional}

                        {props.dest != null ?
                            (<div className="d-grid gap-2 d-md-flex justify-content-md-center justify-content-lg-start">
                                <Button href={props.dest} target='_blank' variant='primary' className='btn-lg px-4 me-md-2'>Support Me</Button>
                            </div>)
                            : ''
                        }
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export function Support() {
    useDocumentTitle("Support My Work | OffRange")
    return (
        <>
            <PageTitle title="Support My Work" description="Choose the support method that suits you best, and help me continue providing you with valuable content and services. I sincerely appreciate your generosity and look forward to your continued support." />
            <div className="b-divider"></div>

            <SupportOption img={Btc} title="Bitcoin" description="Support me by donating BTC to my address:" additional={<><p className="col-lg-10 fs-5 fw-bold">bc1qhdqymmss2tpc2rck3w6cgq4nvgcdwsv2v8vxwu</p><p className="col-lg-10 fs-4">Bitcoin is a decentralized digital currency that allows for secure, fast, and low-cost transactions without the need for a middleman like a bank. Your donation will help me continue to provide valuable content and services.</p></>} />
            <div className="b-divider"></div>
            <SupportOption dest="https://www.ko-fi.com/OffRange" reverse img={KoFi} title="Ko-Fi" description="If you want to show your appreciation for my work, you can buy me a 'coffee' on Ko-Fi! By clicking on the 'Support Me' button and purchasing a coffee for me, you'll be supporting my work and giving me a boost of caffeine to keep me going." />
            <div className="b-divider"></div>
            <SupportOption dest="https://www.paypal.me/OffRange" img={PayPal} title="PayPal" description="With the PayPal option, you can donate to me using your PayPal account. Simply click on the 'Support Me' button and you will be redirected to the PayPal website where you can enter the amount you wish to donate and complete the transaction securely. This is a quick and convenient way to support my work, and I appreciate your generosity!" />
        </>
    )
}