import React from 'react'
import './Location.css';

const Location = (props) => {
    const name = props.location.name;
    const type = props.location.type;

    return (
        <div id='Container'>
            <div className='locationRow'>
                <div id='locationName'>{name}</div>
                <div id='locationType'>{type}</div>
            </div>
        </div>
    )
}
export default Location;