import React, { Fragment, useState, useRef } from "react";
import { useForm, useStep } from "react-hooks-helper";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Submit from "./Submit";

import "./index.css";

const steps = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "submit" },
];

const MultiStepForm = ({}) => {
    const [formData, setForm] = useForm({});
    const [images, setImages] = useState([]);
    const [pledges, setPledges] = useState([]);
    const formRef = useRef(null);

    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    async function sendForm() {
        const formData = new FormData();
        const elements = formRef.current.elements;
        for (const idx in elements) {
            formData.append(elements[idx].name, elements[idx].value);
        }

        const response = await fetch(formRef.current.getAttribute("action"), {
            method: "POST",
            body: formData,
        });
    }

    const props = {
        formData,
        images,
        setImages,
        setForm,
        pledges,
        setPledges,
        navigation,
        sendForm,
    };

    const getFormStep = () => {
        switch (id) {
            case "1":
                return <Step1 {...props} />;
            case "2":
                return <Step2 {...props} />;
            case "3":
                return <Step3 {...props} />;
            case "4":
                return <Step4 {...props} />;
            case "5":
                return <Step5 {...props} />;
            case "submit":
                return <Submit {...props} />;
        }
    };

    return (
        <Fragment>
            <img
                src={process.env.PUBLIC_URL + "wemakeit-logo.png"}
                alt="img"
                width="600px"
                className="LogoHeader"
            />
            <form
                ref={formRef}
                action="http://localhost:8000/form"
                method="post"
                enctype="multipart/form-data"
            >
                {getFormStep()}
            </form>
            <div id="steps">
                {id !== "submit" && `Step ${id} out of ${steps.length - 1}`}
            </div>
        </Fragment>
    );
};

export default MultiStepForm;
