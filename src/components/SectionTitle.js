import React from "react";

export function SectionTitle(props) {
    return (
        <div className="section-title mb-3">
            <h2>{props.title}</h2>
            <div className="line mb-4" />
            <p>{props.description}</p>
        </div>
    )
}