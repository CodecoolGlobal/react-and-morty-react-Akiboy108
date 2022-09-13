import React from 'react'
import './Location.css';
import Locationdisplay from '../LocationDisplay/LocationDisplay';
import { useState } from 'react';

const Location = (props) => {
    const [location, setLocation] = useState('');
    const name = props.location.name;
    const type = props.location.type;

    function showProp(target) {
        setLocation(target)
    }

    return (
        <div onClick={(e) => showProp(e.target.innerText)} id='Container'>
            <div className='row'>
                <div id='locationName'>{name}</div>
                <div id='locationType'>{type}</div>
            </div>
        </div>
    )
}
export default Location;