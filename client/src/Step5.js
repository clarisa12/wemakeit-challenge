import React from "react";
import { validationPairs } from "./formValidation";

import ItemForm from "./ItemForm";

const Step5 = ({ sendForm, setForm, formData, navigation }) => {
    const {
        firstName,
        lastName,
        phone,
        email,
        address,
        city,
        state,
        zip,
    } = formData;
    const { previous, go } = navigation;
    const isEnabled =
        firstName &&
        firstName.length > 0 &&
        lastName &&
        lastName.length > 0 &&
        phone &&
        phone.length > 0 &&
        email &&
        email.length > 0 &&
        address &&
        address.length > 0 &&
        state &&
        state.length > 0 &&
        zip &&
        zip.length > 0;

    return (
        <div className="form">
            <p id="header">Contact Details</p>
            <ItemForm
                label="First Name"
                name="firstName"
                placeholder="Jane"
                value={firstName}
                onChange={setForm}
            />
            <ItemForm
                label="Last Name"
                name="lastName"
                placeholder="Doe"
                value={lastName}
                onChange={setForm}
            />
            <ItemForm
                label="Phone"
                name="phone"
                placeholder="+43 987 101 101"
                value={phone}
                validations={[validationPairs.filled, validationPairs.phone]}
                onChange={setForm}
            />
            <ItemForm
                label="E-mail"
                name="email"
                type="email"
                placeholder="email@domain.com"
                value={email}
                onChange={setForm}
                validations={[validationPairs.filled, validationPairs.email]}
            />
            <ItemForm
                label="Address"
                name="address"
                placeholder="Opernring 1"
                value={address}
                onChange={setForm}
                validations={[validationPairs.filled]}
            />
            <ItemForm
                label="City"
                name="city"
                placeholder="Wien"
                value={city}
                onChange={setForm}
                validations={[validationPairs.filled]}
            />
            <ItemForm
                label="State"
                name="state"
                placeholder="Austria"
                value={state}
                onChange={setForm}
                validations={[validationPairs.filled]}
            />
            <ItemForm
                label="Zip"
                name="zip"
                value={zip}
                onChange={setForm}
                validations={[validationPairs.filled]}
            />
            <div>
                <button id="button2" onClick={previous}>
                    Previous
                </button>
                <button
                    disabled={!isEnabled}
                    type="button"
                    id="submit"
                    onClick={() => {
                        sendForm();
                        go("submit");
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Step5;
