import React from 'react';

const WorkData = (props) => {

    const {title} = props.data;

    return (
        <div className='md:pt-2 md:pr-2 md:pb-2 lg:p-0'>
            <p>{title}</p>
        </div>
    );
};

export default WorkData;