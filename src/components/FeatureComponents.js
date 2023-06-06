import { Col } from "react-bootstrap"

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

export { Feature, FeatureSmall }