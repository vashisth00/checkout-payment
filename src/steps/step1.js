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
                "div", { className: "col-6 px-right pt-3" }, 
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
                "div", { className: "col-6 px-price pt-3" }, 
            React.createElement("label", { htmlFor: "number" }, "Invoice Number"), 
            React.createElement("input", {
                className: "form-control",
                id: "email",
                name: "email",
                type: "text",
                placeholder: "Invoice Number",
                value: props.email,
                onChange: props.handleChange
            })
              ),
              React.createElement(
                "div", { className: "col-12 px-price pt-3" }, 
            React.createElement("label", { htmlFor: "number" }, "Your Debtor"), 
            React.createElement("input", {
                className: "form-control",
                id: "email",
                name: "email",
                type: "text",
                placeholder: "Invoice Number",
                value: props.email,
                onChange: props.handleChange
            })
              ),
              React.createElement(
                "div", { className: "col-6 px-right pt-3" }, 
            React.createElement("label", { htmlFor: "email" }, "Invoice Issue Date"), 
            React.createElement("input", {
                className: "form-control",
                id: "email",
                name: "email",
                type: "date",
                placeholder: "€",
                value: props.email,
                onChange: props.handleChange
            }),
              ),
              React.createElement(
                "div", { className: "col-6 px-price pt-3" }, 
            React.createElement("label", { htmlFor: "number" }, "Invoice Number"), 
            React.createElement("input", {
                className: "form-control",
                id: "email",
                name: "email",
                type: "text",
                placeholder: "Invoice Number",
                value: props.email,
                onChange: props.handleChange
            })
              ),
              React.createElement(
                "div", { className: "col-1  pt-4 float-left" }, 
            
            React.createElement("input", {
                className: "float-left ",
                id: "email",
                name: "email",
                type: "checkbox",
                value: props.email,
                onChange: props.handleChange
            })
              ),
              React.createElement(
                "div", { className: "col-11 px-price pt-3" }, 
            React.createElement("label", { htmlFor: "text", className:"small-text" }, "By checking this tick you agree to the privacy policy and other stuff like that"), 
    
              ),
              )
            )

            
            );



}

