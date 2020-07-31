import React from "react";
import { SemipolarLoading } from "react-loadingg";

const Loading = () => (
    <div className="loading">
        <SemipolarLoading
            style={{
                position: "relative",
                textAlign: "center",
            }}
        />
    </div>
);

export default Loading;
