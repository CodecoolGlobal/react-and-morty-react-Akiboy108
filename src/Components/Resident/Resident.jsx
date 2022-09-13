import React from "react";

export default function Resident(props) {
    return <div className="Resident">
        Resident {props.index}: <a target="blank" href={props.resident}>{props.resident}</a>
    </div>
}