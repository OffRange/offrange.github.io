import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Container } from "react-bootstrap";

export function PageTitle(props) {
    return (
        <Container className="my-5">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <div className="text-body-emphasis">
                    <SectionTitle title={props.title} className="text-body-emphasis" />
                </div>
                <p className="lead">
                    {props.description}
                </p>
            </div>
        </Container>
    )
}