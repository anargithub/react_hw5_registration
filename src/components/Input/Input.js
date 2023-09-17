// import "./Input.css";
import React from "react";

export default function Input({ id, placeholder, name, value, onChange, error }){
    return (
        <div>
            <input
                onChange={onChange}
                value={value}
                id={id}
                placeholder={placeholder}
                name={name}
                className={`form-field ${error ? "error" : ""}`}
            />
            {error && <span>{error}</span>}
        </div>
    )
}