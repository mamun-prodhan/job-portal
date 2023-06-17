import React from 'react';

const WorkData = (props) => {

    const {title} = props.data;

    return (
        <div className='md:p-2 lg:p-0'>
            <p>{title}</p>
        </div>
    );
};

export default WorkData;