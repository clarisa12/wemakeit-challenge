import React, { useState } from "react";
import ItemForm from "./ItemForm";
import { validationPairs } from "./formValidation";
import "./index.css";

const Step1 = ({ setForm, formData, navigation }) => {
    const { projectName, projectIntro, projectDescription } = formData;
    const { next } = navigation;

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
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Step1;
