import React from 'react'
import './Location.css';

const Location = (props) => {
    const name = props.location.name;
    const type = props.location.type;

    return (
            <>
                <div className='locationName'>{name}</div>
                <div className='locationType'>{type}</div>
            </>

    )
}
export default Location;