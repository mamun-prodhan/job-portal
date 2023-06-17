import React from 'react';

const TradeData = (props) => {
    const {image, title, details} = props.tradeData;
    return (
        <div className='flex mt-3'>
            <div className='mr-3 mt-2 lg:mt-1'><img src={image} alt="tradeIcon" /></div>
            <div>
                <p className='text-2xl lg:text-4xl'>{title}</p>
                <p className='mt-2'>{details}</p>
            </div>
        </div>
    );
};

export default TradeData;