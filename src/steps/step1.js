import React from 'react';
import '../index.css';

export default function Step1(props) {
    if (props.currentStep !== 1) {
        return null;
    }
    return(
      
       
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
                "Get Credit Insurance"
              ),
              React.createElement(
                "p",
                null,
                // {className: "blue-text py-3"}, 
                "To get credit card insurance please fill out the form below to start the process:"
              ),
              React.createElement(
                "div", { className: "row pricing" }, 
              React.createElement(
                "div", { className: "col-6 px-2" }, 
            React.createElement("label", { htmlFor: "email" }, "Invoice Value"), 
            React.createElement("input", {
                className: "form-control",
                id: "email",
                name: "email",
                type: "text",
                placeholder: "€",
                value: props.email,
                onChange: props.handleChange
            }),
              ),
              React.createElement(
                "div", { className: "col-6" }, 
            React.createElement("label", { htmlFor: "email" }, "Invoice Value"), 
            React.createElement("input", {
                className: "form-control",
                id: "email",
                name: "email",
                type: "text",
                placeholder: "€",
                value: props.email,
                onChange: props.handleChange
            })
              )
              )
            )

            
            );



}

