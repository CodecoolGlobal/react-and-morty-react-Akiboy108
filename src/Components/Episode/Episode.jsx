import React from "react";

export default function Episode(props)
{
    return <div className="Episode">
        Episode{props.index}: {props.episode}
    </div>
}