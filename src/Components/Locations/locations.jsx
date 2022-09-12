import React from 'react';
import App from './App';
import Location from './Location';

const Locations = (props) => {
    const locations = props.locations;
    console.log('LOC::::::S:::::::::', locations)

    return (
        <div id='Container'>
            <Location location={locations} />
        </div>
    )
}

export default Locations;