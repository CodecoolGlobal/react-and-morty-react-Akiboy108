import React from 'react'

const Location = (props) => {
    const location = props.location;
    console.log('LOC:::::::::::::::', location)
    return (
        <div id='Container'>
            <span>{location.map(x => x.name)}</span>
            <span>{location.map(x => x.type)}</span>
        </div>
    )
}
export default Location;