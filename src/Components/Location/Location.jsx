import React from 'react'
import './Location.css';
import Locationdisplay from '../LocationDisplay/LocationDisplay';
import { useState } from 'react';

const Location = (props) => {
    const [location, setLocation] = useState('');
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