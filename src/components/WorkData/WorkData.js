import React from 'react';

const WorkData = (props) => {

    const {title} = props.data;

    return (
        <div className=''>
            <p>{title}</p>
        </div>
    );
};

export default WorkData;