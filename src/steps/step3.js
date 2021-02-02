import React from 'react';

export default function Step3(props) {
    if (props.currentStep !== 3) {
        return null;
    }
    return (
        React.createElement(React.Fragment, null, 
            React.createElement("div", { className: "form-group" }, 
                React.createElement("label", { htmlFor: "password" }, "Password"), 
                React.createElement("input", {
                    className: "form-control",
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Enter password",
                    value: props.password,
                    onChange: props.handleChange
                })), 


            React.createElement("button", { className: "btn btn-success btn-block" }, "Sign up")));


}

