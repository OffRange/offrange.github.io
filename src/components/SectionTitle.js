import React from "react";

export function SectionTitle({ title, description, beta }) {
    return (
        <div className="section-title mb-3">
            <div className="d-flex align-items-center mb-2 flex-column">
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                    <h2 className="mb-0">{title}{beta ? <span class="badge rounded-pill text-bg-warning ms-3">BETA</span> : ''}</h2>
                </div>
            </div>
            <div className="line mb-4" />
            <p>{description}</p>
        </div >
    )
}