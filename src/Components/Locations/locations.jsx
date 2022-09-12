import React from 'react';
import Location from '../Location/Location';

const Locations = (props) => {
    return (
        <div id='Container'>
            {props.locations.results.map(x => <Location location={x} />) }
        </div>
    )
}

export default Locations;