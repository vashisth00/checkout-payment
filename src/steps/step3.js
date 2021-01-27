import React from 'react';
import ReactDOM from 'react-dom';

export default function Step3(props) {
    if (props.currentStep !== 3) {
        return null;
    }
    return /*#__PURE__*/(
        React.createElement(React.Fragment, null, /*#__PURE__*/
            React.createElement("div", { className: "form-group" }, /*#__PURE__*/
                React.createElement("label", { htmlFor: "password" }, "Password"), /*#__PURE__*/
                React.createElement("input", {
                    className: "form-control",
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Enter password",
                    value: props.password,
                    onChange: props.handleChange
                })), /*#__PURE__*/


            React.createElement("button", { className: "btn btn-success btn-block" }, "Sign up")));


}

