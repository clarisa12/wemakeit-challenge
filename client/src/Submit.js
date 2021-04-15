import React from "react";
const Submit = ({ navigation }) => {
    // TODO: submit to server
    const { go } = navigation;
    return (
        <div>
            <h3>Thank you for submitting.</h3>
            To post another project, click on the button below:
            <br />{" "}
            <button type="button" id="submit" onClick={() => go("1")}>
                New Project
            </button>
        </div>
    );
};

export default Submit;
