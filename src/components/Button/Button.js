import React from "react";

export default function Button({buttonValue}) {
    return     (
        <button className="form-field" type="submit">
        {buttonValue}
        </button>)
}