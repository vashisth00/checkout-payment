
import React from 'react';

export default function Step2(props) {
    if (props.currentStep !== 2) {
        return null;
    }
    const loader = <div class="spinner-grow text-primary" role="status"> <span class="sr-only">Loading...</span> </div>;
  const loader4 = <div class="loader-4"><span></span></div>
    return (
        React.createElement(
            "div", { className: "form-group" }, 
           
            React.createElement(
                "img",
                {src: "https://i.ibb.co/pz67kPY/logo-sprinque.png", className: "brown"},
                // { className: 'brown' },
                null
              ),
              React.createElement(
                "h2",
                {className: "blue-text py-3"}, 
                "Credit Insuarance Quote"
              ),
              React.createElement(
                "p",
                null,
                // {className: "blue-text py-3"}, 
               " t the form below to start the process:"
              ),
        React.createElement("div", { className: "form-group" },
        loader4,
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
        )
    );



}