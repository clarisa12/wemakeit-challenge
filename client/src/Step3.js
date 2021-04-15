import React from "react";
import { validationPairs } from "./formValidation";
import ItemForm from "./ItemForm";

const Step3 = ({ setForm, formData, navigation }) => {
    const { finGoal } = formData;
    const { previous, next } = navigation;

    return (
        <div className="form">
            <ItemForm
                label="Financial Goal"
                placeholder="0"
                name="finGoal"
                value={finGoal}
                onChange={setForm}
                validations={[validationPairs.number]}
            />
            <div>
                <button id="button2" onClick={previous}>
                    Previous
                </button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Step3;
