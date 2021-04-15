import React, { useState } from "react";
import { validationPairs } from "./formValidation";
import ItemForm from "./ItemForm";

const Step2 = ({ images, setImages, navigation }) => {
    const { previous, next } = navigation;

    function addImage() {
        setImages([...images, { imageDescription: "", imageTitle: "" }]);
    }

    function setImageTitle(idx, value) {
        let imgs = [...images];
        images[idx].imageTitle = value;
        setImages(imgs);
    }

    function setImageDescription(idx, value) {
        let imgs = [...images];
        images[idx].imageDescription = value;
        setImages(imgs);
    }

    function removeImage(idx) {
        setImages(images.filter((_, imageIndex) => idx !== imageIndex));
    }

    return (
        <div className="form">
            <p>Upload Images</p>

            <div>
                {images.map(({ imageTitle, imageDescription }, idx) => (
                    <div key={idx}>
                        <input type="file" name={`projectImage-${idx}`} />
                        <ItemForm
                            label="Image Title"
                            name={`imageTitle-${idx}`}
                            placeholder="Image Title"
                            value={imageTitle}
                            onChange={(ev) =>
                                setImageTitle(idx, ev.target.value)
                            }
                        />
                        <ItemForm
                            label="Image Description"
                            name={`imageDescription-${idx}`}
                            placeholder="Short description..."
                            value={imageDescription}
                            onChange={(ev) =>
                                setImageDescription(idx, ev.target.value)
                            }
                        />
                        <button
                            type="button"
                            id="button-remove"
                            onClick={(_) => removeImage(idx)}
                        >
                            Remove Image
                        </button>
                    </div>
                ))}
                <button id="button-add" type="button" onClick={addImage}>
                    Add New Image
                </button>
            </div>

            <div>
                <button id="button2" onClick={previous}>
                    Previous
                </button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Step2;
