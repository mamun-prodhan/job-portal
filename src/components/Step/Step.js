import React from 'react';

const Step = (props) => {
    const {image, step, title,description} = props.step;
    console.log(title);
    return (
        <div>
            <h3>{step}</h3>
            <img src={image} alt="arrow steps" />
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default Step;