import React from "react";

export function SectionTitle({ title, description, beta }) {
    return (
        <div className="section-title mb-3">
            <div className="d-flex align-items-center mb-2 flex-column">
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                    <h2 className="mb-0">{title}</h2>
                    {
                        beta ?
                            <>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="rounded-pill bg-warning p-2 text-black">
                                        <text>BETA</text>
                                    </div>
                                </div>
                            </>
                            :
                            <></>
                    }
                </div>
            </div>
            <div className="line mb-4" />
            <p>{description}</p>
        </div>
    )
}