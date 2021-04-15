import React, { useState } from "react";

const ItemForm = ({
    label,
    placeholder,
    type = "text",
    validations = [],
    ...props
}) => {
    const [errMsg, setErrMsg] = useState(null);

    function validateField(ev) {
        let { value } = ev.target;

        for (let { validationFunction, errorMessage } of validations) {
            if (validationFunction(value) == false) {
                setErrMsg(errorMessage);
                return;
            }
        }
        setErrMsg(null);
    }

    return (
        <div>
            <label>{label}</label>
            {type === "textarea" && (
                <textarea
                    placeholder={placeholder}
                    onKeyUp={validateField}
                    {...props}
                />
            )}

            {type !== "textarea" && (
                <input
                    type={type}
                    placeholder={placeholder}
                    onKeyUp={validateField}
                    {...props}
                />
            )}

            {errMsg && <div id="error">{errMsg}</div>}
        </div>
    );
};

export default ItemForm;
