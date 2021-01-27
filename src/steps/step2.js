
import React from 'react';
import ReactDOM from 'react-dom';

export default function Step2(props) {
    if (props.currentStep !== 2) {
        return null;
    }
    return /*#__PURE__*/(
        React.createElement("div", { className: "form-group" }, /*#__PURE__*/
            React.createElement("label", { htmlFor: "username" }, "Username"), /*#__PURE__*/
            React.createElement("input", {
                className: "form-control",
                id: "username",
                name: "username",
                type: "text",
                placeholder: "Enter username",
                value: props.username,
                onChange: props.handleChange
            })));



}