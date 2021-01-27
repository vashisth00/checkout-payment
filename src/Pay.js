import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function _defineProperty(obj, key, value) { if (key in obj) 
    { 
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); 
} else { obj[key] = value; } return obj; } class MasterForm extends React.Component {
    constructor(props) {
        super(props); _defineProperty(this, "handleChange",

            event => {
                const { name, value } = event.target;
                this.setState({
                    [name]: value
                });

            }); _defineProperty(this, "handleSubmit",

                event => {
                    event.preventDefault();
                    const { email, username, password } = this.state;
                    alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`);
                }); _defineProperty(this, "_next",

                    () => {
                        let currentStep = this.state.currentStep;
                        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
                        this.setState({
                            currentStep: currentStep
                        });

                    }); _defineProperty(this, "_prev",

                        () => {
                            let currentStep = this.state.currentStep;
                            currentStep = currentStep <= 1 ? 1 : currentStep - 1;
                            this.setState({
                                currentStep: currentStep
                            });

                        }); this.state = { currentStep: 1, email: '', username: '', password: '' };
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return /*#__PURE__*/(
                React.createElement("button", {
                    className: "btn btn-secondary",
                    type: "button", onClick: this._prev
                }, "Previous"));



        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return /*#__PURE__*/(
                React.createElement("button", {
                    className: "btn btn-primary float-right",
                    type: "button", onClick: this._next
                }, "Next"));



        }
        return null;
    }

    render() {
        return /*#__PURE__*/(
            React.createElement(React.Fragment, null, /*#__PURE__*/
                React.createElement("h1", null, "React Wizard Form \uD83E\uDDD9\u200D\u2642\uFE0F"), /*#__PURE__*/
                React.createElement("p", null, "Step ", this.state.currentStep, " "), /*#__PURE__*/

                React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/



                    React.createElement(Step1, {
                        currentStep: this.state.currentStep,
                        handleChange: this.handleChange,
                        email: this.state.email
                    }), /*#__PURE__*/

                    React.createElement(Step2, {
                        currentStep: this.state.currentStep,
                        handleChange: this.handleChange,
                        username: this.state.username
                    }), /*#__PURE__*/

                    React.createElement(Step3, {
                        currentStep: this.state.currentStep,
                        handleChange: this.handleChange,
                        password: this.state.password
                    }),

                    this.previousButton(),
                    this.nextButton())));




    }
}


function Step1(props) {
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

function Step2(props) {
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

function Step3(props) {
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

export default MasterForm;