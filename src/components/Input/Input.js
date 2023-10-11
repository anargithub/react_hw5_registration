// import "./Input.css";
import React from "react";

export default function Input({ placeholder, name, value, setInputValue, submitted }){
    return (
        <div>
            <input
                onChange={(e) => {setInputValue(e.target.value);}}
                value={value}
                placeholder={placeholder}
                name={name}
                className={`form-field`}
            />
            {submitted && !value ? (
            <span>Please enter a {placeholder}</span>
            ) : null}
        </div>
    )
}