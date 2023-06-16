import React from 'react';

const Trade = (props) => {

    const {image, title} = props.trade

    return (
        <div className='justify-items-center content-center'>
            <img className='w-10' src={image} alt="service icon" />
            <small className='text-center'>{title}</small>
        </div>
    );
};

export default Trade;