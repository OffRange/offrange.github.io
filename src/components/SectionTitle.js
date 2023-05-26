import React from "react";

export function SectionTitle({ title, description }) {
    return (
        <div className="section-title mb-3">
            <h2>{title}</h2>
            <div className="line mb-4" />
            <p>{description}</p>
        </div>
    )
}