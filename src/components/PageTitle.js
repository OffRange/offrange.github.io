import React, { Component } from "react";
import { SectionTitle } from "./SectionTitle";
import { Container } from "react-bootstrap";

class PageTitle extends Component {
    render() {
        return (
            <Container className="my-5" >
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <div className="text-body-emphasis">
                        <SectionTitle title={this.props.title} className="text-body-emphasis" />
                    </div>
                    <p className="lead">
                        {this.props.description}
                    </p>
                    {this.props.children}
                </div>
            </Container>
        )
    }
}

export { PageTitle }