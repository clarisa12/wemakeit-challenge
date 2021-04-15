import React, { Fragment } from "react";
import { validationPairs } from "./formValidation";
import ItemForm from "./ItemForm";

const Step4 = ({ pledges, setPledges, navigation }) => {
    const { previous, next } = navigation;

    function addPledge() {
        setPledges([...pledges, { imageDescription: "", imageTitle: "" }]);
    }

    function setPledgeProperty(idx, property, value) {
        let imgs = [...pledges];
        pledges[idx][property] = value;
        setPledges(imgs);
    }

    function removePledge(idx) {
        setPledges(pledges.filter((_, pledgeIdx) => idx !== pledgeIdx));
    }

    return (
        <Fragment>
            {pledges.map(
                ({ pledgeAmount, pledgeDescription, pledgeTitle }, idx) => (
                    <div className="form" key={idx}>
                        <ItemForm
                            label="Title"
                            name="pledgeTitle"
                            value={pledgeTitle}
                            validations={[validationPairs.filled]}
                            onChange={(ev) =>
                                setPledgeProperty(
                                    idx,
                                    ev.target.name,
                                    ev.target.value
                                )
                            }
                        />
                        <ItemForm
                            label="Amount"
                            name="pledgeAmount"
                            value={pledgeAmount}
                            validations={[validationPairs.number]}
                            onChange={(ev) =>
                                setPledgeProperty(
                                    idx,
                                    ev.target.name,
                                    ev.target.value
                                )
                            }
                        />
                        <ItemForm
                            label="Description"
                            type="textarea"
                            name="pledgeDescription"
                            validations={[validationPairs.filled]}
                            value={pledgeDescription}
                            onChange={(ev) =>
                                setPledgeProperty(
                                    idx,
                                    ev.target.name,
                                    ev.target.value
                                )
                            }
                        />

                        <button
                            type="button"
                            id="button-remove"
                            onClick={(_) => removePledge(idx)}
                        >
                            Remove Pledge
                        </button>
                    </div>
                )
            )}
            <button type="button" id="button-add" onClick={addPledge}>
                Add pledge
            </button>

            <div>
                <button id="button2" onClick={previous}>
                    Previous
                </button>
                <button onClick={next}>Next</button>
            </div>
        </Fragment>
    );
};

export default Step4;
