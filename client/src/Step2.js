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

    async function setImageData(idx, file) {
        let imgs = [...images];
        const base64Image = await toDataURL(file);
        images[idx].imageData = base64Image;
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

    const toDataURL = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    return (
        <div className="form">
            <p>Upload Images</p>

            <div>
                {images.map(({ imageTitle, imageDescription }, idx) => (
                    <div key={idx}>
                        <input
                            type="file"
                            onChange={(ev) => {
                                const file = ev.target.files[0];
                                setImageData(idx, file);
                            }}
                            name={`projectImage-${idx}`}
                        />

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
