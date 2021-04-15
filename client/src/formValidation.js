function isFilled(fieldValue) {
    return fieldValue.trim() != "";
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidPhone(phone) {
    const re = /^\+[1-9]{1}[0-9]{3,14}$/;
    return re.test(String(phone).split(" ").join(""));
}

function isNumeric(number) {
    const re = /^\d+$/;
    return re.test(number.trim());
}

const errorMessage = {
    empty: "Field cannot be blank",
    invalidEmail: "Please provide a valid email",
    invalidPhone: "Please provide a valid phone number",
    notNumber: "The provided value must be a number",
};

export const validationPairs = {
    filled: { validationFunction: isFilled, errorMessage: errorMessage.empty },
    email: {
        validationFunction: isValidEmail,
        errorMessage: errorMessage.invalidEmail,
    },
    phone: {
        validationFunction: isValidPhone,
        errorMessage: errorMessage.invalidPhone,
    },
    number: {
        validationFunction: isNumeric,
        errorMessage: errorMessage.notNumber,
    },
};
