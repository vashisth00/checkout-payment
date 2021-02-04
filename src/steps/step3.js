import React from 'react';

export default function Step3(props) {
    if (props.currentStep !== 3) {
        return null;
    }
    return (

        React.createElement(
            "div", { className: "form-group px-4 py-4" }, 
           
            React.createElement(
                "img",
                {src: "https://i.ibb.co/b67NMGG/Screenshot-2021-02-04-at-4-53-53-AM.png", className: "brown"},
                // { className: 'brown' },
                null
              ),
              React.createElement(
                "h2",
                {className: "blue-text py-3"}, 
                "Thank You For Purchasing Credit Insurance"
              ),
        React.createElement(React.Fragment, null, 
            React.createElement("div", { className: "form-group" }, 
                React.createElement("label", { htmlFor: "icfo" }, "Once your payment is exited please check this thank you!"), 
                React.createElement("input", {
                    className: "form-control",
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Enter password",
                    value: props.password,
                    onChange: props.handleChange
                })), 


            React.createElement("button", { className: "btn btn-success btn-block" }, "Sign up"))
    ));


}

