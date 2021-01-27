import React from 'react';
import ReactDOM from 'react-dom';


export default function Step1(props) {
    if (props.currentStep !== 1) {
        return null;
    }
    return /*#__PURE__*/(
        React.createElement("div", { className: "form-group" }, /*#__PURE__*/
            React.createElement("label", { htmlFor: "email" }, "Email address"), /*#__PURE__*/
            React.createElement("input", {
                className: "form-control",
                id: "email",
                name: "email",
                type: "text",
                placeholder: "Enter email",
                value: props.email,
                onChange: props.handleChange
            })));



}

