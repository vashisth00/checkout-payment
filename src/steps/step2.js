
import React from 'react';

export default function Step2(props) {
    if (props.currentStep !== 2) {
        return null;
    }
    return (
        React.createElement("div", { className: "form-group" },
            React.createElement("label", { htmlFor: "username" }, "Username"),
            React.createElement("input", {
                className: "form-control",
                id: "username",
                name: "username",
                type: "text",
                placeholder: "Enter username",
                value: props.username,
                onChange: props.handleChange
            }
            )
        )
    );



}