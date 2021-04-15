import React, { useState } from "react";
import ItemForm from "./ItemForm";
import { validationPairs } from "./formValidation";
import "./index.css";

const Step1 = ({ setForm, formData, navigation }) => {
    const { projectName, projectIntro, projectDescription } = formData;
    const { next } = navigation;

    const isEnabled =
        projectName &&
        projectName.length > 0 &&
        projectIntro &&
        projectIntro.length > 0 &&
        projectDescription &&
        projectDescription.length > 0;

    return (
        <div className="form">
            <ItemForm
                label="Project Name"
                placeholder="Project 1"
                name="projectName"
                value={projectName}
                validations={[validationPairs.filled]}
                onChange={setForm}
            />
            <ItemForm
                label="Project Introduction"
                placeholder="Introduction..."
                name="projectIntro"
                validations={[validationPairs.filled]}
                onChange={setForm}
                value={projectIntro}
            />
            <ItemForm
                label="Project Description"
                placeholder="This project is about..."
                name="projectDescription"
                type="textarea"
                validations={[validationPairs.filled]}
                onChange={setForm}
                value={projectDescription}
            />
            <div>
                <button disabled={!isEnabled} onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step1;
